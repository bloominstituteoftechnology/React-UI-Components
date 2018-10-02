import React, { Component } from 'react';
import './App.css';
// import NumberButton from './components/ButtonComponents/NumberButton';
// import ActionButton from './components/ButtonComponents/ActionButton';
import Display from './components/DisplayComponents/CalculatorDisplay';
import Keys from './components/ButtonComponents/Keys';

// const buttons = [
// {
//     label: '&divide;', style: 'operation-button'
//   }, {
//     label: '7', style: 'number-button'
//   }, {
//     label: '8', style: 'number-button'
//   }, {
//     label: '9', style: 'number-button'
//   }, {
//     label: '&times;', style: 'operation-button'
//   }, {
//     label: '4', style: 'number-button'
//   }, {
//     label: '5', style: 'number-button'
//   }, {
//     label: '6', style: 'number-button'
//   }, {
//     label: `${&minus;}`, style: 'operation-button'
//   }, {
//     label: '1', style: 'number-button'
//   }, {
//     label: '2', style: 'number-button'
//   }, {
//     label: '3', style: 'number-button'
//   }, {
//     label: '+;', style: 'operation-button'
//   }, {
//     label: '0', style: 'number-button long'
//   },
// ];
//
// const App = () => {
//   return (<div className='container'>
//     <Display text='0'/>
//     {/* <ActionButton buttonStyle='long' label='clear'/>
//     <NumberButton buttonStyle='operation-button' label='&divide;'/>
//     <NumberButton buttonStyle='number-button' label='7'/>
//     <NumberButton buttonStyle='number-button' label='8'/>
//     <NumberButton buttonStyle='number-button' label='9'/>
//     <NumberButton buttonStyle='operation-button' label='&times;'/>
//     <NumberButton buttonStyle='number-button' label='4'/>
//     <NumberButton buttonStyle='number-button' label='5'/>
//     <NumberButton buttonStyle='number-button' label='6'/>
//     <NumberButton buttonStyle='operation-button' label='&minus;'/>
//     <NumberButton buttonStyle='number-button' label='1'/>
//     <NumberButton buttonStyle='number-button' label='2'/>
//     <NumberButton buttonStyle='number-button' label='3'/>
//     <NumberButton buttonStyle='operation-button' label='+'/>
//     <NumberButton buttonStyle='number-button long' label='0'/>
//     <ActionButton buttonStyle='operation-button' label='='/> */}
//     <Keys />
//
//   </div>);
// };


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operation: '',
      value: 0,
    };

  // this.handleNumber = this.handlNumber.bind(this);
  // this.handleClear = this.handleClear.bind(this);
  // this.handleAdd = this.handleAdd.bind(this);
  // this.handleSubract = this.handleSubract.bind(this);
  // this.handleMultiply = this.handleMultiply.bind(this);
  // this.handleDivide = this.handleDivide.bind(this);
  // this.handleCalculate = this.handleCalculate.bind(this);
  this.handleInput = this.handleInput.bind(this);
  this.handleClear = this.handleClear.bind(this);
  this.handleCalculate = this.handleCalculate.bind(this);
  }
  handleInput = (e) => {
    if (this.state.value !== 0) {
      this.setState((prevState=> ({
        value: prevState.value + '' + e,
        operation: prevState.operation += e
      })));
    } else {
      this.setState((prevState => ({
        value: e,
        operation: prevState.operation += e
      })));
    };
  };

  handleClear = () => {
    this.setState({
      value: 0,
      operation: '',
    })
  };

  handleCalculate = () => {
    this.setState({
      value: eval(this.state.operation)
    });
  };

  render() {
    return (
      <div className='container'>
        <Display value={this.state.value}/>
        <Keys handleInput={this.handleInput} handleClear={this.handleClear} handleCalculate={this.handleCalculate}/>
      </div>
    )
  }

};




export default App;
