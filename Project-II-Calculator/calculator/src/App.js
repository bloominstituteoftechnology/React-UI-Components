import React from 'react';
import './App.css';
import NumberContainer from "./components/ButtonComponents/NumberContainer";
import OperatorContainer from "./components/ButtonComponents/OperatorContainer";


const App = () => {
  return (
    <div className="app">
      <NumberContainer/>
      <OperatorContainer/>
    </div>
  );
};

export default App;
