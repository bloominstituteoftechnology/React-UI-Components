import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0
    }
  }

  render() {
    return (
      <div>
        <h3>Welcome to React Calculator</h3>
        <div className='wrapper'>
          <div>
            <CalculatorDisplay customStyle='blackBack' text='0' />

          </div>
          <ActionButton customStyle='longB' text='clear' />

          <NumberButton customStyle='redBack' text='/' />

          <div>
            <NumberButton customStyle='whiteBack' text='7' />
            <NumberButton customStyle='whiteBack' text='8' />
            <NumberButton customStyle='whiteBack' text='9' />
            <NumberButton customStyle='redBack' text='X' />
          </div>
          <div>
            <NumberButton customStyle='whiteBack' text='4' />
            <NumberButton customStyle='whiteBack' text='5' />
            <NumberButton customStyle='whiteBack' text='6' />
            <NumberButton customStyle='redBack' text='-' />
          </div>
          <div>
            <NumberButton customStyle='whiteBack' text='1' />
            <NumberButton customStyle='whiteBack' text='2' />
            <NumberButton customStyle='whiteBack' text='3' />
            <NumberButton customStyle='redBack' text='+' />
          </div>
          <div>
            <ActionButton customStyle='longB' text='0' />
            <NumberButton customStyle='redBack' text='=' />
          </div>

        </div>
      </div>
    );
  };

}

export default App;
