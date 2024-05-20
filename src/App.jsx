import React, { useState } from 'react';
import './App.css'; // Import the CSS file

const App = () => {
  const [description, setDescription] = useState('');
  const [zoomLink, setZoomLink] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleZoomLinkChange = (e) => {
    setZoomLink(e.target.value);
  };

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };

  const handleSubmit = () => {
    // Implement submit functionality here, like sending data to backend or showing notifications
    console.log('Submitted:', { description, zoomLink, startTime, endTime });
  };

  return (
    <div className="container">
      <h1>Swarm Session Initialization</h1>
      <form>
        <div className="form-group">
          <label>Description:</label>
          <input type="text" value={description} onChange={handleDescriptionChange} />
        </div>
        <div className="form-group">
          <label>Zoom Link / VS Code Liveshare Link:</label>
          <input type="text" value={zoomLink} onChange={handleZoomLinkChange} />
        </div>
        <div className="form-group">
          <label>Start Time:</label>
          <input type="datetime-local" value={startTime} onChange={handleStartTimeChange} />
        </div>
        <div className="form-group">
          <label>End Time:</label>
          <input type="datetime-local" value={endTime} onChange={handleEndTimeChange} />
        </div>
        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default App;
