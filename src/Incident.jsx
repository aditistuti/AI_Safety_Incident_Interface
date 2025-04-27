import React from 'react';

// This shows each incident item individually
export default function Incident({ incident, expandedId, toggleDetails, isMobile }) {
  return (
    <div 
      key={incident.id}
      className={`incident-card ${expandedId === incident.id ? 'expanded' : ''}`}
      onClick={() => {
        if (isMobile) {
          toggleDetails(incident.id);
        }
      }}
    >
      <div className="incident-top">
        <div>
         
          <h3>{incident.title}</h3>

          
          <div className={`severity-tag ${incident.severity.toLowerCase()}`}>
            {incident.severity}
          </div>

         
          <div className="incident-date">
            {new Date(incident.reported_at).toLocaleString()} 
          </div>
        </div>

        
        {!isMobile && (
          <button 
            className="details-button"
            onClick={(e) => {
              e.stopPropagation(); 
              toggleDetails(incident.id);
            }}
            aria-expanded={expandedId === incident.id}
          >
            {expandedId === incident.id ? 'Hide Details ▲' : 'View Details ▼'}
          </button>
        )}
      </div>

      
      <div className={`incident-description ${expandedId === incident.id ? 'visible' : ''}`}>
        {incident.description}
      </div>
    </div>
  );
}
