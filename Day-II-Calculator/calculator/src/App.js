import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
// import CalculatorContainer from './components/CalculatorContainer/CalculatorContainer.js';
import SquareButton from './components/ButtonComponents/SquareButton.js';
import RectangleButton from './components/ButtonComponents/RectangleButton.js';

// const App = () => {
//   return (
//     <div className='calc-container'>
//       <CalculatorDisplay />

//       <div className='num-buttons-container'>
//         <RectangleButton buttonStyle='rec-button' text='clear'/>
//         <SquareButton buttonStyle='num-button' text='7' />
//         <SquareButton buttonStyle='num-button' text='8' />
//         <SquareButton buttonStyle='num-button' text='9' />
//         <SquareButton buttonStyle='num-button' text='4' />
//         <SquareButton buttonStyle='num-button' text='5' />
//         <SquareButton buttonStyle='num-button' text='6' />
//         <SquareButton buttonStyle='num-button' text='1' />
//         <SquareButton buttonStyle='num-button' text='2' />
//         <SquareButton buttonStyle='num-button' text='3' />
//         <SquareButton buttonStyle='rec-button' text='0' />
//       </div>
//       <div className='op-buttons-container'>
//         <SquareButton buttonStyle='op-button' text='&#247;' />
//         <SquareButton buttonStyle='op-button' text='&#10005;' />
//         <SquareButton buttonStyle='op-button' text='–' />
//         <SquareButton buttonStyle='op-button' text='+' />
//         <SquareButton buttonStyle='op-button' text='=' />
//       </div>
//     </div>
    
//   );
// };

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      problem: '',
      solution: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
  
    return (

      <div className='calc-container'>

        <CalculatorDisplay problem={this.state.problem} solution={this.state.solution}/>

        <div className='num-buttons-container'>
          <RectangleButton  text='clear' handleClick={this.handleClick}/>
          <SquareButton buttonStyle='num-button' text='7' handleClick={this.handleClick}/>
          <SquareButton buttonStyle='num-button' text='8' handleClick={this.handleClick}/>
          <SquareButton buttonStyle='num-button' text='9' handleClick={this.handleClick}/>
          <SquareButton buttonStyle='num-button' text='4' handleClick={this.handleClick}/>
          <SquareButton buttonStyle='num-button' text='5' handleClick={this.handleClick}/>
          <SquareButton buttonStyle='num-button' text='6' handleClick={this.handleClick}/>
          <SquareButton buttonStyle='num-button' text='1' handleClick={this.handleClick}/>
          <SquareButton buttonStyle='num-button' text='2' handleClick={this.handleClick}/>
          <SquareButton buttonStyle='num-button' text='3' handleClick={this.handleClick}/>
          <RectangleButton  text='0' handleClick={this.handleClick}/>
        </div>

        <div className='op-buttons-container'>
          <SquareButton buttonStyle='op-button' text='/' handleClick={this.handleClick}/>
          <SquareButton buttonStyle='op-button' text='*' handleClick={this.handleClick}/>
          <SquareButton buttonStyle='op-button' text='-' handleClick={this.handleClick}/>
          <SquareButton buttonStyle='op-button' text='+' handleClick={this.handleClick}/>
          <SquareButton buttonStyle='op-button' text='=' handleClick={this.handleClick}/>
        </div>

      </div>
    ); // End of return()
  } // End of render()

  handleClick(event) {
    console.log('click');

    const value = event.target.value;
    console.log(value);

    switch (value) {  //gets value from the element that triggered the event
  
      case '=': {
        const solution = eval(this.state.problem).toString();
        this.setState({ problem: this.state.problem += value});
        this.setState({solution});
        console.log(solution);
        break;
      }
  
      case 'clear': {
        this.setState({ problem: '', solution: ''});
        break;
      }
  
      default: {
        this.setState({ problem: this.state.problem += value});
        console.log(this.state.problem);
        break;
      }
    }
  }
} // End of App class



export default App;
