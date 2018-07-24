import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import Action from './components/ButtonComponents/ActionButton';
import Number from './components/ButtonComponents/NumberButton';
import Container from './components/ButtonComponents/Container';

const App = () => {
  return (
    <div className = "container text-center" id = "calc">
      <Display className= "display" />
          <Container className="clear">
            <Action className="action" text="clear" />
            <Number color="col operator" text="/" />
          </Container>
          <Container>
            <Number color="num" text="7" />
            <Number color="num" text="8" />
            <Number color="num" text="9" />
            <Number color="col operator" text="X" />
          </Container>
          <Container>
            <Number color="num" text="4" />
            <Number color="num" text="5" />
            <Number color="num" text="6" />
            <Number color="col operator" text="-" />
          </Container>
          <Container>
            <Number color="num" text="1" />
            <Number color="num" text="2" />
            <Number color="num" text="3" />
            <Number color="col operator" text="+" />
          </Container>
          <Container>
            <Action className="action" text="0" />
            <Number color="col operator" text="=" />
          </Container>
    </div>
  );
};

export default App;
