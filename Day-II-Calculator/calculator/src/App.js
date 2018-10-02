import React from 'react';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';


const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const actionBtn = [0, "clear"];
const calcOperators = ["÷", "x", "-", "+", "="];

const App = () => {
  return (
    <CalculatorDisplay nums={numArray} actions={actionBtn} operators={calcOperators} />
  );
};

export default App;




//   {/* number butttons */}
//   {numArray.map(num =>{
//     return(
//       <NumberButton text={num} class={"numberBtn"}/>
//     );
//   })}

//   {/* operator buttons */}
//   {calcOperators.map(operator =>{
//     return(
//       <NumberButton text={operator} class={"operatorBtn"} />
//     );
//   })}

//   {/* action buttons */}
//   {
//     actionBtn.map(action => {
//       return(
//         <ActionButton text={action} />
//       );
//     })
//   }

// </div>