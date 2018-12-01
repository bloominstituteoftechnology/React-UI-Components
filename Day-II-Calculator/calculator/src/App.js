import React, { Component } from 'react';
import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

class App extends Component {
  state = {
    currentNum : "",
    firstNum   : "",
    currentOp  : "",
    displayNum : "0"
  }

  numberClickHandler = (event) => {
    let number = this.state.currentNum + event.target.innerText;
    this.setState({currentNum: number,
                   displayNum: number});
  }

  actionHandler = (event) => {
    if (event.target.innerText === "Clear") {
      this.setState({ currentNum: "", 
                      firstNum: "",
                      currentOp: "",
                      displayNum: "0"});
    } else {
        if(this.state.currentOp !== "") {
          this.operationHandler();
          this.setState({currentNum: "", currentOp: event.target.innerText});
        } else {
          const current = this.state.currentNum;
          this.setState({firstNum: current,
                        currentNum: "",
                        currentOp: event.target.innerText});  
        }  
      }
  }

  operationHandler = () => {
    let result = 0;
    if(this.state.currentOp === "x") {
      result = Number(this.state.firstNum) * Number(this.state.currentNum);
    }else if(this.state.currentOp === "-") {
      result = Number(this.state.firstNum) - Number(this.state.currentNum);
    }else if(this.state.currentOp === "+") {
      result = Number(this.state.firstNum) + Number(this.state.currentNum);
    } else if(this.state.currentOp === "\u00F7") {
      result = Number(this.state.firstNum) / Number(this.state.currentNum);
    } else {
      console.log("Enter a valid operation");
    }
    this.setState({firstNum: result,
                   displayNum: result});
  }

  render() {
    console.log(this.state);

    return (
      <div className="App">
        <CalculatorDisplay number={this.state.displayNum} />
        <div className="calculator">
          <div className="numbers">
            {/* <NumberButton className="wide" text="Clear" /> */}
            <ActionButton className="wide" text="Clear" clickBtn={this.actionHandler} />
            <NumberButton text="7" clickBtn={this.numberClickHandler}/>
            <NumberButton text="8" clickBtn={this.numberClickHandler}/>
            <NumberButton text="9" clickBtn={this.numberClickHandler}/>
            <NumberButton text="4" clickBtn={this.numberClickHandler}/>
            <NumberButton text="5" clickBtn={this.numberClickHandler}/>
            <NumberButton text="6" clickBtn={this.numberClickHandler}/>
            <NumberButton text="1" clickBtn={this.numberClickHandler}/>
            <NumberButton text="2" clickBtn={this.numberClickHandler}/>
            <NumberButton text="3" clickBtn={this.numberClickHandler}/>
            <NumberButton className="wide" text="0" click={this.numberClickHandler}/>
          </div>
          <div className="actions">
            <ActionButton text="&divide;" clickBtn={this.actionHandler} />
            <ActionButton text="x" clickBtn={this.actionHandler} />
            <ActionButton text="-" clickBtn={this.actionHandler} />
            <ActionButton text="+" clickBtn={this.actionHandler} />
            <ActionButton text="=" clickBtn={this.operationHandler} />
          </div>
        </div>
      </div>
    );
  }
};

export default App;
