import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      didEqual: false,
      displayBox: '0'
    }
  }

  displayNum = (num) => {
    if(this.state.didEqual){
      this.setState({
        displayBox: '',
        didEqual: false
      })
    }
    this.setState({
      displayBox: this.displayBox += num
    }) 
    if(num === "clear"){      
      this.setState({
        displayBox: '',
      })
    }
  }

  equals = () => {
    if(this.state.displayBox.slice(-2) === "/0"){
      this.setState({
        displayBox: 'stop that',
    })}
    this.setState({
      displayBox: eval(this.state.displayBox),
      didEqual: true
    })
  }

  render(){
    return (
      <div className="App">
        <CalculatorDisplay displayBox={this.state.displayBox}/>
        <div className="buttons">
          <div className="NumberButtons">
            < NumberButton name="clear" symbol="clear" buttonStyle="number-long" />
            < NumberButton name="seven" symbol="7" buttonStyle="number-short" />
            < NumberButton name="eight" symbol="8" buttonStyle="number-short" />
            < NumberButton name="nine" symbol="9" buttonStyle="number-short" />
            < NumberButton name="four" symbol="4" buttonStyle="number-short" />
            < NumberButton name="five" symbol="5" buttonStyle="number-short" />
            < NumberButton name="six" symbol="6" buttonStyle="number-short" />
            < NumberButton name="one" symbol="1" buttonStyle="number-short" />
            < NumberButton name="two" symbol="2" buttonStyle="number-short" />
            < NumberButton name="three" symbol="3" buttonStyle="number-short" />
            < NumberButton name="zero" symbol="0" buttonStyle="number-long" />
          </div>
          <div className="ActionButtons">
            < ActionButton symbol="÷" name="divide" />
            < ActionButton symbol="X" name="multiply" />
            < ActionButton symbol="-" name="minus" />
            < ActionButton symbol="+" name="plus" />
            < ActionButton symbol="=" name="equals" />
          </div>        
        </div>
      </div>
    );
  }

};

export default App;
