import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

class App extends React.Component {
  constructor() { 
    super();
    this.state = {
      result: 0
    };
  }

  onUpdate = (val) => {
    this.setState({
      result: val
    })
  }

  render() {
    return (
      <div className="calculator">
        <CalculatorDisplay total={this.state.result} />
        <NumberButton buttonStyle="button--0" onUpdate={this.onUpdate} text="0"  />
        <NumberButton buttonStyle="button--1" onUpdate={this.onUpdate} text="1"  />
        <NumberButton buttonStyle="button--2" onUpdate={this.onUpdate} text="2"  />
        <NumberButton buttonStyle="button--3" onUpdate={this.onUpdate} text="3"  />
        <NumberButton buttonStyle="button--4" onUpdate={this.onUpdate} text="4"  />
        <NumberButton buttonStyle="button--5" onUpdate={this.onUpdate} text="5"  />
        <NumberButton buttonStyle="button--6" onUpdate={this.onUpdate} text="6"  />
        <NumberButton buttonStyle="button--7" onUpdate={this.onUpdate} text="7"  />
        <NumberButton buttonStyle="button--8" onUpdate={this.onUpdate} text="8"  />
        <NumberButton buttonStyle="button--9" onUpdate={this.onUpdate} text="9"  />
        <ActionButton buttonStyle="button--clear" onUpdate={this.onUpdate} text="clear"  />
        <ActionButton buttonStyle="button--divide" onUpdate={this.onUpdate} text={'\u00f7'}  />
        <ActionButton buttonStyle="button--multiply" onUpdate={this.onUpdate} text={'\u00d7'}  />
        <ActionButton buttonStyle="button--minus" onUpdate={this.onUpdate} text={'\u2212'}  />
        <ActionButton buttonStyle="button--plus" onUpdate={this.onUpdate} text={'\u002b'}  />
        <ActionButton buttonStyle="button--equals" onUpdate={this.onUpdate} text={'\u003d'}  />
      </div>
    );
  }
} 

export default App;

// const App = () => {
//   this.state = {
//     result: 0
//   };

//   return (
//     <div className="calculator">
//       <CalculatorDisplay />
//       <NumberButton buttonStyle="button--0" text="0"  />
//       <NumberButton buttonStyle="button--1" text="1"  />
//       <NumberButton buttonStyle="button--2" text="2"  />
//       <NumberButton buttonStyle="button--3" text="3"  />
//       <NumberButton buttonStyle="button--4" text="4"  />
//       <NumberButton buttonStyle="button--5" text="5"  />
//       <NumberButton buttonStyle="button--6" text="6"  />
//       <NumberButton buttonStyle="button--7" text="7"  />
//       <NumberButton buttonStyle="button--8" text="8"  />
//       <NumberButton buttonStyle="button--9" text="9"  />
//       <ActionButton buttonStyle="button--clear" text="clear"  />
//       <ActionButton buttonStyle="button--divide" text={'\u00f7'}  />
//       <ActionButton buttonStyle="button--multiply" text={'\u00d7'}  />
//       <ActionButton buttonStyle="button--minus" text={'\u2212'}  />
//       <ActionButton buttonStyle="button--plus" text={'\u002b'}  />
//       <ActionButton buttonStyle="button--equals" text={'\u003d'}  />
//     </div>
//   );
// };

// export default App;
