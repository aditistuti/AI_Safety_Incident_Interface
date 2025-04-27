import React from 'react';

// Form component for adding new incident reports
export default function Form({ newIncident, handleInputChange, handleFormSubmit, error, successMessage }) {
  return (
    <div className="form-section">
      <h2>New Incident Report</h2> 

      <form onSubmit={handleFormSubmit}>
        
        <input
          type="text"
          name="title"
          placeholder="Title of the Incident"
          value={newIncident.title}
          onChange={handleInputChange}
        />

       
        <textarea
          name="description"
          placeholder="Describe what happened..."
          value={newIncident.description}
          onChange={handleInputChange}
        >
        </textarea>


        <select 
          name="severity"
          value={newIncident.severity}
          onChange={handleInputChange}
        >
          <option value="Low">Low </option>
          <option value="Medium">Medium </option>
          <option value="High">High </option>
        </select>


        <button type="submit" className="submit-btn">
          Log Incident
        </button>

        {error ? (
          <p className="error-message animate-fade">
            {error} 
          </p>
        ) : null}

 
        {successMessage && (
          <p className="success-message animate-pop">
            {successMessage} 
          </p>
        )}
 
      </form>
    </div>
  );
}
