import React from 'react';
import './App.css';
import CardContainer from './components/CardComponents/CardContainer';
import CardBanner from './components/CardComponents/CardBanner';
import CardContent from './components/CardComponents/CardContent';

const App = () => {
  return (
    <div className="full-card">
      <CardBanner />
      <CardContent />
      <CardContainer />
    </div >
  );
};

export default App;
