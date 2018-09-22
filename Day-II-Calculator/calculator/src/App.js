import React from 'react';
import './App.css';
import CalcDisplay from'./components/DisplayComponents/CalculatorDisplay';
import ActionBtn from './components/ButtonComponents/ActionButton';
import NumberBtn from './components/ButtonComponents/NumberButton';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      number: [],
      result: 0,
      mathArray:[]
    };
  }
addNumber = (e) =>{
  const number = this.state.number;
  number.push(e.target.value)
  this.setState({number})
};
doOperation = (e) =>{
  const mathArray = this.state.mathArray;
  const number = this.state.number;
  mathArray.push(number);
  mathArray.push(e.target.value);
  this.setState({mathArray, number: 0})
}
evaluate = (e) =>{

}
// const App = () {
   render(){
    return (
      <div className='calc-container'>
         <div className='calc-container'>
           <CalcDisplay display="0" />
         </div>
         <div className='button-container'>
           <ActionBtn actionClass='clear button' text='clear' />
           <ActionBtn actionClass='math-function button' text='÷' name="operator"  />
         </div>
         <div className='button-container'>
           <NumberBtn class='button number-btn' text='1' name='number' value={1} />
           <NumberBtn class='button number-btn' text='2' name='number'  />
           <NumberBtn class='button number-btn' text='3' name='number'  />
           <ActionBtn actionClass='math-function button' text='×' name="operator"  />
         </div>
         <div className='button-container'>
           <NumberBtn class='button number-btn' text='4' name='number'  />
           <NumberBtn class='button number-btn' text='5' name='number' />
           <NumberBtn class='button number-btn' text='6' name='number' />
           <ActionBtn actionClass='math-function button' text='−' name="operator"  />
         </div>
         <div className='button-container'>
           <NumberBtn class='button number-btn' text='7' name='number' />
           <NumberBtn class='button number-btn' text='8' name='number' />
           <NumberBtn class='button number-btn' text='9' name='number' />
           <ActionBtn actionClass='math-function button' text='+' name="operator"  />
         </div>
         <div className='button-container'>
            <ActionBtn actionClass='zero button' text='0' name='number' />
            <ActionBtn actionClass='math-function button' text='=' name="operator"  />
          </div>
        </div>
    );
  };
}

export default App;
