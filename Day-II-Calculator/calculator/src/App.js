import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import logic from './CalculatorLogic.js'


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {display: '0'};
  }

  setDisplay = (change) =>{
    this.setState({display: change});
  }

  solveEquation = () =>{
    logic.isReset = true;
    this.setState({display: logic.solveEquation()});
  }

  render(){
    return (
      <div className="calculator">
        <CalculatorDisplay display={this.state.display}/>
        <div className="row">
          <ActionButton clickedButton={this.setDisplay} displayType="clear" text="clear" buttonStyle="button white big"/>
          <NumberButton clickedButton={this.setDisplay} displayType="/" text="÷" buttonStyle="signs red small"/>
        </div>
        <div className="row">
          <NumberButton clickedButton={this.setDisplay} displayType="7" text="7" buttonStyle="button white small"/>
          <NumberButton clickedButton={this.setDisplay} displayType="8" text="8" buttonStyle="button white small"/>
          <NumberButton clickedButton={this.setDisplay} displayType="9" text="9" buttonStyle="button white small"/>
          <NumberButton clickedButton={this.setDisplay} displayType="*" text="×" buttonStyle="signs red small"/>
        </div>
        <div className="row">
          <NumberButton clickedButton={this.setDisplay} displayType="4" text="4" buttonStyle="button white small"/>
          <NumberButton clickedButton={this.setDisplay} displayType="5" text="5" buttonStyle="button white small"/>
          <NumberButton clickedButton={this.setDisplay} displayType="6" text="6" buttonStyle="button white small"/>
          <NumberButton clickedButton={this.setDisplay} displayType="-" text="-" buttonStyle="signs red small"/>
        </div>
        <div className="row">
          <NumberButton clickedButton={this.setDisplay} displayType="1" text="1" buttonStyle="button white small"/>
          <NumberButton clickedButton={this.setDisplay} displayType="2" text="2" buttonStyle="button white small"/>
          <NumberButton clickedButton={this.setDisplay} displayType="3" text="3" buttonStyle="button white small"/>
          <NumberButton clickedButton={this.setDisplay} displayType="+" text="+" buttonStyle="signs red small"/>
        </div>
        <div className="row">
          <ActionButton clickedButton={this.setDisplay} displayType="0" text="0" buttonStyle="button white big"/>
          <NumberButton clickedButton={this.solveEquation} displayType="=" text="=" buttonStyle="signs red small"/>
        </div>
      </div>
    )
  }
};

export default App;
