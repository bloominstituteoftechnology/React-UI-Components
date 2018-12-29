import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay.js'
import ButtonContainer from './components/ButtonComponents/ButtonContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '0'
    }
  }

  handleInput = event => {
    if (this.state.input === '0') {
      this.setState({
        input: event.target.textContent
      });
    } else {
      if (this.state.input.length < 10) {
        this.setState({
          input: `${this.state.input}${event.target.textContent}`
        });
      } 
    };
  };

  // ********** need to find a way to handleKeyPress even if the container is not in focus.
  // ********** likely has to to with tabIndex property on the container
  handleKeyDown = (event) => {
    console.log(event.key);
    // if the display is in the cleared state
    if (this.state.input === '0') {
      // if the key pressed is a number
      if (event.key >= 0 && event.key <= 9 && event.key !== ' ') {
        this.setState({
          // set the state of the display to the key that was pressed
          input: event.key
      });
    };
  } else {
    // set maximum lenght of input to be 9
    if (this.state.input.length < 10) {
      // if key pressed is a number
      if (event.key >= 0 && event.charCode <= 9 && event.key !== ' ') {
        this.setState({
          // add the key pressed to the currently state of the display
          input: `${this.state.input}${event.key}`
          });
        };
      }; 
    };
    // handle case where user hits backspace
    if (event.key === 'Backspace') {
      if (this.state.input === '0' || this.state.input.length ===1 ) {
        this.setState({
          input: '0'
        })
      } else {
        this.setState({
          input: `${this.state.input.substring(0, this.state.input.length - 1)}`
        })
      }

    }
  };

  clearDisplay = () => {
    this.setState({
      input: '0'
    })
  }

  render() {
  return (
    <div className="container" tabIndex='0' onKeyDown={this.handleKeyDown}>
      <Display 
        input={this.state.input}
      />
      <ButtonContainer 
        handleInput={this.handleInput}
        clearDisplay={this.clearDisplay}
      />
    </div>
    );
  };
}

export default App;
