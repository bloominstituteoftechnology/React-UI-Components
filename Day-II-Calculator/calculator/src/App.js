import React, {Component} from 'react';
import './App.css';
import ActionButtons from './components/ButtonComponents/ActionButton.js';
import NumberButtons from './components/ButtonComponents/NumberButton.js';
// import NumButton from './components/ButtonComponents/NumberButton.js';
import Display from './components/DisplayComponents/CalculatorDisplay.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  addToDisplay = val => {
    this.setState({text: this.state.text + val});
  };

  clearDisplay = () => {
    this.setState({
      text: '',
    });
  };
  render() {
    return (
      <div className="calculator">
        <Display text={this.state.text} />
        <div className="main">
          <div className="actionButtons">
            <ActionButtons class="aButtons" text="/" />
            <ActionButtons class="aButtons" text="x" />
            <ActionButtons class="aButtons" text="-" />
            <ActionButtons class="aButtons" text="+" />
            <ActionButtons class="aButtons" text="=" />
          </div>
          <div className="numbers">
            <NumberButtons
              class="clear"
              eventListenerClear={this.clearDisplay}
              text="Clear"
            />
            <NumberButtons
              class="nButtons"
              eventListener={this.addToDisplay}
              text="7"
            />
            <NumberButtons
              class="nButtons"
              eventListener={this.addToDisplay}
              text="8"
            />
            <NumberButtons
              class="nButtons"
              eventListener={this.addToDisplay}
              text="9"
            />
            <NumberButtons
              class="nButtons"
              eventListener={this.addToDisplay}
              text="4"
            />
            <NumberButtons
              class="nButtons"
              eventListener={this.addToDisplay}
              text="5"
            />
            <NumberButtons
              class="nButtons"
              eventListener={this.addToDisplay}
              text="6"
            />
            <NumberButtons
              class="nButtons"
              eventListener={this.addToDisplay}
              text="1"
            />
            <NumberButtons
              class="nButtons"
              eventListener={this.addToDisplay}
              text="2"
            />
            <NumberButtons
              class="nButtons"
              eventListener={this.addToDisplay}
              text="3"
            />
            <NumberButtons
              class="nButtons zero"
              text="0"
              eventListener={this.addToDisplay}
            />
          </div>
        </div>
      </div>
    );
  }
}

// const App = () => {
//   return (
//     <div className="calculator">
//       <Display />
//       <div className="main">
//         <ActionButtons />

/* <NumButton className="nButtons" text="1" /> */

/* <NumButton className="nButtons" text="2" /> */

/* <NumButton className="nButtons" text="3" />; */

/* <NumButton className="nButtons" text="4" /> */

/* <NumButton className="nButtons" text="5" /> */

/* <NumButton className="nButtons" text="6" /> */

/* <NumButton className="nButtons" text="7" /> */

/* <NumButton className="nButtons" text="8" /> */

/* <NumButton className="nButtons" text="9" /> */

/* <NumButton className="nButtons" text="0" /> */

//<NumberButtons />
// </div>
// </div>
// );
// };

export default App;
