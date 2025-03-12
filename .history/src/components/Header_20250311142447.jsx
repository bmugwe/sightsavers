// src/components/Header.js
import React from 'react';

const Header = ({ onPeriodChange }) => {
  return (
    <div className="header">
      <div className="dropdowns">
        <select className="dropdown">
          <option value="">Dropdown 1</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
        <select className="dropdown">
          <option value="">Dropdown 2</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
        <select className="dropdown">
          <option value="">Dropdown 3</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
        <select className="dropdown">
          <option value="">Dropdown 4</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
      </div>

      <div className="calendar-inputs">
        <input 
          type="date" 
          onChange={e => onPeriodChange({ start: e.target.value })}
        />
        <input 
          type="date" 
          onChange={e => onPeriodChange({ end: e.target.value })}
        />
      </div>
    </div>
  );
};

export default Header;
