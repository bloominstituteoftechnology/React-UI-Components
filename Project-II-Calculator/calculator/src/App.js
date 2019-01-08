import React, { Component } from 'react';
import './App.css';
import {Button} from "./components/ButtonComponents/NumberButton"
import {Input} from "./components/ButtonComponents/Input"
import {ActionButton} from "./components/ButtonComponents/ActionButton"
import {ZeroButton} from "./components/ButtonComponents/zero"
import * as math from 'mathjs'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    }
  }

  addToInput = val => {
    this.setState({input: this.state.input + val});
  }

  handleEqual = () => {
    this.setState({input: math.eval(this.state.input)})
  }

  render() {
    return (
            <div className="app">
              <div className="calc-wrapper">
              <Input input={this.state.input}></Input>
                <div className="row">
                  <ActionButton handleClear={() => this.setState({input: ""})}>clear</ActionButton>
                  <Button handleClick={this.addToInput}>/</Button>
                </div>
                <div className="row">
                  <Button handleClick={this.addToInput}>7</Button>
                  <Button handleClick={this.addToInput}>8</Button>
                  <Button handleClick={this.addToInput}>9</Button>
                  <Button handleClick={this.addToInput}>*</Button>
                </div>
                <div className="row">
                  <Button handleClick={this.addToInput}>4</Button>
                  <Button handleClick={this.addToInput}>5</Button>
                  <Button handleClick={this.addToInput}>6</Button>
                  <Button handleClick={this.addToInput}>-</Button>
                </div>
                <div className="row">
                  <Button handleClick={this.addToInput}>1</Button>
                  <Button handleClick={this.addToInput}>2</Button>
                  {/* <Button handleClick={()=> this.handleEqual()}>=</Button> */}
                  <Button handleClick={this.addToInput}>3</Button>
                  <Button handleClick={this.addToInput}>+</Button>
                </div>
                <div className="last-row">
                  <ZeroButton handleClick={this.addToInput}>0</ZeroButton>
                  <Button handleClick={()=> this.handleEqual()}>=</Button>
                </div>
              </div>
            </div>)
  }
}






// const App = () => {
//   return (
//     <div>
//       <h3>Welcome to React Calculator</h3>
//       <p>
//         We have given you a starter project. You'll want to build out your
//         components in their respective files, remove this code and replace it
//         with the proper components.
//       </p>
//       <p>
//         <strong>
//           Don't forget to `default export` your components and import them here
//           inside of this file in order to make them work.
//         </strong>
//       </p>
//     </div>
//   );
// };

export default App;
