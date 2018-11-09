import React from 'react';
import RightButtonsContainer from './components/ButtonComponents/RightButtonsContainer';
import LeftButtonsContainer from './components/ButtonComponents/LeftButtonsContainer';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  onButtonClick(){
  	console.log('clicked');
  }

  render() {
    return (
		<div className="calculon">
	      <CalculatorDisplay value={this.state.value} />
	      <LeftButtonsContainer onClick={this.onButtonClick} />
	      <RightButtonsContainer />
	    </div>
    );
  }
}

export default App;
