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

  clickNumber(value) {
    let incrementor = this.state.total;
    if (this.state.total === '0') {
      incrementor = value;
      this.setState({total: incrementor});
    } else if (incrementor.length === 9) {
      this.setState({total: incrementor});
    } else {
      this.setState({total: incrementor + value});
    }
  };

  clear = () => {
    this.setState({total: '0'});
  }

  render() {
    return (
      <div className='wrapper'>
        <CalculatorDisplay total={this.state.total}/>

        <div className="container">
          <ActionButton customButton="wide-button" value="clear" clickDoer={this.clear} />
          <NumberButton customButton="op-button" value="&#247;" /> {/* ÷ */}
        </div>

        <div className="container">
          <NumberButton value="7" clickDoer={() => this.clickNumber("7")} />
          <NumberButton value="8" clickDoer={() => this.clickNumber("8")} />
          <NumberButton value="9" clickDoer={() => this.clickNumber("9")} />
          <NumberButton customButton="op-button" value="&#215;" /> {/* x */}
        </div>

        <div className="container">
          <NumberButton value="4" clickDoer={() => this.clickNumber("4")}/>
          <NumberButton value="5" clickDoer={() => this.clickNumber("5")}/>
          <NumberButton value="6" clickDoer={() => this.clickNumber("6")}/>
          <NumberButton customButton="op-button" value="&#8722;" /> {/* - */}
        </div>

        <div className="container">
          <NumberButton value="1" clickDoer={() => this.clickNumber("1")}/>
          <NumberButton value="2" clickDoer={() => this.clickNumber("2")}/>
          <NumberButton value="3" clickDoer={() => this.clickNumber("3")}/>
          <NumberButton customButton="op-button" value="&#43;" /> {/* + */}
        </div>

        <div className="container">
          <ActionButton customButton={`wide-button bold`} value="0" clickDoer={() => this.clickNumber("0")}/>
          <NumberButton customButton="op-button" value="=" />
        </div>
      </div>

    );
  }
}

export default App;
