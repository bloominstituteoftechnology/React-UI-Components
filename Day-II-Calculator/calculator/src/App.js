import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import Buttons from './components/ButtonComponents/Buttons';

class App extends React.Component {
  state = {
    display: '0',
    equation: {
      numbers: [],
      sign: [],
    },
  };

  numberClick = event => {
    // console.log(event.target.innerText);
    if (this.state.display === '0') {
      this.setState({ display: event.target.innerText });
      return;
    }

    this.setState({ display: this.state.display + event.target.innerText });
  };

  operator = event => {
    this.setState({
      ...this.state,
      display: '0',
      equation: {
        numbers: [...this.state.equation.numbers, this.state.display],
        sign: [...this.state.equation.sign, event.target.innerText],
      },
    });
  };

  equal = () => {
    let numbers = this.state.equation.numbers.map(number => Number(number));
    numbers = [...numbers, Number(this.state.display)];
    const signs = this.state.equation.sign;
    let total = numbers[0];
    for (let i = 1; i < numbers.length + 1; i++) {
      if (signs[0] === '+') {
        total += numbers[i];
        signs.shift();
      } else if (signs[0] === '-') {
        total -= numbers[i];
        signs.shift();
      } else if (signs[0] === 'X') {
        total *= numbers[i];
        signs.shift();
      } else if (signs[0] === '/') {
        total /= numbers[i];
        signs.shift();
      }
    }

    total = total.toString();
    this.setState({
      ...this.state,
      display: total,
      equation: {
        numbers: [],
        sign: [],
      },
    });
  };

  clear = () => {
    this.setState({
      display: '0',
      equation: {
        numbers: [],
        sign: [],
      },
    });
  };

  render() {
    return (
      <div className="calculator">
        <CalculatorDisplay display={this.state.display} />
        <Buttons />
      </div>
    );
  }
}

export default App;
