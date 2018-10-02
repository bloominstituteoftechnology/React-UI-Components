import React from "react";
import "./App.css";
import NumberButton from "./components/ButtonComponents/NumberButton";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
  return (
    <div className="numbers">
    {numbers.map(number => <NumberButton displaySymbol={number} />)}
    </div>
    // <div>
    //   <h3>Welcome to React Calculator</h3>
    //   <p>
    //     We have given you a starter project. You'll want to build out your
    //     components in their respective files, remove this code and replace it
    //     with the proper components.
    //   </p>
    //   <p>
    //     <strong>
    //       Don't forget to `default export` your components and import them here
    //       inside of this file in order to make them work.
    //     </strong>
    //   </p>
    // </div>
  );
};
/* {students.map(studentFromMap => (
        <Student studentOnProps={studentFromMap} />
      ))}; */
export default App;
