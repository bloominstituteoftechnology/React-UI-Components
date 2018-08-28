import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

class App extends React.Component {
  // let number
  constructor(props){
    super(props);
    this.state ={
      total: 0
    };

  }
  handleClickButton = (e) => {
    let number = this.state.total;
    if(e.target.outerText ==='clear'){
      this.setState({
        total: 0
      })
    }else{
      this.setState({
        total: Number(e.target.outerText) + number
      })
    }

  };

  render() {
    return (
      <div className='app'>
        <CalculatorDisplay number={this.state.total} background='btn__xlong'/>
        <ActionButton number='clear' onClick={this.handleClickButton} background='btn__long'/>
        <NumberButton number='%' onClick={this.handleClickButton} background='btn__red'/>
        <NumberButton number={9} onClick={this.handleClickButton}/>
        <NumberButton number={8} onClick={this.handleClickButton}/>
        <NumberButton number={7} onClick={this.handleClickButton}/>
        <NumberButton number='X' onClick={this.handleClickButton} background='btn__red'/>
        <NumberButton number='6' onClick={this.handleClickButton}/>
        <NumberButton number='5' onClick={this.handleClickButton}/>
        <NumberButton number='4' onClick={this.handleClickButton}/>
        <NumberButton number='-' onClick={this.handleClickButton} background='btn__red'/>        
        <NumberButton number='3' onClick={this.handleClickButton}/>
        <NumberButton number='2' onClick={this.handleClickButton}/>
        <NumberButton number='1' onClick={this.handleClickButton}/>
        <NumberButton number='+' onClick={this.handleClickButton} background='btn__red'/>
        <ActionButton number='0' onClick={this.handleClickButton} background='btn__long'/>
        <NumberButton number='=' onClick={this.handleClickButton} background='btn__red'/>
    </div>
    );
    
  }
    
};

export default App;