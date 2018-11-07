import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const container = {
  width: "800px",
  marginLeft: "20%"
}

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


class myCalculator extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          total: 0,
          symbol: ''
      };

      this.calculate = this.calculate.bind(this)
      this.currentSymbol = this.currentSymbol.bind(this)
  }

  currentSymbol(event) {
    const mySymbol = event.target.name;
    console.log(mySymbol);
    this.setState({
      symbol: mySymbol
  })
  console.log(this.state.symbol)
  }

  calculate(event) {
    const myValue = parseInt(event.target.name, 10);
    console.log("my value", myValue)
    console.log("current total", this.state.total)
    if (this.state.symbol === '+') {
      console.log("plus")
    }
      this.setState({
          // total: this.state.total + myValue
          total: myValue
      })

    if (this.state.symbol === '*') {
      console.log("times")
    }
    this.setState({
      total: this.state.total * myValue
    })

    if (this.state.symbol === '-') {
      console.log("minus")
    }
    this.setState({
      total: this.state.total - myValue
  })

    if (this.state.symbol === '÷') {
    console.log("divide")
    }
      this.setState({
        total: this.state.total / myValue
      })
    }

  render() {
      return (
          <div>
            <button onClick={this.calculate} className="btn-styles" name="1">1</button>
            <button onClick={this.calculate} className="btn-styles" name="2">2</button>
            <button onClick={this.calculate} className="btn-styles" name="3">3</button>
            <button onClick={this.calculate} className="btn-styles" name="4">4</button>
            <button onClick={this.calculate} className="btn-styles" name="5">5</button>
            <button onClick={this.calculate} className="btn-styles" name="6">6</button>
            <button onClick={this.calculate} className="btn-styles" name="7">7</button>
            <button onClick={this.calculate} className="btn-styles" name="8">8</button>
            <button onClick={this.calculate} className="btn-styles" name="9">9</button>  
            <button onClick={this.currentSymbol} className="btn-styles" name="+">+</button>  
            <button onClick={this.currentSymbol} className="btn-styles" name="*">*</button>  
            <button onClick={this.currentSymbol} className="btn-styles" name="-">-</button> 
            <button onClick={this.currentSymbol} className="btn-styles" name="÷">÷</button> 
            <h1>My total: {this.state.total}</h1>
          </div>
      )
  }
}

export default myCalculator;

// export default App;
