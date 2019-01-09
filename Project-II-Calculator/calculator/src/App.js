import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonPad from './components/ButtonComponents/ButtonPad';
import NumberButton from './components/ButtonComponents/NumberButton';
import MathButton from './components/ButtonComponents/MathButton';
import ActionButton from './components/ButtonComponents/ActionButton'

const numberList = [
  {text: 7},
  {text: 8},
  {text: 9},
  {text: 4},
  {text: 5},
  {text: 6},
  {text: 1},
  {text: 2},
  {text: 3}
]
const mathList = [
  {text: '÷'},
  {text: 'x'},
  {text: '-'},
  {text: '+'},
  {text: '='},

]

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      total: null,
      firstInput: [],
      secondInput: [],
      symbolTarget: null,
      secondNumTrig: false,
      numbers: numberList,
      symbols: mathList,
      actionBtnStyle: 'action.btn',
    };
  }
  
  handleChangeFunction = event => {
    if(this.state.secondNumTrig === true){
      this.state.secondInput.push( Number(event.target.innerText));
      console.log(this.state.secondInput);
      console.log(this.state.secondInput.join(''))
      this.setState({total: parseInt(this.state.secondInput.join(''))})

    }
    if(this.state.secondNumTrig === false){
      this.state.firstInput.push( Number(event.target.innerText));
      console.log(this.state.firstInput);
      console.log(typeof this.state.firstInput.join(''))
      this.setState({total: parseInt(this.state.firstInput.join(''))})
      console.log( this.state.total)
      }
    
    
   
  }
  symbolUpdate = event =>{
    if(event.target.innerText === '+' || event.target.innerText === '-' || event.target.innerText === '÷' || event.target.innerText === 'x'){
      this.setState({symbolTarget: event.target.innerText});
      this.setState({secondNumTrig: true});
    } 
    if(event.target.innerText === '='){
      this.calculation( parseInt(this.state.firstInput.join('')), parseInt(this.state.secondInput.join('')));
    }
    
  }
  calculation = (x, y) =>{
    if(this.state.symbolTarget === '+'){
      this.setState({total: x + y})
      console.log(x+y);
    }
    if(this.state.symbolTarget === '-'){
      this.setState({total: x - y})
    }
    if(this.state.symbolTarget === '÷'){
      this.setState({total: x / y})
    }
    if(this.state.symbolTarget === 'x'){
      this.setState({total: x * y})
    }
  } 
  clearCal = event =>{
    this.setState({total: 0});
    this.setState({firstInput: []});
    this.setState({secondInput: []});
    this.setState({secondNumTrig: false});
  }
  
  // addition = (x,y) =>{
  //   return x + y;
  // }
  // subtraction = (x, y) =>{
  //   return x - y;
  // }

  render() {
    
    return(
    <div className="container">
      <CalculatorDisplay total={this.state.total}/>
      {/* <ButtonPad number={this.numberList}  total={this.state.total} /> */}
      <div className="test-full-pad">
      <div className="test-num-pad">
        <ActionButton fun={this.clearCal}className={this.state.actionBtnStyle}text= "clear"/>
        {this.state.numbers.map((number, i) =>(
          <NumberButton fun={this.handleChangeFunction} key ={i} text = {number.text}/>
          ))}
        <ActionButton fun={this.handleChangeFunction} text= {0}/>
      </div>
        <div className="test-algo-pad">
          {this.state.symbols.map((sym, i) =>(
          <MathButton calculate={this.calculation} fun={this.symbolUpdate} key ={i} text = {sym.text}/>
          ))}
        </div>
        
        </div>
    </div>
  );

    }
};

export default App;
