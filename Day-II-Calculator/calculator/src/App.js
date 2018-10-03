import React from 'react';
import './App.css';
import NumberButtons from './index';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButtons from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';


const rowTopButtons = {
  action: "clear",
  number: "none",
  symbol: "÷",
}

const rowBottomButtons = {
  action: "0",
  number: "none",
  symbol: "=",
}
  
const rowThree = {
  firstNum: "7",
  secondNum: "8",
  thirdNum: "9",
  symbol: "x",
}

const rowFour = {
  firstNum: "4",
  secondNum: "5",
  thirdNum: "6",
  symbol: "-",
}

const rowFive = {
  firstNum: "1",
  secondNum: "2",
  thirdNum: "3",
  symbol: "+",
}

  

class App extends React.Component {

    state = {
      total: "7",
    };

    Clear = () => {
      console.log(this.state);
      if (this.state.total > 0) {
        this.setState({
          total: 0,
        });
      }
    };

  render() {

    return(
      <div className = "calc-box">
      <div className = "calc-cont">
        <CalculatorDisplay state={this.state} />
        <ActionButtons symbol ={rowTopButtons} />
        <NumberButton symbol={rowThree} />
        <NumberButton symbol={rowFour} />
        <NumberButton symbol={rowFive} />
        <ActionButtons symbol ={rowBottomButtons} />
      </div>
    </div>
    );
  }

}

// const App = () => {
//   return (
//     <div className = "calc-box">
//       <div className = "calc-cont">
//         <CalculatorDisplay />
//         <ActionButtons symbol ={rowTopButtons} />
//         <NumberButton symbol={rowThree} />
//         <NumberButton symbol={rowFour} />
//         <NumberButton symbol={rowFive} />
//         <ActionButtons symbol ={rowBottomButtons} />
//       </div>
//     </div>
//   );
// };

export default App;


        // <div className = "button-house">
        //   <ActionButtons />
        //   <NumberButton />  
        // </div>
        // <div className = "button-house">
        //   <NumberButton />
        //   <NumberButton />
        //   <NumberButton />
        //   <NumberButton />
        // </div>
        // <div className = "button-house">
        //   <NumberButton />
        //   <NumberButton />
        //   <NumberButton />
        //   <NumberButton />
        // </div>
        // <div className = "button-house">
        //   <NumberButton />
        //   <NumberButton />
        //   <NumberButton />
        //   <NumberButton />
        // </div>
        // <div className = "button-house">
        //   <ActionButtons />
        //   <NumberButton />  
        // </div>