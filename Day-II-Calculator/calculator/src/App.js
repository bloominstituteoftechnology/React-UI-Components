import * as React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

type State = {
  display: string,
  op1: number | null,
  opCode: string | null,
  reset: boolean
};

class App extends React.Component<{}, State> {
  state = {
    display: '0',
    op1: null,
    opCode: null,
    reset: true
  };

  handleNumberInput = (num: string) => () => {
    let display;
    if (this.state.reset) {
      this.setState({
        display: num,
        reset: false
      });
    } else {
      this.setState(prevState => ({
        display: prevState.display + num
      }));
    }
  };

  handleAction = (type: string) => () => {
    switch (type) {
      case 'clear':
        this.setState({
          display: '0',
          op1: null,
          op2: null,
          reset: true
        });
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        if (this.state.op1 === null) {
          this.setState({
            op1: parseInt(this.state.display, 10),
            opCode: type,
            reset: true
          });
        } else {
          this.accumulate(() =>
            this.setState({
              opCode: type,
              reset: true
            })
          );
        }
        break;
      case '=':
        this.accumulate(() =>
          this.setState({
            op1: null,
            reset: true
          })
        );
        break;
      default:
    }
  };

  accumulate = callback => {
    if (this.state.op1 === null) return callback();
    const modifiedState = {};

    switch (this.state.opCode) {
      case '+':
        modifiedState.op1 = this.state.op1 + parseInt(this.state.display, 10);
        break;
      case '-':
        modifiedState.op1 = this.state.op1 - parseInt(this.state.display, 10);
        break;
      case '*':
        modifiedState.op1 = this.state.op1 * parseInt(this.state.display, 10);
        break;
      case '/':
        modifiedState.op1 = parseInt(
          this.state.op1 / parseInt(this.state.display, 10),
          10
        );
        break;
      default:
        return callback();
    }
    modifiedState.display = modifiedState.op1 + '';
    this.setState(modifiedState);
    return callback();
  };

  render() {
    return (
      <div className="AppContainer">
        <CalculatorDisplay value={this.state.display} />
        <div className="ButtonContainer">
          <ActionButton className="w-75" onClick={this.handleAction('clear')}>
            clear
          </ActionButton>
          <ActionButton
            className="w-25 bg-attention"
            onClick={this.handleAction('/')}
          >
            {'\u00f7'}
          </ActionButton>
          <NumberButton className="w-25" onClick={this.handleNumberInput('7')}>
            7
          </NumberButton>
          <NumberButton className="w-25" onClick={this.handleNumberInput('8')}>
            8
          </NumberButton>
          <NumberButton className="w-25" onClick={this.handleNumberInput('9')}>
            9
          </NumberButton>
          <ActionButton
            className="w-25 bg-attention"
            onClick={this.handleAction('*')}
          >
            {'\u00d7'}
          </ActionButton>
          <NumberButton className="w-25" onClick={this.handleNumberInput('4')}>
            4
          </NumberButton>
          <NumberButton className="w-25" onClick={this.handleNumberInput('5')}>
            5
          </NumberButton>
          <NumberButton className="w-25" onClick={this.handleNumberInput('6')}>
            6
          </NumberButton>
          <ActionButton
            className="w-25 bg-attention"
            onClick={this.handleAction('-')}
          >
            {'\u2014'}
          </ActionButton>
          <NumberButton className="w-25" onClick={this.handleNumberInput('1')}>
            1
          </NumberButton>
          <NumberButton className="w-25" onClick={this.handleNumberInput('2')}>
            2
          </NumberButton>
          <NumberButton className="w-25" onClick={this.handleNumberInput('3')}>
            3
          </NumberButton>
          <ActionButton
            className="w-25 bg-attention"
            onClick={this.handleAction('+')}
          >
            +
          </ActionButton>
          <NumberButton className="w-75" onClick={this.handleNumberInput('0')}>
            0
          </NumberButton>
          <ActionButton
            className="w-25 bg-attention"
            onClick={this.handleAction('=')}
          >
            {'='}
          </ActionButton>
        </div>
      </div>
    );
  }
}

export default App;
