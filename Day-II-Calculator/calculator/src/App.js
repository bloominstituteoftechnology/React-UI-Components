import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import Display from './components/DisplayComponents/CalculatorDisplay';


// const App = () => {
//   return (
//     <div class="container">
//       <Display displayNumb = '0'/>
//       <div class="buttonContainer">
//         <NumberButton />
//         <ActionButton />
//       </div>
// </div>
//   );
// };

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: "2000",
    }
  }
  handleChangeFunction = event => {
    this.setState({total: event.target.value});
  };

  render () {
    return (
      <div className="container">
      <Display displayNumb = {this.state.total} />
      <div className="buttonContainer">
      <NumberButton />
      <ActionButton />
      </div>
      </div>
    );
  }
}
export default App;
