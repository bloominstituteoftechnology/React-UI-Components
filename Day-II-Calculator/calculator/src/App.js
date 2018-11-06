import React from 'react';
import './App.css';
import CalcButton from './components/ButtonComponents/CalcButton.js';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';


// const App = () => {
//   return (
//     <div className="calc-container">
//       <CalculatorDisplay content='0' />
//       <div className="button-container">
//             <CalcButton buttonStyle='long-btn' text='clear' />
//             <CalcButton buttonStyle='operator-btn' text='÷' />
//             <CalcButton buttonStyle='number-btn' text='7' />
//             <CalcButton buttonStyle='number-btn' text='8' />
//             <CalcButton buttonStyle='number-btn' text='9' />
//             <CalcButton buttonStyle='operator-btn' text='×' />
//             <CalcButton buttonStyle='number-btn' text='4' />
//             <CalcButton buttonStyle='number-btn' text='5' />
//             <CalcButton buttonStyle='number-btn' text='6' />
//             <CalcButton buttonStyle='operator-btn' text='-' />
//             <CalcButton buttonStyle='number-btn' text='1' />
//             <CalcButton buttonStyle='number-btn' text='2' />
//             <CalcButton buttonStyle='number-btn' text='3' />
//             <CalcButton buttonStyle='operator-btn' text='+' />
//             <CalcButton buttonStyle='long-btn' text='0' />
//             <CalcButton buttonStyle='operator-btn' text='=' />
//         </div>
//     </div>
//   );
// };

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {total: 0, operation: ''}
  }

  changeContent = (number) => {
    this.setState({total: number})
  }

  clear = () => {this.setState({total: 0, operation: ''})}

  setOperation = (operator) => {
    this.setState({operation: operator})
  }

  render() {
    return (
      <div className="calc-container">
        <CalculatorDisplay content={this.state.total} />
        <div className="button-container">
              <CalcButton buttonStyle='long-btn' text='clear' onClick={this.clear}/>
              <CalcButton buttonStyle='operator-btn' text='÷' onClick={()=>this.setOperation('div')} />
              <CalcButton buttonStyle='number-btn' text='7' onClick={()=>this.changeContent(7)} />
              <CalcButton buttonStyle='number-btn' text='8' onClick={()=>this.changeContent(8)} />
              <CalcButton buttonStyle='number-btn' text='9' onClick={()=>this.changeContent(9)} />
              <CalcButton buttonStyle='operator-btn' text='×' onClick={()=>this.setOperation('mult')}/>
              <CalcButton buttonStyle='number-btn' text='4' onClick={()=>this.changeContent(4)}/>
              <CalcButton buttonStyle='number-btn' text='5' onClick={()=>this.changeContent(5)}/>
              <CalcButton buttonStyle='number-btn' text='6' onClick={()=>this.changeContent(6)}/>
              <CalcButton buttonStyle='operator-btn' text='-' onClick={()=>this.setOperation('sub')}/>
              <CalcButton buttonStyle='number-btn' text='1' onClick={()=>this.changeContent(1)}/>
              <CalcButton buttonStyle='number-btn' text='2' onClick={()=>this.changeContent(2)}/>
              <CalcButton buttonStyle='number-btn' text='3' onClick={()=>this.changeContent(3)}/>
              <CalcButton buttonStyle='operator-btn' text='+' onClick={()=>this.setOperation('add')}/>
              <CalcButton buttonStyle='long-btn' text='0' onClick={()=>this.changeContent(0)}/>
              <CalcButton buttonStyle='operator-btn' text='=' onClick={()=>this.setOperation('eval')}/>
          </div>
      </div>
    );
  }
}



export default App;
