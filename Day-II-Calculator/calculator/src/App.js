import React from 'react';
import './App.css';
import ActionButton from  "./components/ButtonComponents/ActionButton"; 
import NumberButton from './components/ButtonComponents/NumberButton'; 
import  Display from './components/DisplayComponents/CalculatorDisplay'; 

class App extends React.Component {

  constructor() {
    super(); 
    this.state = {total: ""};
  }

  buttonClickHandler = (number) => {
    this.setState({total: this.state.total + number }); 
  }

  resetHandler = () => {
    this.setState({total: ""}); 
  }

  totalHandler = () => {
    if(this.state.total !== "") {
      this.setState({total: eval(this.state.total)}); 
    }
  }

  render(){
  return (
    <div className = "container">
      <div className = "row-1">
        <Display value = {this.state.total} />
      </div>
      <div className = "row-2">
        <ActionButton click = {this.resetHandler} text = "clear" type = "clear" />
        <NumberButton click = {this.buttonClickHandler} type = "/" text = "&#247;" buttonStyle = "operator" />
      </div>
      <div className = "row-3">
        <NumberButton click = {this.buttonClickHandler} type = "7" text = "7" buttonStyle = "number" />
        <NumberButton click = {this.buttonClickHandler} type = "8" text = "8" buttonStyle = "number" />
        <NumberButton click = {this.buttonClickHandler} type = "9" text = "9" buttonStyle = "number" />
        <NumberButton click = {this.buttonClickHandler} type = "*" text = "&#215;" buttonStyle = "operator" />
      </div>
      <div className = "row-4">
        <NumberButton click = {this.buttonClickHandler} type = "4" text = "4" buttonStyle = "number" />
        <NumberButton click = {this.buttonClickHandler} type = "5" text = "5" buttonStyle = "number" />
        <NumberButton click = {this.buttonClickHandler} type = "6" text = "6" buttonStyle = "number" />
        <NumberButton click = {this.buttonClickHandler} type = "-" text = "&#8722;" buttonStyle = "operator" />
      </div>
      <div className = "row-5">
        <NumberButton click = {this.buttonClickHandler} type = "1" text = "1" buttonStyle = "number" />
        <NumberButton click = {this.buttonClickHandler} type = "2" text = "2" buttonStyle = "number"/>
        <NumberButton click = {this.buttonClickHandler} type = "3" text = "3" buttonStyle = "number"/>
        <NumberButton click = {this.buttonClickHandler} type = "+" text = "+" buttonStyle = "operator"/>
      </div>
      <div className = "row-6">
        <ActionButton click = {this.buttonClickHandler} type = "0" text = "0" />
        <NumberButton click = {this.totalHandler} type =  "=" text = "=" buttonStyle = "operator" />
      </div>
    </div>
  );
  } 
};

export default App;
