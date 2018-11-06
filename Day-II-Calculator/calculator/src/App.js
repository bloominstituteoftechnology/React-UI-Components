import React from 'react';
import './App.css';

import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      current: 0
    }
  }

  handleClick(event){
    console.log(event);
  }

  render () {
    return (
      <div className='app'>
        <CalculatorDisplay text = '0' />
        <ButtonContainer total = {this.state}/>
      </div>
    );
  }
}

export default App;
