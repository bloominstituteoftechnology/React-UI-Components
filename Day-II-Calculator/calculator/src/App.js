import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      total: 6,
      currentValue: 0,
      action: null,
    }
   this.clickHandler = this.clickHandler.bind(this);
   this.addValue = this.addValue.bind(this);
  }

  clickHandler = () => {
    this.setState({
      total: this.state.total +1
    });
    console.log(this.state.total);
  };

  addValue = () => {
    this.setState({
      currentValue: this.state.currentValue + 1
    });
    console.log(this.state.value);
  }

  render () {
    return (
    <div>
<CalculatorDisplay  placeholder="0" onClick={this.clickHandler}/>
<NumberButton onChange={this.addValue}/>
<ActionButton />

    </div>
  );
};
}

export default App;
