import React, { Component } from 'react';
import './Display.css';
import Numbers from './Numbers';
import CalculationWindow from './CalculationWindow';
import MathButtons from './MathButtons';

class CalculatorDisplay extends Component {
  state = {
    total: 0,
    numberOne: 0,
    mathSign : false,
    equalSign : false,
    signPressed: '',
    expression: ''
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
    // set signPressed to state.signPressed
    let signPressed = this.state.signPressed;
    // set mathsign to hold a boolean
    let mathSign = this.state.mathSign;
    // set expression to hold all keys pressed
    let expression = this.state.expression;
    // search through classes to find number, clear, or mathFunction

    // if clear revert to original state
    if (elementClasses.contains("clear")) {
      // return the clear window function
      return this.clearWindow();
    }
    // if number add number to CalculationWindow
    else if (elementClasses.contains("number")) {
      // if CalculationWindow is 0 replace with keyPressed
      if (total === 0 || total === "0") {
        total = keyPressed;
        expression += keyPressed;
      }
      // else add keyPressed to the total to display
      else {
      total += keyPressed;
      expression += keyPressed;
      }
    }
    // all that is left is the class 'math-signs'
    else if (elementClasses.contains("math-signs")) {
      return this.checkMathSign(element, mathSign, numberOne, total, signPressed, expression);
    }
    // check if total equals 10 digits
    total.length >= 9 ? alert('Max of Nine Digits') : this.setState({total, numberOne, mathSign, expression})
  }
  // create a function that sets the state to zero on clear click
  clearWindow = () => {
    let total = 0;
    let numberOne = 0;
    let mathSign = false;
    let equalSign = false;
    let signPressed = '';
    let expression = '';
    this.setState({
      total, numberOne, mathSign, equalSign, signPressed, expression
    })
  }
  checkMathSign = (element, mathSign, numberOne, total, signPressed, expression) => {


    // set the signPressed to keyPressed.id
    signPressed = element.target.value;

    if (mathSign === true) {
      total = 0;
      return this.doMath(numberOne, signPressed, total, expression);
    }
    // add mathSign to expression
    expression += signPressed;
    // change state.mathSign to 'true'
    mathSign = true;
    // check if keyPressed is '='
    this.isKeyPressedEquals(total, numberOne, mathSign, signPressed, expression);
    // check if state.numberOne is more than 0
    if (this.state.numberOne === 0 ) {
      // add the current total to numberOne
      numberOne = total;
    }

    // set total to 0
    total = 0;

    this.setState({
      total, numberOne, mathSign, signPressed, expression
    })
  }

  isKeyPressedEquals = (total,keyPressed,numberOne,mathSign, signPressed, expression) => {

    // check if keyPressed is '='
    if (keyPressed === '=') {
      // check if numberOne has content and a math-sign has been clicked
      if (numberOne > 0 && mathSign === true) {
        return this.doMath(numberOne, signPressed, total);
      }
      else {
        // return nothing if false;
        return }
    }
    this.setState({})
  }

  doMath = (numberOne, signPressed, total, expression) => {
    this.clearWindow();

    console.log(numberOne, signPressed, total, expression);
    console.log(eval(expression));
    total = eval(expression);
    numberOne = eval(expression);

    // check if sign Pressed is not equals and add to signPressed for next equation
    if (signPressed !== '=') {
      signPressed;
    }
    else { signPressed = ''}
    console.log(total);
    this.setState({total, numberOne, signPressed});
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
