import React from 'react';
import './App.sass';

import ButtonContainer from './components/DisplayComponents/ButtonContainer';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

/*const App = () => {
  return (
    <div className="calculator">

      <CalculatorDisplay />
      <ButtonContainer />

    </div>
  );
};*/

class App extends React.Component {

  constructor() {

    super();

    this.state = {

      total: 0,
      accumulator: 0

    }

  }

  render() {

    return (
      <div className="calculator">

        <CalculatorDisplay total={this.state.total} />
        <ButtonContainer />

      </div>
    );

  }

}

export default App;
