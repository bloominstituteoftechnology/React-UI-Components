import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import Buttons from './components/ButtonComponents/Buttons';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className = 'app'>
        <Display/>
        <Buttons/>
      </div>
    );
  }
};

export default App;
