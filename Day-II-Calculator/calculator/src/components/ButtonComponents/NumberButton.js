import React from 'react';
import './Button.css';

const NumberButtons = () => {
  return (
    <div className="numbers">
      <ClearButton />
      <NumOne />
      <NumTwo />
      <NumThree />
      <NumFour />
      <NumFive />
      <NumSix />
      <NumSeven />
      <NumEight />
      <NumNine />
      <NumZero />
    </div>
  );
};

const ClearButton = () => {
  return <div className="clear">Clear</div>;
};
const NumOne = () => {
  return <div className="nButtons">1</div>;
};

const NumTwo = () => {
  return <div className="nButtons">2</div>;
};

const NumThree = () => {
  return <div className="nButtons">3</div>;
};

const NumFour = () => {
  return <div className="nButtons">4</div>;
};

const NumFive = () => {
  return <div className="nButtons">5</div>;
};

const NumSix = () => {
  return <div className="nButtons">6</div>;
};

const NumSeven = () => {
  return <div className="nButtons">7</div>;
};

const NumEight = () => {
  return <div className="nButtons">8</div>;
};

const NumNine = () => {
  return <div className="nButtons">9</div>;
};

const NumZero = () => {
  return <div className="nButtons zero">0</div>;
};

export default NumberButtons;
