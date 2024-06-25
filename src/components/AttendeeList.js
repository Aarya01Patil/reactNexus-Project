import React from 'react';
import './AttendeeList.css';

const AttendeeList = ({ attendees }) => {
  return (
    <div className="attendee-list">
      {attendees.map(attendee => (
        <div key={attendee.id} className="attendee-card">
          <h2>{attendee.name}</h2>
          <p>{attendee.email}</p>
        </div>
      ))}
    </div>
  );
};

export default AttendeeList;
