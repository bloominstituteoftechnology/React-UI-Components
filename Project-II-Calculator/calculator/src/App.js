import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay.js'
import ButtonContainer from './components/ButtonComponents/ButtonContainer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // initial value
      firstInput: '0',
      // operator
      operand: '',
      // second value
      secondInput: '0',
    }
    // create ref so we can bring focus to the container on page load
    this.container = React.createRef();
  }

  // bring focus to container on pageload
  componentDidMount = () => {
    this.container.current.focus();
  }

  // handle click events on the button container elements
  handleInput = event => {
    // if no operand, thus on firstInput
    if (this.state.operand === '') {
      // if at initial state
      if (this.state.firstInput === '0') {
        // setState of first input to the clicked button
        this.setState({
          firstInput: event.target.textContent
        });
      } else {
        // add any numbers clicked to the end of the string of numbers with max length 10
        if (this.state.firstInput.length < 10) {
          this.setState({
            firstInput: `${this.state.firstInput}${event.target.textContent}`
          });
        } 
      };
    } else {
      // if operand present, update state of secondInput
      if (this.state.secondInput === '0') {
        this.setState({
          secondInput: event.target.textContent
        });
      } else {
        if (this.state.secondInput.length < 10) {
          this.setState({
            secondInput: `${this.state.secondInput}${event.target.textContent}`
          });
        } 
      };
    }
   
  };

  // handle user typing on keyboard instead of clicking buttons
  handleKeyDown = (event) => {
    if (this.state.operand === '') {
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
    } else {
      if (this.state.secondInput === '0') {
        // if the key pressed is a number
        if (event.key >= 0 && event.key <= 9 && event.key !== ' ') {
          this.setState({
            // set the state of the display to the key that was pressed
            secondInput: event.key
        });
      };
    } else {
      // set maximum lenght of input to be 9
      if (this.state.secondInput.length < 10) {
        // if key pressed is a number
        if (event.key >= 0 && event.charCode <= 9 && event.key !== ' ') {
          this.setState({
            // add the key pressed to the currently state of the display
            secondInput: `${this.state.secondInput}${event.key}`
            });
          };
        }; 
      };
      // handle case where user hits backspace
      if (event.key === 'Backspace') {
        if (this.state.secondInput === '0' || this.state.secondInput.length === 1 ) {
          this.setState({
            secondInput: '0'
          })
        } else {
          this.setState({
            secondInput: `${this.state.secondInput.substring(0, this.state.secondInput.length - 1)}`
          })
        }
  
      }
    }
    // handle operand assignment from keyboard
    if (this.state.operand === '') {
      switch(event.key) {
        case '/':
          this.setState({operand: '\u00F7'})
          break;
        case '*':
          this.setState({operand: '\u00D7'})
          break;
        case '-':
          this.setState({operand: '\u2212'})
          break;
        case '+':
          this.setState({operand: '\u002B'})
          break;
        default:
          break;
      }
    }
    // handle 'return' keyPress from keyboard as 'equals'
    if (event.key === 'Enter') {
      if(this.state.operand) {
        switch(this.state.operand) {
          case '\u00F7':
            this.setState({
              firstInput: (parseFloat(this.state.firstInput) / parseFloat(this.state.secondInput)).toString(),
              operand: '',
              secondInput: '0'
            })
            break;
            // stopped here, working on making multiplacation work
          case '\u00D7':
            this.setState({
              firstInput: (parseFloat(this.state.firstInput) * parseFloat(this.state.secondInput)).toString(),
              operand: '',
              secondInput: '0'
            })
            break;
          case '\u2212':
            this.setState({
              firstInput: (parseFloat(this.state.firstInput) - parseFloat(this.state.secondInput)).toString(),
              operand: '',
              secondInput: '0'
            })
            break;
          case '\u002B':
            this.setState({
              firstInput: (parseFloat(this.state.firstInput) + parseFloat(this.state.secondInput)).toString(),
              operand: '',
              secondInput: '0'
            })
            break;
          default: 
            break;
        }
      }
    }
  };

  // handle operand clicks on the calc display
  handleOperand = event => {
    if (this.state.operand === '') {
      switch(event.target.textContent) {
        case '\u00F7':
          this.setState({operand: '\u00F7'})
          break;
        case '\u00D7':
          this.setState({operand: '\u00D7'})
          break;
        case '\u2212':
          this.setState({operand: '\u2212'})
          break;
        case '\u002B':
          this.setState({operand: '\u002B'})
          break;
        default: 
          break;
      };
    }
    if (event.target.textContent === '\u003D') {
      if (this.state.operand) {
        switch(this.state.operand) {
          case '\u00F7':
            this.setState({
              firstInput: (parseFloat(this.state.firstInput) / parseFloat(this.state.secondInput)).toString(),
              operand: '',
              secondInput: '0'
            })
            break;
            // stopped here, working on making multiplacation work
          case '\u00D7':
            this.setState({
              firstInput: (parseFloat(this.state.firstInput) * parseFloat(this.state.secondInput)).toString(),
              operand: '',
              secondInput: '0'
            })
            break;
          case '\u2212':
            this.setState({
              firstInput: (parseFloat(this.state.firstInput) - parseFloat(this.state.secondInput)).toString(),
              operand: '',
              secondInput: '0'
            })
            break;
          case '\u002B':
            this.setState({
              firstInput: (parseFloat(this.state.firstInput) + parseFloat(this.state.secondInput)).toString(),
              operand: '',
              secondInput: '0'
            })
            break;
          default:
            break;
        }
      }
    } 
    
  };

  // clear the display and reset the App.state
  clearDisplay = () => {
    this.setState({
      firstInput: '0',
      operand: '',
      secondInput: '0'
    })
  }

  render() {
  return (
    <div ref={this.container} className="container" tabIndex='0' onKeyDown={this.handleKeyDown}>
      <Display 
        firstInput={this.state.firstInput}
        secondInput={this.state.secondInput}
        operand={this.state.operand}
      />
      <ButtonContainer 
        handleInput={this.handleInput}
        handleOperand={this.handleOperand}
        clearDisplay={this.clearDisplay}
      />
    </div>
    );
  };
}

export default App;
