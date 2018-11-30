import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      display: null,
      value: null,
      stored: null,
      active: null,
    };
  }

  handlePress = (btn) => {
      if (this.state.value === 'OVERFLOW'){
        if (btn === 'clear'){
          this.setState({
            display: null,
            value: null,
            stored: null,
            active: null,
          })
        } else return;
      }
      if (btn === '=') this.handleEquals(false);
      else if (typeof btn === 'number'){
        if (this.state.value === null) this.setState({ display: btn, value: btn });
        else this.handleNumbers(btn);
      }
      else if (btn === 'clear'){
        this.setState({
          display: null,
          value: null,
          stored: null,
          active: null,
        });
      }
      else this.handleOperators(btn);
  }

  handleEquals = (btn) => {
    if (this.state.active){
      this.setState((prevState) => {
        switch(prevState.active){ // Handle different operators.
          case '+':
            return { 
              display: prevState.value + prevState.stored, 
              value: null, 
              stored: prevState.value + prevState.stored,
              active: null,
            };
          case '-':
            return {
              display: prevState.stored - prevState.value,
              value: null,
              stored: prevState.stored - prevState.value,
              active: null,
            };
          case '*':
            return {
              display: prevState.value * prevState.stored,
              value: null,
              stored: prevState.value * prevState.stored,
              active: null,
            };
          case '÷':
            return {
              display: prevState.stored / prevState.value,
              value: null,
              stored: prevState.stored / prevState.value,
              active: null,
            };
          default:
            break;
        }
      }, () => {
        if (btn){
          this.setState({
            active: btn,
          });
        }
      });
    }
  }

  handleNumbers = (btn) => {
    const currentNumber = this.state.display.toString();
    if (this.state.value === null){
      this.setState({
        display: btn.toString(),
        value: btn,
      });
    }
    else if (currentNumber.length < 11){
      this.setState((prevState) => {
        return {
          display: currentNumber + btn,
          value: Number(currentNumber + btn),
        }
      });
    }
    else return;
  }

  handleOperators = (btn) => {
    if (this.state.value === null) return;
    else if (this.state.active && this.state.stored !== null){
      this.handleEquals(btn);
    }
    else {
      this.setState((prevState) => {
        return {
          value: null,
          stored: prevState.value,
          active: btn,
        };
      });
    }
  }
  componentDidUpdate(){
    if (this.state.display !== null){
      const currentNum = this.state.display.toString();
      if (currentNum.length > 11){
        this.setState({
          display: 'OVERFLOW',
          value: 'OVERFLOW',
        });
      }
    }
  }
  render(){
    return(
      <div className='calculator'>
        <CalculatorDisplay display={this.state.display}/>
        <ActionButton btn='clear' handlePress={this.handlePress} />
        <NumberButton className='operator' btn='÷' handlePress={this.handlePress} />
        <NumberButton btn={7} handlePress={this.handlePress} />
        <NumberButton btn={8} handlePress={this.handlePress} />
        <NumberButton btn={9} handlePress={this.handlePress} />
        <NumberButton className='operator' btn='*' handlePress={this.handlePress} />
        <NumberButton btn={4} handlePress={this.handlePress} />
        <NumberButton btn={5} handlePress={this.handlePress} />
        <NumberButton btn={6} handlePress={this.handlePress} />
        <NumberButton className='operator' btn='-' handlePress={this.handlePress} />
        <NumberButton btn={1} handlePress={this.handlePress} />
        <NumberButton btn={2} handlePress={this.handlePress} />
        <NumberButton btn={3} handlePress={this.handlePress} />
        <NumberButton className='operator' btn='+' handlePress={this.handlePress} />
        <ActionButton btn={0} handlePress={this.handlePress} />
        <NumberButton className='operator' btn='=' handlePress={this.handlePress} />
      </div>
    );
  }
}

export default App;