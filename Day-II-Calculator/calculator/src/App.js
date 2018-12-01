import React, { Component } from 'react';
import './App.css';

import CalculatorContainer from './components/CalculatorContainer/CalculatorContainer.js';

class App extends Component {

  state = {
    total: '1',
    numBank: [],
    operators: [],
    addDigit: this.addDigit(),
    }

    clear(event) {
      event.persist();
      this.setState(prevState => { return {total: '0'}});
      console.log('click')
  }

  addDigit(event) {
    // event.persist();
    // this.setState(prevState => { return {total: this.total += event.target.innerText} })
    // console.log(event.target.innerText)
  }

  render() {
    console.log(this.state.total);

    return (
      <div className="app">
        <h3>Welcome to React Calculator</h3>
        <CalculatorContainer state={this.state} total={this.state.total} clear={this.clear.bind(this)}/>
      </div>
    );
  }
};


//   return (
//     <div className="app">
//       <h3>Welcome to React Calculator</h3>
//       <CalculatorContainer />
//     </div>
//   );
// };

export default App;
