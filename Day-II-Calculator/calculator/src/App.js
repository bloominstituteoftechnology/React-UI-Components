import React from 'react';
import './App.css';
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ButtonContainer from "./components/ButtonComponents/ButtonContainer";

const App = () => {
  return (
    <section className="fullCalc">
      <CalculatorDisplay display="0" />
      <ButtonContainer />
    </section>
  );
};

export default App;
