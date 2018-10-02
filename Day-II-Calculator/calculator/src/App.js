import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

class App extends React.Component {
  render() {
    return (
      <div className="calculator-wrapper">
        <CalculatorDisplay />
      </div>  
    );
  }
}

export default App;
