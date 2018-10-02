import React from 'react';
import NumberButton from './components/ButtonComponents/NumberButton';

const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "clear"];
console.log(numArray);
const calcOperators = ["÷", "x", "-", "+", "="];

const App = () => {
  return (
    <div>
      {numArray.map(num =>{
        return(
          <NumberButton text={num}/>
        );
      })}

      {calcOperators.map(operator =>{
        return(
          <NumberButton text={operator} />
        );
      })}
    </div>
  );
};

export default App;
