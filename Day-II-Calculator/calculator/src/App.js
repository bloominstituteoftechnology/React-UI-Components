import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButtonSmall from './components/ButtonComponents/NumberButton';
import NumberButtonLarge from './components/ButtonComponents/NumberButtonLarge';
import ActionButton from './components/ButtonComponents/ActionButton';

// const App = () => {
//   return (
//     <div className="calculator-layout">
//       <CalculatorDisplay text="0"/>
//       <NumberButtonLarge text="clear" /><ActionButton text="&divide;" />
//       <NumberButtonSmall text="7" /><NumberButtonSmall text="8" /><NumberButtonSmall text="9" /><ActionButton text="x" />
//       <NumberButtonSmall text="4" /><NumberButtonSmall text="5" /><NumberButtonSmall text="6" /><ActionButton text="-" />
//       <NumberButtonSmall text="1" /><NumberButtonSmall text="2" /><NumberButtonSmall text="3" /><ActionButton text="+" />
//       <NumberButtonLarge text="0" /><ActionButton text="=" />
//     </div>
//   );
// };

class App extends React.Component {
  constructor() {
    super();
    this.state = {total:0, num1:0, num1Arr:[], operator:0, isOperatorSelected:false, num2:0, num2Arr:[]};
  }

  clearClickHandler() {
    this.setState({total:0, num1:0, num1Arr:[], num2:0, num2Arr:[], isOperatorSelected:false});
  }

  zeroClickHandler() {
    if (!this.state.isOperatorSelected) {
      this.state.num1Arr.push(0);
      this.setState({num1:this.state.num1Arr.join(''), total:this.state.num1Arr.join('')});
    } else {
      this.state.num2Arr.push(0);
      this.setState({num2:this.state.num2Arr.join(''), total:this.state.num2Arr.join('')});
    }
  }

  oneClickHandler() {
    if (!this.state.isOperatorSelected) {
      this.state.num1Arr.push(1);
      this.setState({num1:this.state.num1Arr.join(''), total:this.state.num1Arr.join('')});
    } else {
      this.state.num2Arr.push(1);
      this.setState({num2:this.state.num2Arr.join(''), total:this.state.num2Arr.join('')});
    }
  }

  twoClickHandler() {
    if (!this.state.isOperatorSelected) {
      this.state.num1Arr.push(2);
      this.setState({num1:this.state.num1Arr.join(''), total:this.state.num1Arr.join('')});
    } else {
      this.state.num2Arr.push(2);
      this.setState({num2:this.state.num2Arr.join(''), total:this.state.num2Arr.join('')});
    }
  }

  threeClickHandler() {
    if (!this.state.isOperatorSelected) {
      this.state.num1Arr.push(3);
      this.setState({num1:this.state.num1Arr.join(''), total:this.state.num1Arr.join('')});
    } else {
      this.state.num2Arr.push(3);
      this.setState({num2:this.state.num2Arr.join(''), total:this.state.num2Arr.join('')});
    }
  }

  fourClickHandler() {
    if (!this.state.isOperatorSelected) {
      this.state.num1Arr.push(4);
      this.setState({num1:this.state.num1Arr.join(''), total:this.state.num1Arr.join('')});
    } else {
      this.state.num2Arr.push(4);
      this.setState({num2:this.state.num2Arr.join(''), total:this.state.num2Arr.join('')});
    }
  }

  fiveClickHandler() {
    if (!this.state.isOperatorSelected) {
      this.state.num1Arr.push(5);
      this.setState({num1:this.state.num1Arr.join(''), total:this.state.num1Arr.join('')});
    } else {
      this.state.num2Arr.push(5);
      this.setState({num2:this.state.num2Arr.join(''), total:this.state.num2Arr.join('')});
    }
  }

  sixClickHandler() {
    if (!this.state.isOperatorSelected) {
      this.state.num1Arr.push(6);
      this.setState({num1:this.state.num1Arr.join(''), total:this.state.num1Arr.join('')});
    } else {
      this.state.num2Arr.push(6);
      this.setState({num2:this.state.num2Arr.join(''), total:this.state.num2Arr.join('')});
    }
  }

  sevenClickHandler() {
    if (!this.state.isOperatorSelected) {
      this.state.num1Arr.push(7);
      this.setState({num1:this.state.num1Arr.join(''), total:this.state.num1Arr.join('')});
    } else {
      this.state.num2Arr.push(7);
      this.setState({num2:this.state.num2Arr.join(''), total:this.state.num2Arr.join('')});
    }
  }

  eightClickHandler() {
    if (!this.state.isOperatorSelected) {
      this.state.num1Arr.push(8);
      this.setState({num1:this.state.num1Arr.join(''), total:this.state.num1Arr.join('')});
    } else {
      this.state.num2Arr.push(8);
      this.setState({num2:this.state.num2Arr.join(''), total:this.state.num2Arr.join('')});
    }
  }

  nineClickHandler() {
    if (!this.state.isOperatorSelected) {
      this.state.num1Arr.push(9);
      this.setState({num1:this.state.num1Arr.join(''), total:this.state.num1Arr.join('')});
    } else {
      this.state.num2Arr.push(9);
      this.setState({num2:this.state.num2Arr.join(''), total:this.state.num2Arr.join('')});
    }
  }

  plusClickHandler() {
    this.setState({operator:0, isOperatorSelected:true, total:"+"});
    let plusDiv = document.querySelector(".plus");
    plusDiv.style.backgroundColor = "white";
    plusDiv.style.color = "darkred";
  }

  minusClickHandler() {
    this.setState({operator:1, isOperatorSelected:true, total:"-"});
    let minusDiv = document.querySelector(".minus");
    minusDiv.style.backgroundColor = "white";
    minusDiv.style.color = "darkred";
  }

  multiplyClickHandler() {
    this.setState({operator:2, isOperatorSelected:true, total:"x"});
    let multiplyDiv = document.querySelector(".multiply");
    multiplyDiv.style.backgroundColor = "white";
    multiplyDiv.style.color = "darkred";
  }

  divideClickHandler() {
    this.setState({operator:3, isOperatorSelected:true, total:String.fromCharCode("0x00F7")});
    let divideDiv = document.querySelector(".divide");
    divideDiv.style.backgroundColor = "white";
    divideDiv.style.color = "darkred";
  }

  equalsClickHandler() {
    if (this.state.operator === 0) {
      this.setState({total: parseInt(this.state.num1) + parseInt(this.state.num2)});
    } else if (this.state.operator === 1) {
      this.setState({total: parseInt(this.state.num1) - parseInt(this.state.num2)});
    } else if (this.state.operator === 2) {
      this.setState({total: parseInt(this.state.num1) * parseInt(this.state.num2)});
    } else {
      this.setState({total: parseInt(this.state.num1) / parseInt(this.state.num2)});
    }
    this.setState({num1:0, num1Arr:[], num2:0, num2Arr:[], isOperatorSelected:false});

    let plusDiv = document.querySelector(".plus");
    plusDiv.style.backgroundColor = "darkred";
    plusDiv.style.color = "white";
    let minusDiv = document.querySelector(".minus");
    minusDiv.style.backgroundColor = "darkred";
    minusDiv.style.color = "white";
    let multiplyDiv = document.querySelector(".multiply");
    multiplyDiv.style.backgroundColor = "darkred";
    multiplyDiv.style.color = "white";
    let divideDiv = document.querySelector(".divide");
    divideDiv.style.backgroundColor = "darkred";
    divideDiv.style.color = "white";
  }

  render() {
    return (<div className="calculator-layout">
    <CalculatorDisplay text={this.state.total} />
    <div onClick={this.clearClickHandler.bind(this)}><NumberButtonLarge text="clear" /></div><div onClick={this.divideClickHandler.bind(this)}><ActionButton text="&divide;" name="divide" /></div>
    <div onClick={this.sevenClickHandler.bind(this)}><NumberButtonSmall text="7" /></div><div onClick={this.eightClickHandler.bind(this)}><NumberButtonSmall text="8" /></div><div onClick={this.nineClickHandler.bind(this)}><NumberButtonSmall text="9" /></div><div onClick={this.multiplyClickHandler.bind(this)}><ActionButton text="x" name="multiply" /></div>
    <div onClick={this.fourClickHandler.bind(this)}><NumberButtonSmall text="4" /></div><div onClick={this.fiveClickHandler.bind(this)}><NumberButtonSmall text="5" /></div><div onClick={this.sixClickHandler.bind(this)}><NumberButtonSmall text="6" /></div><div onClick={this.minusClickHandler.bind(this)}><ActionButton text="-" name="minus" /></div>
    <div onClick={this.oneClickHandler.bind(this)}><NumberButtonSmall text="1" /></div><div onClick={this.twoClickHandler.bind(this)}><NumberButtonSmall text="2" /></div><div onClick={this.threeClickHandler.bind(this)}><NumberButtonSmall text="3" /></div><div onClick={this.plusClickHandler.bind(this)}><ActionButton text="+" name="plus" /></div>
    <div onClick={this.zeroClickHandler.bind(this)}><NumberButtonLarge text="0" /></div><div onClick={this.equalsClickHandler.bind(this)}><ActionButton text="=" name="equals" /></div>
    </div>)
  }
}




export default App;
// return displayCalculator();

// export default App;
