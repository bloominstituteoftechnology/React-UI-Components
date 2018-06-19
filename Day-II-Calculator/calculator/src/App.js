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

  clickHandler() {
    this.setState({
      total: this.state.total +1
    });
  };

  addValue(){
    this.setState({
      currentValue: this.state.currentValue + 1
    });
    console.log(this.state.currentValue);
  }

  render () {
    return (
    <div>
<CalculatorDisplay  onClick={this.clickHandler}/>
<NumberButton onClick={this.addValue}/>
<ActionButton />

    </div>
  );
};
}

export default App;
