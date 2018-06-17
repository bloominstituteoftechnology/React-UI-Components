import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import InsertButton from './components/ButtonComponents/InsertButton';
import ClearButton from './components/ButtonComponents/ClearButton';
import EqualsButton from './components/ButtonComponents/EqualsButton';
const App = () => {
  return (

    // Calculator Container uses CSS grids
      <div className="calculator-container">
      {/* Row 1 */}
        <CalculatorDisplay displayValue={this.state.displayInfo} />

      {/* Row 2 */}
        <ClearButton clearHandler={this.clearDisplay} />
        <InsertButton symbol="/" symbolHandler={this.insertSymbol} class="btn--red" />

      {/* Row 3 */}
        <InsertButton symbol="7" symbolHandler={this.insertSymbol} />
        <InsertButton symbol="8" symbolHandler={this.insertSymbol} />
        <InsertButton symbol="9" symbolHandler={this.insertSymbol} />
        <InsertButton symbol="x" symbolHandler={this.insertSymbol} class="btn--red" />

      {/* Row 4 */}
        <InsertButton symbol="4" symbolHandler={this.insertSymbol} />
        <InsertButton symbol="5" symbolHandler={this.insertSymbol} />
        <InsertButton symbol="6" symbolHandler={this.insertSymbol} />
        <InsertButton symbol="-" symbolHandler={this.insertSymbol} class="btn--red" />

      {/* Row 5 */}
        <InsertButton symbol="1" symbolHandler={this.insertSymbol} />
        <InsertButton symbol="2" symbolHandler={this.insertSymbol} />
        <InsertButton symbol="3" symbolHandler={this.insertSymbol} />
        <InsertButton symbol="+" symbolHandler={this.insertSymbol} class="btn--red" />

      {/* Row 6 */}
        <InsertButton symbol="0" symbolHandler={this.insertSymbol} class="btn--white btn__zero" />
        <EqualsButton displayValue={this.state.displayInfo} mathHandler={this.doMath} class="btn--red" />
    </div>
  );
  } //render
}; //App class

export default App;
