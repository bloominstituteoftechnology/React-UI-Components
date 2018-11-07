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
    console.log(event.target.classList);
    if (event.target.className === 'number') {
      console.log(this);
      this.setState({ displayContent: this.state.displayContent + event.target.textContent }); 
    }
    if (event.target.className === 'action') {
      console.log(this);
      this.setState({ displayContent: null });
    }
    
  }

  clearDisplay = (event) => {
    console.log(event.target);
    this.setState({ displayContent: 0});
  }

  render() {
    return (
      <div className='calculator'>
        <Display displayContent={this.state.displayContent} />
        <NumberPad onClick={this.changeDisplay} click={this.clearDisplay}/>
      </div>
    )
  }

}
export default App;
