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

      total: "0",
      accumulator: 0,
      operation: '+'

    }

    this.onNumClick = this.onNumClick.bind(this);
    this.onActionClick = this.onActionClick.bind(this);

  }

  render() {

    return (
      <div className="calculator">

        <CalculatorDisplay total={this.state.total} />
        <ButtonContainer onBtnClick={this.onNumClick} onActionClick={this.onActionClick}/>

      </div>
    );

  }

  onActionClick(action) {

    switch(action) {

      case '-':

        this.setState({
          accumulator: parseInt(this.state.total),
          total: "0",
          operation: '-'
        });

        break;

      case '+':

        this.setState({
          accumulator: parseInt(this.state.total),
          total: "0",
          operation: '+'
        });

        break;

      case 'x':

        this.setState({
          accumulator: parseInt(this.state.total),
          total: "0",
          operation: '*'
        });

        break;

      case '÷':

        this.setState({
          accumulator: parseInt(this.state.total),
          total: "0",
          operation: '/'
        });

        break;

      case '=':

        this.setState({

          total: eval(`${this.state.accumulator} ${this.state.operation} ${parseInt(this.state.total)}`)

        });

        break;

      case 'clear':

        this.setState({

          total: '0'

        });

      break;

    }

  }

  onNumClick(id) {

    if (this.state.total == "0") {

      this.setState({
        total: "" + id
      });

    }

    else {

      this.setState({
        total: this.state.total + id
      });

    }

  }

}

export default App;
