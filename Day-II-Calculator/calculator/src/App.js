import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      operation: '',
      result: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }
render(){

  return (
    <div className="wrap">
    <CalculatorDisplay operation={this.state.operation} result={this.state.result} />
    <div>
      <ActionButton label={"clear"} handleClick={this.handleClick} buttonStyle="actionButton" />
      <NumberButton label={"÷"} handleClick={this.handleClick} buttonStyle="numberButtonRed" />
      </div>
      <div> 
      <NumberButton label={"7"} handleClick={this.handleClick} buttonStyle="numberButton" />
      <NumberButton label={"8"} handleClick={this.handleClick} buttonStyle="numberButton" />
      <NumberButton label={"9"} handleClick={this.handleClick} buttonStyle="numberButton" />
      <NumberButton label={"×"} handleClick={this.handleClick} buttonStyle="numberButtonRed"/>
      </div>
      <div>
      <NumberButton label={"4"} handleClick={this.handleClick} buttonStyle="numberButton" />
      <NumberButton label={"5"} handleClick={this.handleClick} buttonStyle="numberButton" />
      <NumberButton label={"6"} handleClick={this.handleClick} buttonStyle="numberButton" />
      <NumberButton label={"−"} handleClick={this.handleClick} buttonStyle="numberButtonRed" />
      </div>
      <div>
      <NumberButton label={"1"} handleClick={this.handleClick} buttonStyle="numberButton" />
      <NumberButton label={"2"} handleClick={this.handleClick} buttonStyle="numberButton" />
      <NumberButton label={"3"} handleClick={this.handleClick} buttonStyle="numberButton" />
      <NumberButton label={"+"} handleClick={this.handleClick} buttonStyle="numberButtonRed" />
      </div>
      <div>
      <ActionButton label={"0"} handleClick={this.handleClick} buttonStyle="actionButton" />
      <NumberButton label={"="} handleClick={this.handleClick} buttonStyle="numberButtonRed" />
      </div>
    </div>
  );
}
  handleClick(event){
    const value = event.target.value;
    switch (value) {
      case '=': { 
        const result = eval(this.state.operation);
       
        this.setState({ result });
        break;
      }
      case 'clear': {
        
        this.setState({operation: '', result: '' });
        break;
      }
      default: {
       
        this.setState({ operation: this.state.operation += value});
        break;
      }
    }
  }

}

export default App;
