import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import calculator from './calculatorData';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      displayValue: '0',
      operatorSelected: false
    };
  }

  add(num) {
    this.setState(prevState => {
      return {
        total: prevState.total + num,
        displayValue: this.state.total
      };
    });
  }

  handleNumberClick = e => {
    if (!e.target.classList.contains('red')) {
      let currentNumber = e.target.textContent;
      if (this.state.operatorSelected) {
        this.setState({
          displayValue: currentNumber,
          operatorSelected: false
        });
      } else {
        this.setState(prevState => {
          return {
            displayValue:
              prevState.displayValue === '0'
                ? currentNumber
                : prevState.displayValue + currentNumber
          };
        });
        console.log(this.state.displayValue);
      }
    } else if (e.target.textContent === '=') {
      this.add(parseInt(this.state.displayValue));
    } else if (e.target.textContent === '+') {
      this.setState(prevState => {
        return {
          total: (prevState.total += parseInt(this.state.displayValue)),
          displayValue: this.state.total,
          operatorSelected: true
        };
      });
      console.log(this.state.total);
    }
  };

  handleActionClick = e => {
    if (e.target.classList.contains('text')) {
      this.setState({ displayValue: '0' });
    }
  };

  render() {
    return (
      <div className="App">
        <CalculatorDisplay
          displayStyle="CalculatorDisplay"
          value={this.state.displayValue}
        />

        {calculator.map(button => {
          if (button.type === 'action') {
            return (
              <ActionButton
                handleActionClick={this.handleActionClick}
                buttonStyle={button.style}
                value={button.value}
                key={button.value}
              />
            );
          } else if (button.type === 'number') {
            return (
              <NumberButton
                handleNumberClick={this.handleNumberClick}
                buttonStyle={button.style}
                value={button.value}
                key={button.value}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  }
}

export default App;
