import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import ActionButton from './components/ButtonComponents/ActionButton';

import NumberButton from './components/ButtonComponents/NumberButton';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      total: 0
    }
  }
  render(){
    return (
      <div className="calculator-container">
        <CalculatorDisplay total={this.state.total}/>
        <ButtonContainer>
            <ActionButton className="three-quarter" text="clear" />
            <NumberButton bgColor="red-background" text="&divide;" />
        </ButtonContainer>
        <ButtonContainer >
          <NumberButton bgColor="white-background" text="7" />
          <NumberButton bgColor="white-background" text="8" />
          <NumberButton bgColor="white-background" text="9" />
          <NumberButton bgColor="red-background" text="X" />
        </ButtonContainer>
        <ButtonContainer >
          <NumberButton bgColor="white-background" text="4" />
          <NumberButton bgColor="white-background" text="5" />
          <NumberButton bgColor="white-background" text="6" />
          <NumberButton bgColor="red-background" text="-" />
        </ButtonContainer>
        <ButtonContainer >
          <NumberButton bgColor="white-background" text="1" />
          <NumberButton bgColor="white-background" text="2" />
          <NumberButton bgColor="white-background" text="3" />
          <NumberButton bgColor="red-background" text="+" />
        </ButtonContainer>
        <ButtonContainer>
            <ActionButton className="three-quarter" text="0" />
            <NumberButton bgColor="red-background" text="=" />
        </ButtonContainer>


      </div>
    )
  }
};

export default App;
