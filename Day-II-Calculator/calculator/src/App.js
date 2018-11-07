import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";

// const App = () => {
//   return (

//     <div className='app-container'>
//       <CalculatorDisplay />
//     </div>
//   );
// };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: 0 };
  }

  inputHandler(props) {
    console.log(`clicked something`);
  }

  render() {
    return (
      <div className="app-container">
        <CalculatorDisplay />
      </div>
    );
  }
}

export default App;
