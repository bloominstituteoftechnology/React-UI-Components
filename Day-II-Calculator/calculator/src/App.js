import React, { Component } from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import Display from './components/DisplayComponents/CalculatorDisplay';

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
const App = () => {
  return (<div className='container'>
    <Display text='0'/>
    <ActionButton buttonStyle='long' label='clear'/>
  {/* {  buttons.map(button => {
    return (<NumberButton button={button}/>)

    })} */}
    <NumberButton buttonStyle='operation-button' label='&divide;'/>
    <NumberButton buttonStyle='number-button' label='7'/>
    <NumberButton buttonStyle='number-button' label='8'/>
    <NumberButton buttonStyle='number-button' label='9'/>
    <NumberButton buttonStyle='operation-button' label='&times;'/>
    <NumberButton buttonStyle='number-button' label='4'/>
    <NumberButton buttonStyle='number-button' label='5'/>
    <NumberButton buttonStyle='number-button' label='6'/>
    <NumberButton buttonStyle='operation-button' label='&minus;'/>
    <NumberButton buttonStyle='number-button' label='1'/>
    <NumberButton buttonStyle='number-button' label='2'/>
    <NumberButton buttonStyle='number-button' label='3'/>
    <NumberButton buttonStyle='operation-button' label='+'/>
    <NumberButton buttonStyle='number-button long' label='0'/>
    <ActionButton buttonStyle='operation-button' label='='/>

  </div>);
};




export default App;
