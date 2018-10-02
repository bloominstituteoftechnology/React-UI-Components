import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      oldNum: 0,
      operator: ""
    }
  }
  clearTotal = () => {
    this.setState({ total: 0 });
  }
  nineTotal = () => {
    this.setState({ total: this.state.total * 10 + 9});
  }
  eightTotal = () => {
    this.setState({ total: this.state.total * 10 + 8});
  }
  sevenTotal = () => {
    this.setState({ total: this.state.total * 10 + 7});
  }
  sixTotal = () => {
    this.setState({ total: this.state.total * 10 + 6});
  }
  fiveTotal = () => {
    this.setState({ total: this.state.total * 10 + 5});
  }
  fourTotal = () => {
    this.setState({ total: this.state.total * 10 + 4});
  }
  threeTotal = () => {
    this.setState({ total: this.state.total * 10 + 3});
  }
  twoTotal = () => {
    this.setState({ total: this.state.total * 10 + 2});
  }
  oneTotal = () => {
    this.setState({ total: this.state.total * 10 + 1});
  }
  zeroTotal = () => {
    this.setState({ total: this.state.total * 10 + 0});
  }
  plus = () => {
    this.setState({ oldNum: this.state.oldNum + this.state.total, total: 0, operator: '+' })
  }
  minus = () => {
    this.setState({ oldNum: this.state.oldNum === 0 ? this.state.total : this.state.oldNum - this.state.total, total: 0, operator: '-' })
  }
  multiply = () => {
    this.setState({ oldNum: this.state.oldNum === 0 ? this.state.total : this.state.oldNum * this.state.total, total: 0, operator: '*' })
  }
  divide = () => {
    this.setState({ oldNum: this.state.oldNum === 0 ? this.state.total : this.state.oldNum / this.state.total, total: 0, operator: '/' })
  }
  equal = () => {
    if (this.state.operator === "+") {
      this.setState({ total: this.state.oldNum + this.state.total, oldNum: 0 })
    }
    if (this.state.operator === "-") {
      this.setState({ total: this.state.oldNum - this.state.total, oldNum: 0 })
    }
    if (this.state.operator === "*") {
      this.setState({ total: this.state.oldNum * this.state.total, oldNum: 0 })
    }
    if (this.state.operator === "/") {
      this.setState({ total: (this.state.oldNum / this.state.total).toFixed(1), oldNum: 0 })
    }
  }
  render() {
    return (
      <div className="container">
        <CalculatorDisplay total={this.state.total}/>
        <div className="row">
          <ActionButton text="clear" func={this.clearTotal} />
          <NumberButton text="÷" style="sign" func={this.divide} />
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
    );
  };
};

export default App;
