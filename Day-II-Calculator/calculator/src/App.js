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
      stored: null,
      active: false,
      current: null,
    };
  }

  handlePress = (value) => {
    console.log(this.state);
    if (['+', '-', 'x', '÷', '='].includes(value)) { // Handle operators
      this.handleOperators(value);
    }
    else if (!this.active){
      if (this.state.display === null && typeof value === 'number'){ // Handle first button press
        this.setState({
          display: value,
        });
      }

      else if (value === 'clear'){ // Handle clear button
        this.setState({
          display: null,
        });
      }

      else if (Number(value) > 0 && this.state.display.toString().length < 11){ // Add digits up to max
        this.setState((prevState) => {
          return {
            display: Number(prevState.display.toString() + value),
          }
        })
      }

      else if (value === 0 && this.state.display !== 0 && this.state.display.toString().length < 11){ // Handle the number 0
          this.setState((prevState) => {
            return {
              display: Number(prevState.display.toString() + value),
            }
          })
        }
      }
    }

  handleOperators = (operator) => {
    if (this.state.current === null){
      this.setState((prevState) => {
        return {
          display: null,
          stored: prevState.display,
          active: true,
          current: operator,
        };
      });
    } else {
      if (this.state.current === '+'){
        
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
        <NumberButton className='operator' btn='x' handlePress={this.handlePress} />
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