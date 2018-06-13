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

  clickHandler = (num) => {
    console.log(' props clicked: ');
const { total } = this.state
    // const newTotal = this.state.total;
    // const tot = { newNum: this.state.totalNum }
    // newTotal.push(tot);
    this.setState({ total: String(num) })
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
            <NumberButton customStyle='whiteBack' text='7' onClickCust={()=>this.clickHandler(7)} />
            <NumberButton customStyle='whiteBack' text='8' onClickCust={()=>this.clickHandler(8)} />
            <NumberButton customStyle='whiteBack' text='9' onClickCust={()=> this.clickHandler(9)} />
            <NumberButton customStyle='redBack' text='X' />
          </div>
          <div>
            <NumberButton customStyle='whiteBack' text='4' onClickCust={()=>this.clickHandler(4)} />
            <NumberButton customStyle='whiteBack' text='5' onClickCust={()=>this.clickHandler(5)} />
            <NumberButton customStyle='whiteBack' text='6' onClickCust={()=>this.clickHandler(6)} />
            <NumberButton customStyle='redBack' text='-' />
          </div>
          <div>
            <NumberButton customStyle='whiteBack' text='1' onClickCust={()=>this.clickHandler(1)} />
            <NumberButton customStyle='whiteBack' text='2' onClickCust={()=>this.clickHandler(2)} />
            <NumberButton customStyle='whiteBack' text='3' onClickCust={()=>this.clickHandler(3)} />
            <NumberButton customStyle='redBack' text='+' />
          </div>
          <div>
            <NumberButton customStyle='longB' text='0' onClickCust={()=>this.clickHandler(0)} />
            <NumberButton customStyle='redBack' text='=' />
          </div>
        </div>
      </div>
    );
  };

}

export default App;
