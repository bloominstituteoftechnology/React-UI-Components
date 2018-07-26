import React from 'react';
import './App.css';
import NumberContainer from './components/ButtonComponents/NumberButtons.js';
import Display from './components/DisplayComponents/CalculatorDisplay.js';

const sendToDisplay = (x) => {
  this.setState({display: x});
}

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      display: 1
    };
  }

  render() {
  return   <div className="app-style">
      <Display output={this.state.display} />
      <div className="buttons">
        <NumberContainer />
      </div>
    </div>
  }
}



export default App;
