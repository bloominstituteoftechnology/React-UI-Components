import React from 'react';
import NumbersContainer from './components/NumbersContainer/NumbersContainer'
import ActionsContainer from './components/ActionsContainer/ActionsContainer'
import Display from './components/DisplayComponents/CalculatorDisplay'
import './App.css';

const math = require('mathjs')

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      evaluation: '',
      screenActive: '',
    }
  }

  numberClick= (e,text) => {
    this.setState({
      screenActive: this.state.screenActive + text
    })
  }

  clear = e => {
    this.setState({
      evaluation: '',
      screenActive: '',
    })
  }

  addEvaluate = (e,mathSymbol) => {
    this.setState({
      evaluation: this.state.evaluation + this.state.screenActive + mathSymbol,
      screenActive: '',
    })
  }

  evaluate = () => {
    let evaluate = this.state.evaluation + this.state.screenActive
    this.setState({
      evaluation: '',
      screenActive: math.eval(evaluate)
    })
  }

  render(){
    return (
      <div className="calculator-container">
        <Display screenActive={this.state.screenActive} evaluate={this.state.evaluation}/>
        <div className="bottom">
          <NumbersContainer numberClick={this.numberClick} clear={this.clear}/>
          <ActionsContainer addEvaluate={this.addEvaluate} evaluate={this.evaluate}/>
        </div>
      </div>
    );
  }
};

export default App;
