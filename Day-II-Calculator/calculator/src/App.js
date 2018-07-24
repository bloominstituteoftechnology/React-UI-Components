import React from 'react';
import './App.css';

import Button from './components/ButtonComponents/Button'
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      operations: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  calculate() {
    let result = '';
    let operation = '';
    this.state.operations.map((operation, index)=>{
      console.log(result);
      return result += operation;
    })

    result = String(eval(result));
    this.setState({result});
    this.forceUpdate();
  }


  handleClick(event){
    let value = event.target.getAttribute('data-value')
    switch (value){
      case 'c':
        this.setState({operations: [],  result: ''})
        break;
      case '=':
        this.calculate();
        break;
      default:
        if (this.state.result){
          this.setState({result:'', operations: []})
          this.state.operations.push(value);
          this.forceUpdate();
        } else {
          this.state.operations.push(value)
        }
        break;
    }
    this.forceUpdate();
  }

  render(){
    return (
      <div className="calculator">
        <CalculatorDisplay customClass='display' data={this.state.operations} result={this.state.result} />
        <div className="container">
          <Button customClass='number btn' onClick={this.handleClick} label="7" value='7'/>
          <Button customClass='number btn' onClick={this.handleClick} label="8" value='8' />
          <Button customClass='number btn' onClick={this.handleClick} label="9" value='9' />
          <Button customClass='action btn' onClick={this.handleClick} label="*" value='*' />
          <Button customClass='number btn' onClick={this.handleClick} label="4" value='4' />
          <Button customClass='number btn' onClick={this.handleClick} label="5" value='5' />
          <Button customClass='number btn' onClick={this.handleClick} label="6" value='6' />
          <Button customClass='action btn' onClick={this.handleClick} label="/" value='/'/>
          <Button customClass='number btn' onClick={this.handleClick} label="1" value='1' />
          <Button customClass='number btn' onClick={this.handleClick} label="2" value='2' />
          <Button customClass='number btn' onClick={this.handleClick} label="3" value='3' />
          <Button customClass='action btn' onClick={this.handleClick} label="+" value='+' />
          <Button customClass='action btn' onClick={this.handleClick} label="=" value='=' />
          <Button customClass='number btn' onClick={this.handleClick} label="0" value='0' />
          <Button customClass='action btn' onClick={this.handleClick} label="c" value='c' />
          <Button customClass='action btn' onClick={this.handleClick} label="-" value='-' />
        </div>
      </div>
    );
  }
};

export default App;
