import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      totalNum: '',
      total: 0
    }
  }

  clickHandler = () => {
    console.log(' props clicked: ');

    // const newTotal = this.state.total;
    // const tot = { newNum: this.state.totalNum }
    // newTotal.push(tot);
    // this.setState({ total: newTotal, totalNum: '' })
  }

  render() {
    return (
      <div>
        <h3>Welcome to React Calculator</h3>
        <div className='wrapper'>
          <div>
            <CalculatorDisplay customStyle='blackBack' text={this.state.total} />
          </div>
          <div>
            <ActionButton customStyle='longB' text='clear' />
            <NumberButton customStyle='redBack' text='/' />
          </div>
          <div>
            <NumberButton customStyle='whiteBack' text='7' onClick={this.clickHandler} />
            <NumberButton customStyle='whiteBack' text='8' onClick={this.clickHandler} />
            <NumberButton customStyle='whiteBack' text='9' onClick={this.clickHandler} />
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
