import React from 'react';
import ToggleButton from '../ToggleButton/toggleButton';
import logo from '../../assets/gdrive.png';
import './header.css';

export default function Header({ title, status, toggleButton }) {
  return (
    <div className="flexRow header">
      <div className="headerFlexRow">
        <img src={logo} className="logo" alt="logo" />
        <div className="title">{title}</div>
      </div>
      <ToggleButton status={status} toggleButton={toggleButton} />
    </div>
  )
};