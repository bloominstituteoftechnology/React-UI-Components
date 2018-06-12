import React from 'react';
import './App.css';

import Row from './components/LayoutComponents/Row'
import ActionButton from './components/ButtonComponents/ActionButton'
import NumberButton from './components/ButtonComponents/NumberButton'
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'

const App = () => {
  return (
    <div className="app-container">
      <Row><CalculatorDisplay total="0" /></Row>
      <Row>
        <ActionButton action="clear" />
        <NumberButton number="%" />
      </Row>
      <Row>
        <NumberButton number="7" />
        <NumberButton number="8" />
        <NumberButton number="9" />
        <NumberButton number="x" />
      </Row>
      <Row>
        <NumberButton number="4" />
        <NumberButton number="5" />
        <NumberButton number="6" />
        <NumberButton number="-" />
      </Row>
      <Row>
        <NumberButton number="1" />
        <NumberButton number="2" />
        <NumberButton number="3" />
        <NumberButton number="+" />
      </Row>
      <Row>
        <ActionButton action="0" />
        <NumberButton number="=" />
      </Row>
    </div>
  );
};

export default App;
