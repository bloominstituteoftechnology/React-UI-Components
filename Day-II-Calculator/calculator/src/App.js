import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const container = {
  width: "800px",
  marginLeft: "200px",
  marginTop: "50px"
}

class myCalculator extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          total: 0,
          symbol: '',
          currentValue: 0
      };

      this.display = this.display.bind(this)
      this.currentSymbol = this.currentSymbol.bind(this)
      this.clear = this.clear.bind(this)
      this.calculate = this.calculate.bind(this)
  }

  currentSymbol(event) {
    const mySymbol = event.target.name;
    console.log("my symbol", mySymbol);
    this.setState({
      symbol: mySymbol
  })
  console.log("state symbol", this.state.symbol)
  }

  display(event) {
    const myValue = parseInt(event.target.name, 10);
    console.log("my value", myValue, typeof(myValue));
    {(this.state.total === 0) ? this.setState ({
      total: myValue
    }) : this.setState ({
          currentValue: myValue
        })}

    console.log("state value", this.state.currentValue)
  }

  calculate() {
    console.log(this.state.value)
    console.log(this.state.symbol)
    console.log(this.state.currentValue)
    if (this.state.symbol === '+') {
      console.log("plus")
      this.setState({
        total: this.state.total + this.state.currentValue
      })
    }

    if (this.state.symbol === '*') {
      console.log("times")
      this.setState({
        total: this.state.total * this.state.currentValue
      })
    }


    if (this.state.symbol === '-') {
      console.log("minus")
      this.setState({
        total: this.state.total - this.state.currentValue
    })
    }

    if (this.state.symbol === '÷') {
    console.log("divide")
    this.setState({
      total: this.state.total / this.state.currentValue
    })
  }
  }

    clear() {
      this.setState({
        total: 0,
        currentValue: 0,
        symbol: ''
      })
    }


  render() {
    console.log("render total", this.state.total, typeof(this.state.total))
    console.log("render value", this.state.currentValue, typeof(this.state.currentValue))
    console.log("render symbol", this.state.symbol, typeof(this.state.symbol))
      return (
          <div style={container}>
            <div>
              <button onClick={this.clear} className="calculator-display-styles" name="display">{this.state.total}</button> 
            </div>

            <div>
              <button onClick={this.clear} className="action-btn-styles" name="clear">clear</button> 
              <button onClick={this.currentSymbol} className="btn-styles red-btn" name="÷">÷</button> 
            </div>

            <div>
              <button onClick={this.display} className="btn-styles" name="7">7</button>
              <button onClick={this.display} className="btn-styles" name="8">8</button>
              <button onClick={this.display} className="btn-styles" name="9">9</button>  
              <button onClick={this.currentSymbol} className="btn-styles red-btn" name="*">*</button> 
            </div>

            <div>
              <button onClick={this.display} className="btn-styles" name="4">4</button>
              <button onClick={this.display} className="btn-styles" name="5">5</button>
              <button onClick={this.display} className="btn-styles" name="6">6</button>
              <button onClick={this.currentSymbol} className="btn-styles red-btn" name="-">-</button> 
            </div>

            <div>
              <button onClick={this.display} className="btn-styles" name="1">1</button>
              <button onClick={this.display} className="btn-styles" name="2">2</button>
              <button onClick={this.display} className="btn-styles" name="3">3</button>
              <button onClick={this.currentSymbol} className="btn-styles red-btn" name="+">+</button> 
            </div>

            <div>
              <button onClick={this.display} className="action-btn-styles" name="0">0</button>
              <button onClick={this.calculate} className="btn-styles red-btn" name="=">=</button> 
            </div>
          </div>
      )
  }
}

export default myCalculator;


// MVP Solution

// const App = () => {
//   return (
//     <div style={container}>
//       <h3>Welcome to React Calculator</h3>
//       <p>
//         We have given you a starter project. You'll want to build out your
//         components in their respective files, remove this code and replace it
//         with the proper components.
//       </p>
//       <div>
//       <CalculatorDisplay text="0"/>
//       </div>
//       <ActionButton text="clear" />
//       <NumberButton text="÷" buttonStyle="red-btn" />
//       <div>
//         <NumberButton text="7" />
//         <NumberButton text="8" />
//         <NumberButton text="9" />
//         <NumberButton text="x" buttonStyle="red-btn" />
//       </div>
//       <div className="third-row">
//         <NumberButton text="4" />
//         <NumberButton text="5" />
//         <NumberButton text="6" />
//         <NumberButton text="-" buttonStyle="red-btn" />
//       </div>
//       <NumberButton text="1" />
//       <NumberButton text="2" />
//       <NumberButton text="3" />
//       <NumberButton text="+" buttonStyle="red-btn"/>
//       <div>
//         <ActionButton text="0" />
//         <NumberButton text="=" buttonStyle="red-btn"/>
//       </div>
//       <p>
//         <strong>
//           Don't forget to `default export` your components and import them here
//           inside of this file in order to make them work.
//         </strong>
//       </p>
//     </div>
//   );
// };

// export default App;