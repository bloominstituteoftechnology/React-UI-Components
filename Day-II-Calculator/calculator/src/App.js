import React from 'react';
import './App.css';

import Display from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

// const App = () => {
//   return (
//     <div className="app-container">
//       <Display />
//       <div className="left-btn-container">
//         <ActionButton text="clear" styles="clrBtn" />
//         <NumberButton text="7" />
//         <NumberButton text="8" />
//         <NumberButton text="9" />
//         <NumberButton text="4" />
//         <NumberButton text="5" />
//         <NumberButton text="6" />
//         <NumberButton text="1" />
//         <NumberButton text="2" />
//         <NumberButton text="3" />
//         <NumberButton text="0" styles="zeroBtn"/>
//       </div>
//       <div className="right-btn-container">
//         <ActionButton text="÷" />
//         <ActionButton text="X" />
//         <ActionButton text="-" />
//         <ActionButton text="+" />
//         <ActionButton text="=" />
//       </div>
//     </div>
//   );
// };
//
// export default App;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      total: 0,
      rightNumber: "",
      operator: "",
      leftNumber: "",
    }
  }

  numberHandler(num){
    let newNumber = this.state.rightNumber + num;
    if(newNumber.length <= 5){
      this.setState({
        rightNumber: newNumber,
        total: newNumber,
      });
    }
  }

  operatorHandler(op){
    this.setState({
      operator: op,
      leftNumber: this.state.rightNumber,
      rightNumber: "",
    });
  }

  evaluateHandler(){
    let expression = this.calculate();
    this.setState({
      total: expression,
      leftNumber: expression,
      operator: "",
      rightNumber: "",
    });
  }

  clearHandler(){
    this.setState({
      total: 0,
      leftNumber: "",
      operator: "",
      rightNumber: "",
    });
  }

  calculate(){
    let returnValue;
    switch(this.state.operator){
      case "*":
        returnValue = Number(this.state.leftNumber) * Number(this.state.rightNumber);
        break;
      case "+":
        returnValue = Number(this.state.leftNumber) + Number(this.state.rightNumber);
        break;
      case "/":
        returnValue = Number(this.state.leftNumber) / Number(this.state.rightNumber);
        break;
      case "-":
        returnValue = Number(this.state.leftNumber) - Number(this.state.rightNumber);
        break;
      default:
        break;
    }
    return returnValue;
  }



  render(){
    return (
      <div className="app-container">
        <Display value={this.state.total} />
        <div className="left-btn-container">
          <ActionButton text="clear" styles="clrBtn" onClick={()=>this.clearHandler()}/>
          <NumberButton text="7" onClick={()=>this.numberHandler(7)} />
          <NumberButton text="8" onClick={()=>this.numberHandler(8)} />
          <NumberButton text="9" onClick={()=>this.numberHandler(9)} />
          <NumberButton text="4" onClick={()=>this.numberHandler(4)} />
          <NumberButton text="5" onClick={()=>this.numberHandler(5)} />
          <NumberButton text="6" onClick={()=>this.numberHandler(6)} />
          <NumberButton text="1" onClick={()=>this.numberHandler(1)} />
          <NumberButton text="2" onClick={()=>this.numberHandler(2)} />
          <NumberButton text="3" onClick={()=>this.numberHandler(3)} />
          <NumberButton text="0" styles="zeroBtn" onClick={()=>this.numberHandler(0)} />
        </div>
            <div className="right-btn-container">
              <ActionButton text="÷" onClick={()=>this.operatorHandler("/")} />
              <ActionButton text="x" onClick={()=>this.operatorHandler("*")} />
              <ActionButton text="-" onClick={()=>this.operatorHandler("-")} />
              <ActionButton text="+" onClick={()=>this.operatorHandler("+")} />
              <ActionButton text="=" onClick={()=>this.evaluateHandler()} />
            </div>
          </div>
        );
    }
}

export default App;
