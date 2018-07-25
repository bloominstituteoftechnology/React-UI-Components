import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import './components/ButtonComponents/Button.css';
import './components/DisplayComponents/Display.css';

class App extends React.Component {
  constructor () {
    super();
    this.state={
      total: ''
  };
  }
  handleClick(e) {
    if (e.target.innerHTML==='0') {
      let currentTotal=this.state.total+'';
      if (currentTotal.length>=1 && currentTotal[currentTotal.length-1]!=='*'&& currentTotal[currentTotal.length-1]!=='/' &&currentTotal[currentTotal.length-1]!=='+' &&currentTotal[currentTotal.length-1]!=='-'){
        this.setState({total: this.state.total+e.target.innerHTML},this.updateDisplay);
      }
    } else if (e.target.innerHTML==='clear'){
      this.setState({total: ''},this.updateDisplay)
    } else if (e.target.innerHTML==='*'||e.target.innerHTML==='/'||e.target.innerHTML==='-'||e.target.innerHTML==='+') {
      let currentTotal=this.state.total+'';
      if (currentTotal.length>=1) {
        let lastItem=currentTotal[currentTotal.length-1];
        if (lastItem!=='*'&&lastItem!=='-'&&lastItem!=='+'&&lastItem!=='/'){
          this.setState({total: this.state.total+e.target.innerHTML},this.updateDisplay);
        }
      }
    } else if (Number(e.target.innerHTML)>=1) {
      this.setState({total: this.state.total+e.target.innerHTML},this.updateDisplay);
    }
    else if (e.target.innerHTML==='='){
      this.setState({total:eval(document.querySelector('.display').textContent)},this.updateDisplay);
    } 
  }
  updateDisplay() {
    let newTotal=this.state.total+'';
    if (newTotal==='') {
      document.querySelector('.display p').innerHTML=0
    } else if (newTotal.length>9){
      document.querySelector('.display p').innerHTML='error';
    }  else {
      document.querySelector('.display p').innerHTML=newTotal;
    }
  }
  
render()  {
  return (
    <div className='App' onClick={this.handleClick.bind(this)}>
      <CalculatorDisplay />
      <ActionButton text='clear' buttonStyle='actionbutton' />
      <NumberButton text='/' buttonStyle='operatorbutton' />
      <NumberButton text='7' buttonStyle='numberbutton'/>
      <NumberButton text='8' buttonStyle='numberbutton' />
      <NumberButton text='9' buttonStyle='numberbutton' />
      <NumberButton text='*' buttonStyle='operatorbutton' />
      <NumberButton text='4' buttonStyle='numberbutton' />
      <NumberButton text='5' buttonStyle='numberbutton' />
      <NumberButton text='6' buttonStyle='numberbutton' />
      <NumberButton text='-' buttonStyle='operatorbutton' />
      <NumberButton text='1' buttonStyle='numberbutton' />
      <NumberButton text='2' buttonStyle='numberbutton' />
      <NumberButton text='3' buttonStyle='numberbutton' />
      <NumberButton text='+' buttonStyle='operatorbutton' />
      <ActionButton text='0' buttonStyle='actionbutton' />
      <NumberButton text='=' buttonStyle='operatorbutton' />
   </div>
  );
};

}

export default App;
