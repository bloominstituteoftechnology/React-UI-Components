import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';




// const App = () => {
//   return (
//     <div className = "main-div">
//       <CalculatorDisplay />
//       <NumberButton one="1" two="2" three="3" four="4" five="5" six="6" seven = "7" eight = "8" nine = "9" zero = "0" clear="clear"/>
//     </div>
//   );
// };

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {total: 0}
  }



  render(){

    return (
      <div className = "main-div">
        <CalculatorDisplay />
        <NumberButton one="1" two="2" three="3" four="4" five="5" six="6" seven = "7" eight = "8" nine = "9" zero = "0" clear="clear"/>
      </div>
    );

  }
}

export default App;
