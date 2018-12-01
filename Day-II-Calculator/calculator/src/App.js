// Stretch - Refactor to classical component (MVP code below)

import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0
    };
  }
  render() {
    return (
      <div id="app-container">
      <div className="buttons-container">
        <div className="display">
          <CalculatorDisplay total={this.state.total}/>
        </div>
        <div className="keypad">
          <div className="left-side">
            <div className="btn-clear">
              <ActionButton buttonStyle="btn-rectangle btn-white btn-clear" text="clear" />
            </div>
            <div className="btn-nums">
              <NumberButton buttonStyle="btn-square btn-white btn-number" text="7" />
              <NumberButton buttonStyle="btn-square btn-white btn-number" text="8" />
              <NumberButton buttonStyle="btn-square btn-white btn-number" text="9" />
              <NumberButton buttonStyle="btn-square btn-white btn-number" text="4" />
              <NumberButton buttonStyle="btn-square btn-white btn-number" text="5" />
              <NumberButton buttonStyle="btn-square btn-white btn-number" text="6" />
              <NumberButton buttonStyle="btn-square btn-white btn-number" text="1" />
              <NumberButton buttonStyle="btn-square btn-white btn-number" text="2" />
              <NumberButton buttonStyle="btn-square btn-white btn-number" text="3" />
            </div>
            <div className="btn-zero">
              <ActionButton buttonStyle="btn-rectangle btn-number" text="0" />
            </div>
          </div>
          <div className="right-side">
            <NumberButton buttonStyle="btn-square btn-red btn-symbol" text="&divide;" />
            <NumberButton buttonStyle="btn-square btn-red btn-symbol" text="&times;" />
            <NumberButton buttonStyle="btn-square btn-red btn-symbol" text="-" />
            <NumberButton buttonStyle="btn-square btn-red btn-symbol" text="+" />
            <NumberButton buttonStyle="btn-square btn-red btn-symbol" text="=" />
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default App;

// MVP code: 

// import React from 'react';
// import './App.css';
// import NumberButton from './components/ButtonComponents/NumberButton';
// import ActionButton from './components/ButtonComponents/ActionButton';
// import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

// const App = () => {
//   return (
//     <div id="app-container">
//       <div className="buttons-container">
//         <div className="display">
//           <CalculatorDisplay numDisplay="0"/>
//         </div>
//         <div className="keypad">
//           <div className="left-side">
//             <div className="btn-clear">
//               <ActionButton buttonStyle="btn-rectangle btn-white btn-clear" text="clear" />
//             </div>
//             <div className="btn-nums">
//               <NumberButton buttonStyle="btn-square btn-white btn-number" text="7" />
//               <NumberButton buttonStyle="btn-square btn-white btn-number" text="8" />
//               <NumberButton buttonStyle="btn-square btn-white btn-number" text="9" />
//               <NumberButton buttonStyle="btn-square btn-white btn-number" text="4" />
//               <NumberButton buttonStyle="btn-square btn-white btn-number" text="5" />
//               <NumberButton buttonStyle="btn-square btn-white btn-number" text="6" />
//               <NumberButton buttonStyle="btn-square btn-white btn-number" text="1" />
//               <NumberButton buttonStyle="btn-square btn-white btn-number" text="2" />
//               <NumberButton buttonStyle="btn-square btn-white btn-number" text="3" />
//             </div>
//             <div className="btn-zero">
//               <ActionButton buttonStyle="btn-rectangle btn-number" text="0" />
//             </div>
//           </div>
//           <div className="right-side">
//             <NumberButton buttonStyle="btn-square btn-red btn-symbol" text="&divide;" />
//             <NumberButton buttonStyle="btn-square btn-red btn-symbol" text="&times;" />
//             <NumberButton buttonStyle="btn-square btn-red btn-symbol" text="-" />
//             <NumberButton buttonStyle="btn-square btn-red btn-symbol" text="+" />
//             <NumberButton buttonStyle="btn-square btn-red btn-symbol" text="=" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
