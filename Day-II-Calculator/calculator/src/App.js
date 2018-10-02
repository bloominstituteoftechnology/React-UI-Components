import React from 'react';
import NumberButton from './components/ButtonComponents/NumberButton';

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, ];
const actionBtn = [0, "clear"];
const calcOperators = ["÷", "x", "-", "+", "="];

const App = () => {
  return (
    <div>
      {/* number butttons */}
      {numArray.map(num =>{
        return(
          <NumberButton text={num} class={"numberBtn"}/>
        );
      })}
      {/* operator buttons */}
      {calcOperators.map(operator =>{
        return(
          <NumberButton text={operator} class={"operatorBtn"} />
        );
      })}
    </div>
  );
};

export default App;
