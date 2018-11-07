import React from 'react';
import './App.css';
import NumberPad from './components/ButtonComponents/NumberPad';
import Display from './components/DisplayComponents/CalculatorDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayContent: 3 };
  }
  
  changeDisplay = (event) => {
    if (event.target.className === 'number') {
      (this.state.displayContent < 1) ? this.setState({displayContent: event.target.textContent}) : this.setState({ displayContent: this.state.displayContent + event.target.textContent }); 
    }
    if (event.target.className === 'action') {
      this.setState({ displayContent: 0 });
    }
    
  }

  clearDisplay = (event) => {
    console.log(event.target);
    this.setState({ displayContent: ''});
  }

  render() {
    return (
      <div className='calculator'>
        <Display displayContent={this.state.displayContent} />
        <NumberPad onClick={this.changeDisplay} />
      </div>
    )
  }

}
export default App;
