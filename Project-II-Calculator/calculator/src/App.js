import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay.js'
import ButtonContainer from './components/ButtonComponents/ButtonContainer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstInput: '0'
    }
    this.container = React.createRef();
  }

  componentDidMount = () => {
    this.container.current.focus();
  }

  handleInput = event => {
    if (this.state.firstInput === '0') {
      this.setState({
        firstInput: event.target.textContent
      });
    } else {
      if (this.state.firstInput.length < 10) {
        this.setState({
          firstInput: `${this.state.firstInput}${event.target.textContent}`
        });
      } 
    };
  };

  // ********** need to find a way to handleKeyPress even if the container is not in focus.
  // ********** likely has to to with tabIndex property on the container
  handleKeyDown = (event) => {
    // if the display is in the cleared state
    if (this.state.firstInput === '0') {
      // if the key pressed is a number
      if (event.key >= 0 && event.key <= 9 && event.key !== ' ') {
        this.setState({
          // set the state of the display to the key that was pressed
          firstInput: event.key
      });
    };
  } else {
    // set maximum lenght of input to be 9
    if (this.state.firstInput.length < 10) {
      // if key pressed is a number
      if (event.key >= 0 && event.charCode <= 9 && event.key !== ' ') {
        this.setState({
          // add the key pressed to the currently state of the display
          firstInput: `${this.state.firstInput}${event.key}`
          });
        };
      }; 
    };
    // handle case where user hits backspace
    if (event.key === 'Backspace') {
      if (this.state.firstInput === '0' || this.state.firstInput.length === 1 ) {
        this.setState({
          firstInput: '0'
        })
      } else {
        this.setState({
          firstInput: `${this.state.firstInput.substring(0, this.state.firstInput.length - 1)}`
        })
      }

    }
  };

  clearDisplay = () => {
    this.setState({
      firstInput: '0'
    })
  }

  render() {
  return (
    <div ref={this.container} className="container" tabIndex='0' onKeyDown={this.handleKeyDown}>
      <Display 
        firstInput={this.state.firstInput}
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
