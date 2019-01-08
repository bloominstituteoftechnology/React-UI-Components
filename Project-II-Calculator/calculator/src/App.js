import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import * as math from 'math.js';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      displayBox: ''
    }
  }

  displayNum = (num) => {
    if(num === '='){
      this.setState({
        displayBox: eval(this.state.displayBox)
      })
    }
    else {
      this.setState({
        displayBox: this.state.displayBox + num
      })
    }
  }

  render(){
    return (
      <div className="App">
        <CalculatorDisplay displayBox={this.state.displayBox}/>
        <div className="buttons">
          <div className="NumberButtons">
            < NumberButton name="clear" symbol="clear" buttonStyle="number-long" handleClick={this.displayNum} />
            < NumberButton name="seven" symbol="7" buttonStyle="number-short" handleClick={this.displayNum} />
            < NumberButton name="eight" symbol="8" buttonStyle="number-short" handleClick={this.displayNum} />
            < NumberButton name="nine" symbol="9" buttonStyle="number-short" handleClick={this.displayNum} />
            < NumberButton name="four" symbol="4" buttonStyle="number-short" handleClick={this.displayNum} />
            < NumberButton name="five" symbol="5" buttonStyle="number-short" handleClick={this.displayNum} />
            < NumberButton name="six" symbol="6" buttonStyle="number-short" handleClick={this.displayNum} />
            < NumberButton name="one" symbol="1" buttonStyle="number-short" handleClick={this.displayNum} />
            < NumberButton name="two" symbol="2" buttonStyle="number-short" handleClick={this.displayNum} />
            < NumberButton name="three" symbol="3" buttonStyle="number-short" handleClick={this.displayNum} />
            < NumberButton name="zero" symbol="0" buttonStyle="number-long" handleClick={this.displayNum} />
          </div>
          <div className="ActionButtons">
            < ActionButton symbol="/" name="divide" handleClick={this.displayNum} />
            < ActionButton symbol="*" name="multiply" handleClick={this.displayNum} />
            < ActionButton symbol="-" name="minus" handleClick={this.displayNum} />
            < ActionButton symbol="+" name="plus" handleClick={this.displayNum} />
            < ActionButton symbol="=" name="equals" handleClick={this.displayNum} />
          </div>        
        </div>
      </div>
    );
  }

};

export default App;
