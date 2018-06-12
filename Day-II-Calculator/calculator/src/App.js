import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import InsertButton from './components/ButtonComponents/InsertButton';
import ClearButton from './components/ButtonComponents/ClearButton';
import EqualsButton from './components/ButtonComponents/EqualsButton';
const App = () => {
  return (

    // Calculator Container uses CSS grids
    <div className = "calculator-container">
      {/* Row 1 */}
      <CalculatorDisplay />

      {/* Row 2 */}
      <ClearButton />
      <InsertButton symbol = "&#247;" class = "btn--red"/>

      {/* Row 3 */}
      <InsertButton symbol = "7"/>
      <InsertButton symbol = "8"/>
      <InsertButton symbol = "9"/>
      <InsertButton symbol = "x" class = "btn--red"/>

      {/* Row 4 */}
      <InsertButton symbol = "4"/>
      <InsertButton symbol = "5"/>
      <InsertButton symbol = "6"/>
      <InsertButton symbol = "&#8212;" class = "btn--red"/>

      {/* Row 5 */}
      <InsertButton symbol = "1"/>
      <InsertButton symbol = "2"/>
      <InsertButton symbol = "3"/>
      <InsertButton symbol = "&#43;" class = "btn--red"/>

      {/* Row 6 */}
      <InsertButton symbol = "0" class = "btn--white btn__zero" />
      <EqualsButton class = "btn--red"/>
    </div>
  );
};

export default App;
