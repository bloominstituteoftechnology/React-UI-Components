import React, { Component } from 'react';
import './Display.css';
import Numbers from './Numbers';
import CalculationWindow from './CalculationWindow';
import MathButtons from './MathButtons';

class CalculatorDisplay extends Component {
  state = {
    total: 0,
    numberOne: 0,
    numberTwo: 0,
    mathSign : false,
    equalSign : false,
    signPressed: ''
  };

  click = (element) => {
    // get the innerHTML of current element
    const keyPressed = element.target.innerHTML;
    // get all classes of current element
    const elementClasses = element.target.classList;
    return this.compareKeys(element, keyPressed, elementClasses);
  }

  compareKeys = (element, keyPressed, elementClasses) => {
    // set initial total value
    let total = this.state.total;
    // set the numberOne to hold number before math sign click
    let numberOne = this.state.numberOne;
    // set up numberTwo
    let numberTwo = this.state.numberTwo;
    // set equal sign to state.eqaulSign
    let equalSign = this.state.equalSign;
    // set signPressed to state.signPressed
    let signPressed = this.state.signPressed;
    // set mathsign to hold a boolean
    let mathSign = this.state.mathSign;

    // search through classes to find number, clear, or mathFunction

    // if clear revert to original state
    if (elementClasses.contains("clear")) {
      // return the clear window function
      return this.clearWindow(total, numberOne, numberTwo, mathSign, equalSign, signPressed);
    }
    // if number add number to CalculationWindow
    else if (elementClasses.contains("number")) {
      // if CalculationWindow is 0 replace with keyPressed
      if (total === 0 || total === "0") {
        total = keyPressed;
      }
      // else add keyPressed to the total to display
      else {
      total += keyPressed;
      }
    }
    // all that is left is the class 'math-signs'
    else if (elementClasses.contains("math-signs")) {
      return this.checkMathSign(element, keyPressed, mathSign, numberOne, total, signPressed);
    }
    // check if total equals 10 digits
    total.length >= 9 ? alert('Max of Nine Digits') : this.setState({total, numberOne, mathSign})
  }
  // create a function that sets the state to zero on clear click
  clearWindow = (total, numberOne, numberTwo, mathSign, equalSign, signPressed) => {
    total = 0;
    numberOne = 0;
    numberTwo = 0;
    mathSign = false;
    equalSign = false;
    signPressed = '';
    this.setState({
      total, numberOne, numberTwo, mathSign, equalSign, signPressed
    })
  }
  checkMathSign = (element, keyPressed, mathSign, numberOne, total, signPressed) => {
    // change state.mathSign to 'true'
    mathSign = true;
    // check if keyPressed is '='
    this.isKeyPressedEquals(total,keyPressed,numberOne,mathSign, signPressed);
    // check if state.numberOne is more than 0
    if (this.state.numberOne === 0 ) {
      // add the current total to numberOne
      numberOne = total;
    }

    // set total to 0
    total = 0;
    // set the signPressed to keyPressed.id
    signPressed = element.target.id;

    this.setState({
      total, numberOne, mathSign, signPressed
    })
  }

  isKeyPressedEquals = (total,keyPressed,numberOne,mathSign, signPressed) => {
    // set numberTwo
    let numberTwo = this.state.numberTwo;

    // check if keyPressed is '='
    if (keyPressed === '=') {
      // check if numberOne has content and a math-sign has been clicked
      if (numberOne > 0 && mathSign === true) {
        numberTwo = total;
        return this.doMath(numberOne, numberTwo, signPressed, total);
      }
      else {
        // return nothing if false;
        return }
    }
    this.setState({numberTwo})
  }

  doMath = (numberOne, numberTwo, signPressed, total) => {    
    console.log(numberOne, numberTwo, signPressed, total);
  }
  render() {
    return (
      <section className='calculator-display'>
        <CalculationWindow text={this.state.total} />
        <section className='buttons-area'>
          <Numbers onClick={this.click} />
        <MathButtons onClick={this.click} />
        </section>
      </section>
    );
  }
}

export default CalculatorDisplay;
