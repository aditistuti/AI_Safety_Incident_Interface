import React, { useState, useEffect } from 'react';
import '../style/IncidentDashboard.css';
import Incident from './Incident';
import Form from './Form';


const seedIncidents = [
  { id: 1, title: "LLM Hallucination in Critical Info", description: "LLM provided incorrect safety procedure information...", severity: "High", reported_at: "2025-04-01T20:00:00Z" },
  { id: 2, title: "Minor Data Leak via Chatbot", description: "Chatbot inadvertently exposed non-sensitive user metadata...", severity: "Low", reported_at: "2025-03-20T14:45:00Z" },
  { id: 3, title: "Biased Recommendation Algorithm", description: "Algorithm consistently favored certain demographics...", severity: "Medium", reported_at: "2025-03-15T15:30:00Z" }
];

export default function IncidentDashboard() {
  const [incidentList, setIncidentList] = useState(seedIncidents);
  const [expandedIncident, setExpandedIncident] = useState(null);
  const [formFields, setFormFields] = useState({ title: '', description: '', severity: 'Low' });
  const [formError, setFormError] = useState('');
  const [selectedSeverity, setSelectedSeverity] = useState('All');
  const [dateSort, setDateSort] = useState('Newest');
  const [formSuccess, setFormSuccess] = useState('');
  const [mobileView, setMobileView] = useState(window.innerWidth < 768);

 
  useEffect(() => {
    const resizeWatcher = () => {
      setMobileView(window.innerWidth < 768);
    };

    window.addEventListener('resize', resizeWatcher);
    
    return () => {
      window.removeEventListener('resize', resizeWatcher);
    };
  }, []);

  const handleExpandToggle = (incidentId) => {
    setExpandedIncident(prevId => (prevId === incidentId ? null : incidentId));
  };


  const updateFormField = (e) => {
    const { name, value } = e.target;
    setFormFields(prevFields => ({
      ...prevFields,
      [name]: value
    }));
  };


  const submitIncident = (e) => {
    e.preventDefault();
    
    if (!formFields.title.trim() || !formFields.description.trim()) {
      setFormError('You forgot to fill all the fields.');
      setFormSuccess('');
      return;
    }

    const newIncidentEntry = {
      id: Date.now(), 
      ...formFields,
      reported_at: new Date().toISOString()
    };

    setIncidentList(prev => [newIncidentEntry, ...prev]);   
    setFormFields({ title: '', description: '', severity: 'Low' });
    setFormError('');
    setFormSuccess('Incident successfully logged!');

    setTimeout(() => {
      setFormSuccess('');
    }, 3000);
  };

  const shownIncidents = incidentList
    .filter(inc => selectedSeverity === 'All' || inc.severity === selectedSeverity)
    .sort((a, b) => {
      if (dateSort === 'Newest') {
        return new Date(b.reported_at) - new Date(a.reported_at);
      } else {
        return new Date(a.reported_at) - new Date(b.reported_at);
      }
    });

  return (
    <div className="dashboard-container">
      <h1>AI Safety Incident Interface</h1> 

      <div className="controls">

        <select 
          value={selectedSeverity}
          onChange={(e) => setSelectedSeverity(e.target.value)}
          className="filter-select"
        >
          <option value="All">All Severities</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>


        <select 
          value={dateSort}
          onChange={(e) => setDateSort(e.target.value)}
          className="filter-select"
        >
          <option value="Newest">Newest First</option>
          <option value="Oldest">Oldest First</option>
        </select>
      </div>

      <div className={`dashboard-grid ${mobileView ? 'mobile' : ''}`}>
        <div className="incident-section">
          {shownIncidents.map(inc => (
            <Incident 
              key={inc.id}
              incident={inc}
              expandedId={expandedIncident}
              toggleDetails={handleExpandToggle}
              isMobile={mobileView}
            />
          ))}
        </div>


        <Form 
          newIncident={formFields}
          handleInputChange={updateFormField}
          handleFormSubmit={submitIncident}
          error={formError}
          successMessage={formSuccess}
        />
      </div>
    </div>
  );
}
