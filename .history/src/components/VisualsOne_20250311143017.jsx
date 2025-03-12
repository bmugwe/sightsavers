// src/App.js
import React, { useState } from 'react';
import Header from './components/builds/Header';
import GridLayout from './components/builds/GridLayout';
import './App.css';

const VisualsOne = () => {
  const [period, setPeriod] = useState({ start: '', end: '' });

  const handlePeriodChange = (newPeriod) => {
    setPeriod((prevPeriod) => ({ ...prevPeriod, ...newPeriod }));
  };

  return (
    <div className="app">
      <Header onPeriodChange={handlePeriodChange} />
      <GridLayout />
      <div className="period-info">
        <p>Period Start: {period.start}</p>
        <p>Period End: {period.end}</p>
      </div>
    </div>
  );
};

export default VisualsOne;
