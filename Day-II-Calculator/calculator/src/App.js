import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js'
import ActionButton from './components/ButtonComponents/ActionButton.js'
import NumberButton from './components/ButtonComponents/NumberButton.js'

class App extends React.Component {
    state = {
        displayValue: "0",
        previousValue: "0",
        previousActionButton: "",
        previousButtonValue: 0,
    }

    numberClick = (value) =>  {
        let currVal = this.state.displayValue;
        let newVal;
        // console.log(this.state.previousButtonValue)
        if(currVal === "0")   {
            newVal = value;
        }   else if(this.state.previousButtonValue === "+" || this.state.previousButtonValue === "-" || this.state.previousButtonValue === "÷" || this.state.previousButtonValue === "X"){
            newVal = value;
        }   else {
            newVal = currVal + value;
        }
        this.setState((state)   =>  ({
            displayValue: newVal,
            previousButtonValue: value,
        }))
    }

    clear = (value)  =>  {
        this.setState({
            ...this.state,
            previousValue: this.state.displayValue,
            previousButtonValue: value,
            displayValue: "0",
        })
    }

    arithmetic = (value) =>  {
        this.setState((state)   =>  ({
            previousActionButton: value,
            previousButtonValue: value,
            previousValue: state.displayValue, 
        }))
    }

    equal = (value) =>  {
        let display;
        console.log(this.state.previousActionButton);
        console.log(this.state);
        switch(this.state.previousActionButton)    {
            case "+":
                display = Number(this.state.previousValue) + Number(this.state.displayValue);
                break;

            case "X":
                display = Number(this.state.previousValue) * Number(this.state.displayValue);
                break;

            case "-":
                display = Number(this.state.previousValue) - Number(this.state.displayValue);
                break;

            case "÷":
                display =Number(this.state.previousValue) / Number(this.state.displayValue);
                break;

            default:
                display = this.state.displayValue;
                break;
        }
        this.setState((state)   =>  ({
            displayValue: +display,
        }))
    }

  render()  {
      return (
        <div className="App">
            <CalculatorDisplay value={this.state.displayValue} />
            <ActionButton buttonStyle="button actionButton wide" onButtonClick={this.clear} text="Clear"/>
            <ActionButton buttonStyle="button actionButton" onButtonClick={this.arithmetic} text="÷" />
            <NumberButton onButtonClick={this.numberClick} buttonStyle="button bold" text="7" />
            <NumberButton onButtonClick={this.numberClick} buttonStyle="button bold" text="8" />
            <NumberButton onButtonClick={this.numberClick} buttonStyle="button bold" text="9" />
            <ActionButton buttonStyle="button actionButton" onButtonClick={this.arithmetic} text="X" />
            <NumberButton onButtonClick={this.numberClick} buttonStyle="button bold" text="4" />
            <NumberButton onButtonClick={this.numberClick} buttonStyle="button bold" text="5" />
            <NumberButton onButtonClick={this.numberClick} buttonStyle="button bold" text="6" />
            <ActionButton buttonStyle="button actionButton" onButtonClick={this.arithmetic} text="-" />
            <NumberButton onButtonClick={this.numberClick} buttonStyle="button bold" text="1" />
            <NumberButton onButtonClick={this.numberClick} buttonStyle="button bold" text="2" />
            <NumberButton onButtonClick={this.numberClick} buttonStyle="button bold" text="3" />
            <ActionButton buttonStyle="button actionButton" onButtonClick={this.arithmetic} text="+" />
            <NumberButton onButtonClick={this.numberClick} buttonStyle="button bold wide" text="0" />
            <ActionButton buttonStyle="button actionButton" onButtonClick={this.equal} text="=" />
        </div>
      )
  }
};

export default App;
