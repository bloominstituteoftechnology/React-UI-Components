import React from 'react';
import './App.css';
import NumberPad from './components/ButtonComponents/NumberPad';
import Display from './components/DisplayComponents/CalculatorDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayContent: 0 };
    this.element = React.createRef();
  }

  componentDidMount() {
    this.element.current.addEventListener('click', this)
  }

  handleEvent(event) {
    event.target.className === 'number' && this.updateDisplay(event.target.textContent)
    event.target.className === 'action' && this.clearDisplay()
  }

  updateDisplay(value) {
    this.setState(prevState => {
      prevState.displayContent === 0 ? prevState.displayContent = value : prevState.displayContent += value;
      return prevState
    })
  }

  clearDisplay() {
    this.setState(prevState => {
      prevState.displayContent = 0;
      return prevState;
    })
  }

  
  // changeDisplay = (event) => {
  //   if (event.target.className === 'number') {
  //     (this.state.displayContent < 1) ? this.setState({displayContent: event.target.textContent}) : this.setState({ displayContent: this.state.displayContent + event.target.textContent }); 
  //   }
  //   if (event.target.className === 'action') {
  //     this.setState({ displayContent: 0 });
  //   } 
  // }

  render() {
    return (
      <div ref={this.element} className='calculator'>
        <Display displayContent={this.state.displayContent} />
        <NumberPad  />
      </div>
    )
  }

}
export default App;
