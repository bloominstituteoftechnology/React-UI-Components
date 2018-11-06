import React, { Component } from 'react'
import './CalculatorContainer.css';
import Display from '../DisplayComponents/CalculatorDisplay';
import ButtonContainer from "../ButtonComponents/ButtonContainer";
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';

// const Calculator = props => {
//   return (
//     <div className="calculator">
//       <Display />
//       <ButtonContainer containerStyle="btnContainer">
//         <ButtonContainer containerStyle="numberSide">
//           <ActionButton buttonStyle="wide numberBtn narrow" text="clear"/>
//           <NumberButton buttonStyle="numberBtn" text="7"/>
//           <NumberButton buttonStyle="numberBtn" text="8"/>
//           <NumberButton buttonStyle="numberBtn" text="9"/>
//           <NumberButton buttonStyle="numberBtn" text="4"/>
//           <NumberButton buttonStyle="numberBtn" text="5"/>
//           <NumberButton buttonStyle="numberBtn" text="6"/>
//           <NumberButton buttonStyle="numberBtn" text="1"/>
//           <NumberButton buttonStyle="numberBtn" text="2"/>
//           <NumberButton buttonStyle="numberBtn" text="3"/>
//           <ActionButton buttonStyle="wide numberBtn" text="0"/>
//         </ButtonContainer>
//         <ButtonContainer containerStyle="operationsSide">
//           <NumberButton buttonStyle="numberBtn bgRed" text="/"/>
//           <NumberButton buttonStyle="numberBtn bgRed" text="*"/>
//           <NumberButton buttonStyle="numberBtn bgRed" text="-"/>
//           <NumberButton buttonStyle="numberBtn bgRed" text="+"/>
//           <NumberButton buttonStyle="numberBtn bgRed" text="="/>
//         </ButtonContainer>
//       </ButtonContainer>
//     </div>
//   )
// }

class Calculator extends Component {
  state = {
    calcDisplay: '0',
  }

  handleInputChange = event => {
    this.setState({
      calcDisplay: event.target.value
    })
  }

  render() {
    // if(this.state.calcDisplay !== '') {
    //   this.state.calcDisplay = 
    // }


    return (
      <div className="calculator">
        <Display handleInputChange={this.handleInputChange} calcDisplay={this.state.calcDisplay}/>
        <ButtonContainer containerStyle="btnContainer">
          <ButtonContainer containerStyle="numberSide">
            <ActionButton buttonStyle="wide numberBtn narrow" text="clear"/>
            <NumberButton buttonStyle="numberBtn" text="7"/>
            <NumberButton buttonStyle="numberBtn" text="8"/>
            <NumberButton buttonStyle="numberBtn" text="9"/>
            <NumberButton buttonStyle="numberBtn" text="4"/>
            <NumberButton buttonStyle="numberBtn" text="5"/>
            <NumberButton buttonStyle="numberBtn" text="6"/>
            <NumberButton buttonStyle="numberBtn" text="1"/>
            <NumberButton buttonStyle="numberBtn" text="2"/>
            <NumberButton buttonStyle="numberBtn" text="3"/>
            <ActionButton buttonStyle="wide numberBtn" text="0"/>
          </ButtonContainer>
          <ButtonContainer containerStyle="operationsSide">
            <NumberButton buttonStyle="numberBtn bgRed" text="/"/>
            <NumberButton buttonStyle="numberBtn bgRed" text="*"/>
            <NumberButton buttonStyle="numberBtn bgRed" text="-"/>
            <NumberButton buttonStyle="numberBtn bgRed" text="+"/>
            <NumberButton buttonStyle="numberBtn bgRed" text="="/>
          </ButtonContainer>
        </ButtonContainer>
      </div>
    )
  }
}

export default Calculator;