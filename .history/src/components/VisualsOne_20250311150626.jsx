// src/App.js
import React, { useState } from 'react';
import Header from './Header';
import GridLayout from './GridLayout';
import './../App.css';

const VisualsOne = () => {
  const [period, setPeriod] = useState({ start: '', end: '' });

  const handlePeriodChange = (newPeriod) => {
    setPeriod((prevPeriod) => ({ ...prevPeriod, ...newPeriod }));
  };

  return (
    <div className="app">
      <Header onPeriodChange={handlePeriodChange} />
      <div className="grid-layout">
      <div className="row">
        <div className="column">Column 1</div>
        <div className="column">Column 2</div>
        <div className="column">Column 3</div>
      </div>
      <div className="row">
        <div className="column">Column 1</div>
        <div className="column">Column 2</div>
        <div className="column">Column 3</div>
      </div>
      <div className="row">
        <div className="column">Column 1</div>
        <div className="column">Column 2</div>
        <div className="column">Column 3</div>
      </div>
    </div>
    </div>
  );
};

export default VisualsOne;
