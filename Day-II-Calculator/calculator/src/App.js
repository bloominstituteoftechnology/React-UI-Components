import React from 'react';
import './App.css';
import CalcDisplay from'./components/DisplayComponents/CalculatorDisplay';
import ActionBtn from './components/ButtonComponents/ActionButton';
import NumberBtn from './components/ButtonComponents/NumberButton';



//eval    look into 
class App extends React.Component{
 state = {
      number: [],
      result: "Let's Math",
      mathArray:[]
    };

addNumber = (e) =>{
  let {number, result} = this.state;
  number.push(e.target.value);
  result = number
  this.setState({number, result})
};
doOperation = (e) =>{
  let {number, mathArray} = this.state;
  number = number.join('').toString();
  mathArray.push(number);
  mathArray.push(e.target.value);
  this.setState({mathArray, number: []})
}
evaluate = (e) =>{
let {mathArray, result, number} = this.state;
number= number.join('').toString();
mathArray.push(number);
let string = mathArray.join('').toString();
console.log(string);
if(string){
  result = eval(string);
} else{result = "0";};
    number = []
    mathArray = [];
     this.setState({result, mathArray, number});
}
clear = (e) =>{
  let {mathArray, number, result} = this.state;
  result = 0;
  mathArray = [];
  number = []
  this.setState({mathArray, number, result});
}
// const App = () {
   render(){
    return (
      <div className='calc-container'>
         <div className='calc-container'>
           <CalcDisplay display={this.state.result} />
         </div>
         <div className='button-container'>
           <ActionBtn actionClass='clear button' click={this.clear} text='clear' />
           <ActionBtn actionClass='math-function button' click={this.doOperation} text='÷' name="operator" value='/' />
         </div>
         <div className='button-container'>
           <NumberBtn class='button number-btn' click={this.addNumber} text='1' name='number' value='1' />
           <NumberBtn class='button number-btn' click={this.addNumber} text='2' name='number' value='2' />
           <NumberBtn class='button number-btn' click={this.addNumber} text='3' name='number' value="3" />
           <ActionBtn actionClass='math-function button' click={this.doOperation} text='×' name="operator" value="*" />
         </div>
         <div className='button-container'>
           <NumberBtn class='button number-btn' click={this.addNumber} text='5' name='number' value='5' />
           <NumberBtn class='button number-btn' click={this.addNumber} text='4' name='number' value='4' />
           <NumberBtn class='button number-btn' click={this.addNumber} text='6' name='number' value='6' />
           <ActionBtn actionClass='math-function button' click={this.doOperation} text='−' name="operator" value="-" />
         </div>
         <div className='button-container'>
           <NumberBtn class='button number-btn' click={this.addNumber} text='7' name='number' value="7" />
           <NumberBtn class='button number-btn' click={this.addNumber} text='8' name='number' value="8" />
           <NumberBtn class='button number-btn' click={this.addNumber} text='9' name='number' value="9" />
           <ActionBtn actionClass='math-function button' click={this.doOperation} text='+' name="operator" value="+" />
         </div>
         <div className='button-container'>
            <ActionBtn actionClass='zero button' click={this.addNumber} text='0' name='number' value="0" />
            <ActionBtn actionClass='math-function button' click={this.evaluate} text='=' name="operator"  />
          </div>
        </div>
    );
  };
}

export default App;
