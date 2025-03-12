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
      <GridLayout />
    </div>
  );
};

export default VisualsOne;
