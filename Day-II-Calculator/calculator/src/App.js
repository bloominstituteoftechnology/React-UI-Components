import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: '0'
    };
  }

  clickNumberSeven = () => {
    let numberSeven = '7';
    this.setState({total: numberSeven});
  };

  render() {
    return (
      <div className='wrapper'>
        <CalculatorDisplay total={this.state.total}/>

        <div className="container">
          <ActionButton customButton="wide-button" text="clear" />
          <NumberButton customButton="op-button" text="&#247;" /> {/* ÷ */}
        </div>

        <div className="container">
          <NumberButton text="7" onClick={this.clickNumberSeven}/>
          <NumberButton text="8"/>
          <NumberButton text="9"/>
          <NumberButton customButton="op-button" text="&#215;" /> {/* x */}
        </div>

        <div className="container">
          <NumberButton text="4"/>
          <NumberButton text="5"/>
          <NumberButton text="6"/>
          <NumberButton customButton="op-button" text="&#8722;" /> {/* - */}
        </div>

        <div className="container">
          <NumberButton text="1"/>
          <NumberButton text="2"/>
          <NumberButton text="3"/>
          <NumberButton customButton="op-button" text="&#43;" /> {/* + */}
        </div>

        <div className="container">
          <ActionButton customButton={`wide-button bold`} text="0" />
          <NumberButton customButton="op-button" text="=" />
        </div>
      </div>

    );
  }
}

export default App;
