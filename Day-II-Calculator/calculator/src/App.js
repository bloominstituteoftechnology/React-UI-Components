import React from 'react';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
    };
  }

  render() {
    return (
      <div>
        <CalculatorDisplay total={this.state.total} />
      </div>
    );
  };
};

export default App;
