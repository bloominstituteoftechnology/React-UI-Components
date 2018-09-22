import React, { Component } from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

class App extends Component { //Stateful declaration, declared as a Javascript class rather than variable which inherits the functionality of Component, a built in REACT class
  state = {
    display: '' //
  }; 

  handleButtonClick = event => {
    this.setState({
      display: (this.state.display + event.target.textContent)
    });
  };

  render() { //Render returns the JSX, you only need to do render if it is a class (stateful)
    return (
      <div className="calculator">
        <div className="display-container">
          <CalculatorDisplay text={this.state.display}></CalculatorDisplay>
        </div>
        <div className="white-buttons-container">
          <ActionButton text="Clear"></ActionButton>
          <NumberButton text="9" onClick={this.handleButtonClick} className="number-button" className2="number-button-text"></NumberButton>
          <NumberButton text="8" onClick={this.handleButtonClick} className="number-button" className2="number-button-text"></NumberButton>
          <NumberButton text="7" onClick={this.handleButtonClick} className="number-button" className2="number-button-text"></NumberButton>
          <NumberButton text="6" onClick={this.handleButtonClick} className="number-button" className2="number-button-text"></NumberButton>
          <NumberButton text="5" onClick={this.handleButtonClick} className="number-button" className2="number-button-text"></NumberButton>
          <NumberButton text="4" onClick={this.handleButtonClick} className="number-button" className2="number-button-text"></NumberButton>
          <NumberButton text="3" onClick={this.handleButtonClick} className="number-button" className2="number-button-text"></NumberButton>
          <NumberButton text="2" onClick={this.handleButtonClick} className="number-button" className2="number-button-text"></NumberButton>
          <NumberButton text="1" onClick={this.handleButtonClick} className="number-button" className2="number-button-text"></NumberButton>
          <ActionButton text="0" onClick={this.handleButtonClick}></ActionButton>
        </div>
        <div className="red-buttons-container">
          <NumberButton text="/" onClick={this.handleButtonClick} className="operation-button"className2="operation-button-text"></NumberButton>
          <NumberButton text="X" onClick={this.handleButtonClick} className="operation-button"className2="operation-button-text"></NumberButton>
          <NumberButton text="-" onClick={this.handleButtonClick} className="operation-button"className2="operation-button-text"></NumberButton>
          <NumberButton text="+" onClick={this.handleButtonClick} className="operation-button"className2="operation-button-text"></NumberButton>
          <NumberButton text="=" onClick={this.handleButtonClick} className="operation-button"className2="operation-button-text"></NumberButton>
        </div>
      </div>
    );
  }
};

export default App;

//STATELESS COMPONENT VERSION (Stateless means the component returns JSX code and has no functionality)
// const App = () => { 
//     return (
//       <div className="calculator">
//         <div className="display-container">
//           <CalculatorDisplay text="0"></CalculatorDisplay>
//         </div>
//         <div className="white-buttons-container">
//           <ActionButton text="Clear"></ActionButton>
//           <NumberButton text="9" className="number-button" className2="number-button-text"></NumberButton>
//           <NumberButton text="8" className="number-button" className2="number-button-text"></NumberButton>
//           <NumberButton text="7" className="number-button" className2="number-button-text"></NumberButton>
//           <NumberButton text="6" className="number-button" className2="number-button-text"></NumberButton>
//           <NumberButton text="5" className="number-button" className2="number-button-text"></NumberButton>
//           <NumberButton text="4" className="number-button" className2="number-button-text"></NumberButton>
//           <NumberButton text="3" className="number-button" className2="number-button-text"></NumberButton>
//           <NumberButton text="2" className="number-button" className2="number-button-text"></NumberButton>
//           <NumberButton text="1" className="number-button" className2="number-button-text"></NumberButton>
//           <ActionButton text="0"></ActionButton>
//         </div>
//         <div className="red-buttons-container">
//           <NumberButton text="%" className="operation-button"className2="operation-button-text"></NumberButton>
//           <NumberButton text="X" className="operation-button"className2="operation-button-text"></NumberButton>
//           <NumberButton text="-" className="operation-button"className2="operation-button-text"></NumberButton>
//           <NumberButton text="+" className="operation-button"className2="operation-button-text"></NumberButton>
//           <NumberButton text="=" className="operation-button"className2="operation-button-text"></NumberButton>
//         </div>
//       </div>
//     );
// };
