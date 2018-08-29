import React from 'react';
import CalculatorContainer from './components/DisplayComponents/CalculatorContainer';
import NumberButton from './components/ButtonComponents/NumberButton';




import './App.css';


const App = () => {
  return (
    <div>
      <CalculatorContainer />
      <NumberButton />

      </div>
  );
}
function Number() {
  return (
     <div className="Number">
      <NumberButton number={ 1 } />
      <NumberButton number={ 2 } />
      <NumberButton number={ 3 } />
      <NumberButton number={ 4 } />
      <NumberButton number={ 5 } />
      <NumberButton number={ 6 } />
      <NumberButton number={ 7 } />
      <NumberButton number={ 8 } />
      <NumberButton number={ 9 } />
     </div>
  );
}


export default App;
