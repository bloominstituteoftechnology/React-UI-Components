import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

class App extends React.Component {
  constructor(props){
    super(props);
    this.numbers = [
        {buttonStyle:"number-button", text:1}, 
        {buttonStyle:"number-button", text:2}, 
        {buttonStyle:"number-button", text:3}, 
        {buttonStyle:"number-button", text:4},
        {buttonStyle:"number-button", text:5},
        {buttonStyle:"number-button", text:6},
        {buttonStyle:"number-button", text:7},
        {buttonStyle:"number-button", text:8},
        {buttonStyle:"number-button", text:9},
        {buttonStyle:"operator-button", text:'÷'},
        {buttonStyle:"operator-button", text:'x'},
        {buttonStyle:"operator-button", text:'-'},
        {buttonStyle:"operator-button", text:'+'},
        {buttonStyle:"operator-button", text:'='},
      ];
    this.action = [{actionButtonStyle:"zero-button", text:0}, {actionButtonStyle:"clear-button", text:"clear"}];
    this.state = {total: [] };
    this.temp = [];
    this.addition = false;
    this.equalUsed = false;
    
  }

  add (a,b){
    let x = Math.floor(a);
    let y = Math.floor(b);
    return x+y;
  }

  handleClick = (e) => {
    const value = e.target.getAttribute('value');    

    this.setState(prevState => ({
      total: [...prevState.total, value]
    }));

    if(value === 'clear'){
      this.setState({total: []});
    }

    if(value === '+'){
      this.temp = this.state.total.join('').toString();
      this.setState({total: [] });
      this.addition = true;
      // console.log(`temp value: ${this.temp}`);
    }

    if(value === '='){
      let current = this.state.total.join('').toString();
      // console.log(this.addition)
      if(this.addition === true){
        let result = this.add(current, this.temp);
        this.setState({total: [result]});
        this.addition = false;
        // console.log(`result value: ${result}`)
        // console.log(`current value: ${current}`)
      }
      this.equalUsed = true;
    }
    if (this.equalUsed === true && (value === '1' || value === '2' ||value === '3'||value === '4'||value === '5'||value === '6'||value === '7'||value === '8'||value === '9'||value === '0')){
      this.setState({total: [value]});
      this.equalUsed = false;
    }
    // console.log(this.addition);
  }

  render(){
    return(
      <div className="app">
         <div className="calculator">
           <CalculatorDisplay state ={this.state.total}/>
           <div  className="buttons">
             <ActionButton onClick={this.handleClick} action={this.action[1]}/>
             <NumberButton onClick={this.handleClick} number={this.numbers[9]}/>
             <NumberButton onClick={this.handleClick} number={this.numbers[6]}/>
             <NumberButton onClick={this.handleClick} number={this.numbers[7]}/>
             <NumberButton onClick={this.handleClick} number={this.numbers[8]}/>
             <NumberButton onClick={this.handleClick} number={this.numbers[10]}/>
             <NumberButton onClick={this.handleClick} number={this.numbers[3]}/>
             <NumberButton onClick={this.handleClick} number={this.numbers[4]}/>
             <NumberButton onClick={this.handleClick} number={this.numbers[5]}/>
             <NumberButton onClick={this.handleClick} number={this.numbers[11]}/>
             <NumberButton onClick={this.handleClick} number={this.numbers[0]}/>
             <NumberButton onClick={this.handleClick} number={this.numbers[1]}/>
             <NumberButton onClick={this.handleClick} number={this.numbers[2]}/>
             <NumberButton onClick={this.handleClick} number={this.numbers[12]}/>
             <ActionButton onClick={this.handleClick} action={this.action[0]}/>
             <NumberButton onClick={this.handleClick} number={this.numbers[13]}/>
           </div>
         </div>
     </div>
    );
  }
}

export default App;
