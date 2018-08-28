import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const innerText = e.target.innerText
    console.log(innerText)

    if (e.target.innerText === "clear") {
      this.setState({ display: 0});
    } else {
      this.setState({ display: innerText });
    }
  }

  render() {
    return (
      <div className="app">
        <CalculatorDisplay display={ this.state.display } />

        <ActionButton onClick={this.handleClick} buttonStyle="clear-btn" text="clear" />
        
        <ActionButton onClick={this.handleClick} buttonStyle="operator-btn" text="÷" />
        
        <NumberButton onClick={this.handleClick} buttonStyle="number-btn" text="7" />
        <NumberButton onClick={this.handleClick} buttonStyle="number-btn" text="8" />
        <NumberButton onClick={this.handleClick} buttonStyle="number-btn" text="9" />

        <ActionButton onClick={this.handleClick} buttonStyle="operator-btn" text="x" />

        <NumberButton onClick={this.handleClick} buttonStyle="number-btn" text="4" />
        <NumberButton onClick={this.handleClick} buttonStyle="number-btn" text="5" />
        <NumberButton onClick={this.handleClick} buttonStyle="number-btn" text="6" />

        <ActionButton onClick={this.handleClick} buttonStyle="operator-btn" text="-" />

        <NumberButton onClick={this.handleClick} buttonStyle="number-btn" text="1" />
        <NumberButton onClick={this.handleClick} buttonStyle="number-btn" text="2" />
        <NumberButton onClick={this.handleClick} buttonStyle="number-btn" text="3" />

        <ActionButton onClick={this.handleClick} buttonStyle="operator-btn" text="+" />

        <ActionButton onClick={this.handleClick} buttonStyle="zero-btn" text="0" />
        
        <ActionButton onClick={this.handleClick} buttonStyle="operator-btn" text="=" />
      </div>
    );
  }
}

export default App;
