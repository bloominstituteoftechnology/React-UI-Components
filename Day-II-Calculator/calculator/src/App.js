import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        {/* <CalculatorDisplay display={this.state.display}/> */}
        <div className="row">
          <ActionButton text="clear" func={this.clearTotal} />
          <NumberButton text="/" style="sign" func={this.divide} />
        </div>
        <div className="row">
          <NumberButton text="7" style="num" func={this.sevenTotal} />
          <NumberButton text="8" style="num" func={this.eightTotal} />
          <NumberButton text="9" style="num" func={this.nineTotal} />
          <NumberButton text="×" style="sign" func={this.multiply} />
        </div>
        <div className="row">
          <NumberButton text="4" style="num" func={this.fourTotal} />
          <NumberButton text="5" style="num" func={this.fiveTotal} />
          <NumberButton text="6" style="num" func={this.sixTotal} />
          <NumberButton text="-" style="sign" func={this.minus} />
        </div>
        <div className="row">
          <NumberButton text="1" style="num" func={this.oneTotal} />
          <NumberButton text="2" style="num" func={this.twoTotal} />
          <NumberButton text="3" style="num" func={this.threeTotal} />
          <NumberButton text="+" style="sign" func={this.plus} />
        </div>
        <div className="row">
          <ActionButton text="0" func={this.zeroTotal} />
          <NumberButton text="=" style="sign" func={this.equal} />
        </div>
      </div>
    )
  }
}

export default App;

