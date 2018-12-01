import React from 'react';
import './App.css';
// import NumberPad from './components/ButtonComponents/NumberPad';
import Operators from './components/ButtonComponents/Operators';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';


// const App = () => {
//   return (
//     <div className="calc-container">
//       <CalculatorDisplay text="0" />
//       <div className="calc-buttons">
//         <NumberPad />
//         <Operators />
//       </div>
//     </div>
//   );
// };

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: [],
      temp: 0
    }
  }

  updateDisplay = event => {
    this.setState({ total: this.state.total.concat(event.target.value) })
    console.log(event.target.value);
    // console.log(this.props.value)
  }

  render () {
    return (
      <div className="calc-container">
        <CalculatorDisplay text={this.state.total} />
        <div className="calc-buttons">
          <div className="number-pad">
            <button onClick="" className="btn-large">clear</button>
            <div className="integers">
              <button onClick={this.updateDisplay} className="btn-small number" value="9">9</button>
              <button onClick={this.updateDisplay} className="btn-small number" value="8">8</button>
              <button onClick={this.updateDisplay} className="btn-small number" value="7">7</button>
              <button onClick={this.updateDisplay} className="btn-small number" value="6">6</button>
              <button onClick={this.updateDisplay} className="btn-small number" value="5">5</button>
              <button onClick={this.updateDisplay} className="btn-small number" value="4">4</button>
              <button onClick={this.updateDisplay} className="btn-small number" value="3">3</button>
              <button onClick={this.updateDisplay} className="btn-small number" value="2">2</button>
              <button onClick={this.updateDisplay} className="btn-small number" value="1">1</button>
            </div>
            <button onClick={this.updateDisplay} className="btn-large number" value="0">0</button>
          </div>
          <Operators />
        </div>
      </div>
    )
  }
}

export default App;
