import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

class App extends React.Component {
  state = {
    calcInput: "",
  }


  handleChanges = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  calculate = () =>{

  }

  render(){
    return (
      <div className="calculator">
        <CalculatorDisplay value="0"/>
        <div className="row-calc">
          <NumberButton className="button" value="clear" />
          <ActionButton className="action" value="÷" />
        </div>
        <div className="row-calc">
          <NumberButton className="number" value="7" />
          <NumberButton className="number" value="8" />
          <NumberButton className="number" value="9" />
          <ActionButton className="action" value="x" />
        </div>
        <div className="row-calc">
          <NumberButton className="number" value="4" />
          <NumberButton className="number" value="5" />
          <NumberButton className="number" value="6" />
          <ActionButton className="action" value="-" />
        </div>
        <div className="row-calc">
          <NumberButton className="number" value="1" />
          <NumberButton className="number" value="2" />
          <NumberButton className="number" value="3" />
          <ActionButton className="action" value="+" />
        </div>
        <div className="row-calc">
          <NumberButton className="button" value="0" />
          <ActionButton className="action" value="=" />
        </div>
      </div>
    );
  }
  
};

export default App;
