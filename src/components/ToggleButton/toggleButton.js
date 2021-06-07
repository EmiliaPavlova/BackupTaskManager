import React from 'react';
import './toggleButton.css';

export default function ToggleButton({ toggleButton, status }) {
  return (
    <div className={`toggleContainer ${status}`} onClick={toggleButton}>
      <div className="dialogButton" />
    </div>
  );
}
