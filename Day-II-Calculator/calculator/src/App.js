import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton'
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import ActionButton from './components/ButtonComponents/ActionButton'

class App extends React.Component {
  state = {total: 0}

  clickHandler = (e) => {
    let key = e.target.dataset.type;

    if (this.state.total === 0 ){
      console.log('you clicked a number')
      this.setState({ total: parseInt(key,10) })
    }else if (key === "clr"){
        console.log("you clicked on clr")
        this.setState({ total: 0 })  
    }else if (key === "eq"){
      this.setState({ total: eval(this.state.total) })
    }else if (key === "mul"){
      this.setState({ total: `${this.state.total}*` })
    }else if (key === "sub"){
      this.setState({ total: `${this.state.total}-` })
    }else if (key === "div"){
      this.setState({ total: `${this.state.total}/` })
    }else
      this.setState({ total: `${this.state.total}${e.target.innerHTML}` })
  }
  
  render(){
    return (
      <div className='container-app'>
        <CalculatorDisplay value={this.state.total}/>
        <div className="buttons">
          <ActionButton clickHandler={this.clickHandler} dataType="clr" text="clear" buttonStyle="wide-action"/>
          <ActionButton clickHandler={this.clickHandler} dataType="div" text="&#247;"/>
          <NumberButton clickHandler={this.clickHandler} dataType="7" text="7"/>
          <NumberButton clickHandler={this.clickHandler} dataType="8" text="8"/>
          <NumberButton clickHandler={this.clickHandler} dataType="9" text="9"/>
          <ActionButton clickHandler={this.clickHandler} dataType="mul" text="&#215;"/>
          <NumberButton clickHandler={this.clickHandler} dataType="4" text="4"/>
          <NumberButton clickHandler={this.clickHandler} dataType="5" text="5"/>
          <NumberButton clickHandler={this.clickHandler} dataType="6" text="6"/>
          <ActionButton clickHandler={this.clickHandler} dataType="sub" text="&#8722;"/>
          <NumberButton clickHandler={this.clickHandler} dataType="1" text="1"/>
          <NumberButton clickHandler={this.clickHandler} dataType="2" text="2"/>
          <NumberButton clickHandler={this.clickHandler} dataType="3" text="3"/>
          <ActionButton clickHandler={this.clickHandler} dataType="add" text="&#43;"/>
          <NumberButton clickHandler={this.clickHandler} dataType="0" text="0" buttonStyle="wide-number"/>
          <ActionButton clickHandler={this.clickHandler} dataType="eq" text="&#61;"/>
        </div>
      </div>
    );  
  }
  
};

export default App;
