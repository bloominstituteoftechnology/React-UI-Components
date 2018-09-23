import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import logic from './CalculatorLogic.js'


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {display: logic.display};
    this.setString = this.appCallback;
  }

  appCallback = (change) =>{
    this.setState({display: change});
    console.log(this.state.display);
  }

  render(){
    return (
      <div className="calculator">
        <CalculatorDisplay state={this.state}/>
        <div className="row">
          <ActionButton clickedButton={this.appCallback} displayType="clear" text="clear" buttonStyle="button white big"/>
          <NumberButton onClick={this.handleClick} clickedButton={this.appCallback} displayType="/" text="÷" buttonStyle="signs red small"/>
        </div>
        <div className="row">
          <NumberButton clickedButton={this.appCallback} displayType="7" text="7" buttonStyle="button white small"/>
          <NumberButton clickedButton={this.appCallback} displayType="8" text="8" buttonStyle="button white small"/>
          <NumberButton clickedButton={this.appCallback} displayType="9" text="9" buttonStyle="button white small"/>
          <NumberButton clickedButton={this.appCallback} displayType="*" text="×" buttonStyle="signs red small"/>
        </div>
        <div className="row">
          <NumberButton clickedButton={this.appCallback} displayType="4" text="4" buttonStyle="button white small"/>
          <NumberButton clickedButton={this.appCallback} displayType="5" text="5" buttonStyle="button white small"/>
          <NumberButton clickedButton={this.appCallback} displayType="6" text="6" buttonStyle="button white small"/>
          <NumberButton clickedButton={this.appCallback} displayType="-" text="-" buttonStyle="signs red small"/>
        </div>
        <div className="row">
          <NumberButton clickedButton={this.appCallback} displayType="1" text="1" buttonStyle="button white small"/>
          <NumberButton clickedButton={this.appCallback} displayType="2" text="2" buttonStyle="button white small"/>
          <NumberButton clickedButton={this.appCallback} displayType="3" text="3" buttonStyle="button white small"/>
          <NumberButton clickedButton={this.appCallback} displayType="+" text="+" buttonStyle="signs red small"/>
        </div>
        <div className="row">
          <ActionButton clickedButton={this.appCallback} displayType="0" text="0" buttonStyle="button white big"/>
          <NumberButton clickedButton={this.appCallback} displayType="=" text="=" buttonStyle="signs red small"/>
        </div>
      </div>
    )
  }
};

export default App;
