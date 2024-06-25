import React, { useState, useEffect } from 'react';
import AttendeeList from './components/AttendeeList';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [attendees, setAttendees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch('/data/attendees.json')
      .then(response => response.json())
      .then(data => setAttendees(data));
  }, []);

  const filteredAttendees = attendees.filter(attendee =>
    attendee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <div className="content">
        <h1 className="heading">ReactNexus Attendees</h1>
        <SearchBar setSearchTerm={setSearchTerm} />
        <AttendeeList attendees={filteredAttendees} />
      </div>
      <div className="image-container"></div>
    </div>
  );
}

export default App;
