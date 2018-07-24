import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';


class App extends React.Component{
    constructor(props){
      super(props);
      console.log(this.props);
      this.state={
        total: 0
      };
    }
    clearDisplay(){
      this.setState(() => ({total:'0'}));
    }
    render(){
      return (
        <div className='container'>
          <div><CalculatorDisplay /></div>
          <div>
            <ActionButton text='clear' buttonStyle='threeQtr' />
            <NumberButton buttonStyle="fas fa-divide" />
          </div>
          <div>
            <NumberButton text='7' />
            <NumberButton text='8' />
            <NumberButton text='9' />
            <NumberButton buttonStyle="fas fa-times" />
          </div>
          <div>
            <NumberButton text='4' />
            <NumberButton text='5' />
            <NumberButton text='6' />
            <NumberButton buttonStyle="fas fa-minus" />
          </div>
          <div>
            <NumberButton text='1' />
            <NumberButton text='2' />
            <NumberButton text='3' />
            <NumberButton buttonStyle="fas fa-plus" />
          </div>
          <div>
            <ActionButton text='0' buttonStyle='threeQtr' />
            <NumberButton buttonStyle="fas fa-equals" />
          </div>
        </div>
        );
    }
  }

  // const App = () => {
  // return (
  //   <div className='container'>
  //     <div><CalculatorDisplay /></div>
  //     <div>
  //       <ActionButton text='clear' buttonStyle='threeQtr' />
  //       <NumberButton buttonStyle="fas fa-divide" />
  //     </div>
  //     <div>
  //       <NumberButton text='7' />
  //       <NumberButton text='8' />
  //       <NumberButton text='9' />
  //       <NumberButton buttonStyle="fas fa-times" />
  //     </div>
  //     <div>
  //       <NumberButton text='4' />
  //       <NumberButton text='5' />
  //       <NumberButton text='6' />
  //       <NumberButton buttonStyle="fas fa-minus" />
  //     </div>
  //     <div>
  //       <NumberButton text='1' />
  //       <NumberButton text='2' />
  //       <NumberButton text='3' />
  //       <NumberButton buttonStyle="fas fa-plus" />
  //     </div>
  //     <div>
  //       <ActionButton text='0' buttonStyle='threeQtr' />
  //       <NumberButton buttonStyle="fas fa-equals" />
  //     </div>
  //   </div>
  //   );
  // };


export default App;
