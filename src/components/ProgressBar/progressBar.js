import React from 'react';
import './progressBar.css';

export default function ProgressBar({ value, count, total }) {
  const calculateRadius = value > 97 
    ? 15 - 5*(100-value)
    : 1;

  return (
    <div className="progressWrapper">
      <div className="flexRow">
        <div>Albums</div>
        <div>{count}/{total}</div>
      </div>
      {/* <progress value={value} max="100" /> */}
	    <div className="meter">
        <span style={{width: value+'%', borderTopRightRadius: calculateRadius+'px', borderBottomRightRadius: calculateRadius+'px'}} />
      </div>
    </div>
  )
};