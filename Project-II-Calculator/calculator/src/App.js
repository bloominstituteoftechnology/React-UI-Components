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
      total: 0,
      firstInput: 0,
      secondInput: 0,
      numbers: numberList,
      symbols: mathList,
      actionBtnStyle: 'action.btn',
    };
  }
  
  handleChangeFunction = event => {
    console.log(event.target);
    console.log(event.target.innerText);
    this.setState({total: event.target.innerText});
    this.setState({firstInput: event.target.innerText});
  }

  clearCal = event =>{
    this.setState({total: 0});
  }

  
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
        <ActionButton text= {0}/>
      </div>
        <div className="test-algo-pad">
          {this.state.symbols.map((sym, i) =>(
          <MathButton key ={i} text = {sym.text}/>
          ))}
        </div>
        
        </div>
    </div>
  );

    }
};

export default App;
