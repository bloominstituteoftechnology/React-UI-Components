import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import InsertButton from './components/ButtonComponents/InsertButton';
import ClearButton from './components/ButtonComponents/ClearButton';
import EqualsButton from './components/ButtonComponents/EqualsButton';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      displayInfo: '',
    }
  }
  insertSymbol = (symbolValue) => {
    let displayInfo = this.state.displayInfo.slice();
    displayInfo += symbolValue;
    //Disallows consecutive operators
    if (displayInfo.match(/[+-/x]{2,}/)) {
      return;
    }
    //Checks if the first symbol is a math operator
    if (displayInfo.match(/^[+-/x]/)) {
      return;
    }
    //User cannot enter 10 or more symbols in display
    if(displayInfo.match(/\w{10,}/)) {
      return;
    }
    
    this.setState({ displayInfo: displayInfo });
  }
  clearDisplay = () => {
    const displayInfo = this.state.displayInfo.slice();

    this.setState({ displayInfo: '' });
  }
  doMath = () => {
    let displayInfo = this.state.displayInfo.slice();
    let total = 0;
    let firstValue = 0;
    let secondValue = 0;

    //Checks if the last symbol in displayInfo is a operator
    if (displayInfo.match(/[+-/x]$/)) {
      console.log('Cannot do mathmatical operations');
      return;
    }
    const multiplyRegex = new RegExp(/(\d+)x(\d+)/);

    while (displayInfo.match(multiplyRegex)) {

      let foundMatch = displayInfo.match(multiplyRegex);
      firstValue = foundMatch[1];
      secondValue = foundMatch[2];
      total += firstValue * secondValue;
      displayInfo = displayInfo.replace(multiplyRegex, function (str) {
        return String(total);
      });
    }

    const divideRegex = new RegExp(/(\d+)\/(\d+)/);

    while (displayInfo.match(divideRegex)) {

      let foundMatch = displayInfo.match(divideRegex);
      firstValue = foundMatch[1];
      secondValue = foundMatch[2];
      total = firstValue / secondValue;
      displayInfo = displayInfo.replace(divideRegex, function (str) {
        return String(total);
      });
    }
    const addRegex = new RegExp(/(\d+)\+(\d+)/);

    while (displayInfo.match(addRegex)) {

      let foundMatch = displayInfo.match(addRegex);
      firstValue = foundMatch[1];
      secondValue = foundMatch[2];
      total = Number(firstValue) + Number(secondValue);
      displayInfo = displayInfo.replace(addRegex, function (str) {
        return String(total);
      });
    }
    const subtractRegex = new RegExp(/(\d+)-(\d+)/);
    
    while (displayInfo.match(subtractRegex)) {

      let foundMatch = displayInfo.match(subtractRegex);
      firstValue = foundMatch[1];
      secondValue = foundMatch[2];
      total = firstValue - secondValue;
      displayInfo = displayInfo.replace(subtractRegex, function (str) {
        return String(total);
      });
    }
   
    this.setState({ displayInfo: String(Math.round(total * 1000) / 1000)});

  }
  render() {
    return (

      // Calculator Container uses CSS grids
      <div className="calculator-container">
        {/* Row 1 */}
        <CalculatorDisplay displayValue={this.state.displayInfo} />

        {/* Row 2 */}
        <ClearButton clearHandler={this.clearDisplay} />
        <InsertButton symbol="/" symbolHandler={this.insertSymbol} class="btn--red" />

        {/* Row 3 */}
        <InsertButton symbol="7" symbolHandler={this.insertSymbol} />
        <InsertButton symbol="8" symbolHandler={this.insertSymbol} />
        <InsertButton symbol="9" symbolHandler={this.insertSymbol} />
        <InsertButton symbol="x" symbolHandler={this.insertSymbol} class="btn--red" />

        {/* Row 4 */}
        <InsertButton symbol="4" symbolHandler={this.insertSymbol} />
        <InsertButton symbol="5" symbolHandler={this.insertSymbol} />
        <InsertButton symbol="6" symbolHandler={this.insertSymbol} />
        <InsertButton symbol="-" symbolHandler={this.insertSymbol} class="btn--red" />

        {/* Row 5 */}
        <InsertButton symbol="1" symbolHandler={this.insertSymbol} />
        <InsertButton symbol="2" symbolHandler={this.insertSymbol} />
        <InsertButton symbol="3" symbolHandler={this.insertSymbol} />
        <InsertButton symbol="+" symbolHandler={this.insertSymbol} class="btn--red" />

        {/* Row 6 */}
        <InsertButton symbol="0" symbolHandler={this.insertSymbol} class="btn--white btn__zero" />
        <EqualsButton displayValue={this.state.displayInfo} mathHandler={this.doMath} class="btn--red" />
      </div>
    );
  } //render
}; //App class

export default App;
