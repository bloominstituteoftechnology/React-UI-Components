import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import NumberButton from './components/ButtonComponents/NumberButton'
import ActionButton from './components/ButtonComponents/ActionButton'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      display: ''
    };
    console.log(this.state)
    this.handleClick = this.handleClick.bind(this);
  }
  render(){
    return (
      <div className="app-container">
        <CalculatorDisplay display = {this.state.display} />
        <div className="row">
          <ActionButton text = "Clear" value = 'clr' buttonStyle = "action-btn" handleClick={this.handleClick} />
          <NumberButton text = "÷" value = '/' buttonStyle = "operator-btn" handleClick={this.handleClick} />
        </div>
        <div className="row">
          <NumberButton text = "7" value = '7' handleClick={this.handleClick} />
          <NumberButton text = "8" value = '8' handleClick={this.handleClick} />
          <NumberButton text = "9" value = '9' handleClick={this.handleClick} />
          <NumberButton text = "X" value = '*' buttonStyle = "operator-btn" handleClick={this.handleClick} />
        </div>
        <div className="row">
          <NumberButton text = "4" value = '4' handleClick={this.handleClick} />
          <NumberButton text = "5" value = '5' handleClick={this.handleClick} />
          <NumberButton text = "6" value = '6' handleClick={this.handleClick} />
          <NumberButton text = "-" value = '-' buttonStyle = "operator-btn" handleClick={this.handleClick} />
        </div>
        <div className="row">
          <NumberButton text = "1" value = '1' handleClick={this.handleClick} />
          <NumberButton text = "2" value = '2' handleClick={this.handleClick} />
          <NumberButton text = "3" value = '3' handleClick={this.handleClick} />
          <NumberButton text = "+" value = '+' buttonStyle = "operator-btn" handleClick={this.handleClick} />
        </div>
        <div className="row">
        <ActionButton text = "0" value = '0' buttonStyle = "action-btn" handleClick={this.handleClick} />
        <NumberButton text = "=" value = '=' buttonStyle = "operator-btn" handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
  handleClick(event){
    const value = event.target.value; 
    switch (value) {
      case '=': { 
        // const answer = eval(this.state.display);        
        this.setState({ display: eval(this.state.display) });        
        break; 
      }
      case 'clr': {        
        this.setState({ display: '' });        
        break;
      }
      default: {        
        this.setState({ display: this.state.display += value})        
        break;
      }
    }
  }
}
console.log(this.state)

  


export default App;
