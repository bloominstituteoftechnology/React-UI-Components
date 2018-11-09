import React from 'react';
import CalcButtonsContainer from './components/ButtonComponents/CalcButtonsContainer';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

function translateLabel(label){
  if(label==='÷'){
    return '/';
  }else if(label==='×'){
    return '*';
  }else{
    return label;
  }
}

function basicMaths(a,b,operand){

  if(operand==="+"){
    return a+b;
  }else if(operand==="-"){
    return a-b;
  }else if(operand==="/"){
    return a/b;
  }else if(operand==="*"){
    return a*b;
  }

}

function isCharacterANumber(character){
  if(character==="+"){
    return false;
  }else if(character==="-"){
    return false;
  }else if(character==="/"){
    return false;
  }else if(character==="*"){
    return false;
  }else if(character==="="){
    return false;
  }else{
    return true;
  }
}
  
function evaluate(prevState, input){

  if(input==='Clear'){
    return {a: 0, b: null, operand: null}; 
  }else{

    let a = prevState.a;
    let b = prevState.b
    let operand = prevState.operand;
    input = translateLabel(input);

    //if input is not a number, aka a math function
    if(!isCharacterANumber(input)){

      //if last input was also a math function, then we forget it
      if( (operand!=null) && (b===null) ){
        operand = null;
      }else if(b!=null){
        //else, if more than 1 number (b exists) then we eval (if b exists, so should a valid operand)
        a = basicMaths(a,b,operand);
        b = null;
      }
      operand = input;

    }else{
      //is a Number
      //scenarios
      //
      //a=0
      //o=null
      //b=null
      //
      //a=1
      //o=+
      //b=null
      //
      //a=1
      //o=+
      //b=1
      
      if( (operand===null) && (b===null) ){
        a = Number(a.toString() + input);
      }else if( (operand!=null) && (b===null) ){
        if(operand==='='){
          operand = null;
          a = Number(input);
        }else{
          b = Number(input);
        }
      }else{
        b = Number(b.toString() + input);
      }

    }
    return {a: a, b: b, operand: operand}; 
  }
}

function generateDisplay(newState){

  let displayString = '';

  if(newState.b === null){
    displayString = newState.a.toString();
  }else{
    displayString = newState.b.toString();
  }

  if( (displayString!='NaN') && (displayString!='Infinity') ){
    if(displayString.length > 3){
      let count = 1;
      for(var i = displayString.length-1; i > -1; i--){
        if( (count%3===0) && (i!==0) ){
          displayString = displayString.substr(0, i) + ',' + displayString.substr(i);
        }
        count++;
      }
    }  
  }

  if(displayString.length > 12 ){
    displayString = "Err: n too long"
  }

  return displayString;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.state = {
      a: 0,
      b: null,
      operand: null,
      display: '0'
    };
  } 
  
  onButtonClick(label) {

    this.setState(prevState => {
      let newState = evaluate(prevState,label);
      return ({
        a: newState.a,
        b: newState.b,
        operand: newState.operand,
        display: generateDisplay(newState)
      })
    });

  }

  render() {
    return (
		  <div className="calculon">
	      <CalculatorDisplay value={this.state.display} />
	      <CalcButtonsContainer onClick={this.onButtonClick} />
	    </div>
    );
  }
}

export default App;
