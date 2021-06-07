import React from 'react';
import './dataRow.css';

export default function DataRow({ title, content, status }) {
  return (
    <div className={`${status !== 'none' ? 'active ' : '' }flexRow dataRow`}>
      <div className="">{title}</div>
      <div className="dataContent">{content}</div>
    </div>
  );
}
