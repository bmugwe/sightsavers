// src/App.js
import React, { useState } from 'react';
import Header from './components/build/Header';
import GridLayout from './components/GridLayout';
import './App.css';

const App = () => {
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

export default App;
