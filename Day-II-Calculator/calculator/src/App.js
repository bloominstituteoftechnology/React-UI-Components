import React from 'react';
import './App.css';
import Keypad from './components/KeypadComponents/Keypad';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

class App extends React.Component {
  
  constructor(){
    super()
    this.state = {value: []}
  }
 render() {
  return (
    
    <div className='calculator'>
      <div><CalculatorDisplay initialValue="0"/></div>
<Keypad />
    </div>
  );
};
}
export default App;
