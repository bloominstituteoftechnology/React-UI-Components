import React from 'react';
import './Button.css';

const NumberButtons = props => {
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
  return <button className="clear">Clear</button>;
};
const NumOne = () => {
  return (
    <button className="nButtons" text="1">
      1
    </button>
  );
};

const NumTwo = () => {
  return (
    <button className="nButtons" text="2">
      2
    </button>
  );
};

const NumThree = () => {
  return (
    <button className="nButtons" text="3">
      3
    </button>
  );
};

const NumFour = () => {
  return (
    <button className="nButtons" text="4">
      4
    </button>
  );
};

const NumFive = () => {
  return (
    <button className="nButtons" text="5">
      5
    </button>
  );
};

const NumSix = () => {
  return (
    <button className="nButtons" text="6">
      6
    </button>
  );
};

const NumSeven = () => {
  return (
    <button className="nButtons" text="7">
      7
    </button>
  );
};

const NumEight = () => {
  return (
    <button className="nButtons" text="8">
      8
    </button>
  );
};

const NumNine = () => {
  return (
    <button className="nButtons" text="9">
      9
    </button>
  );
};

const NumZero = () => {
  return (
    <button className="nButtons zero" text="0">
      0
    </button>
  );
};

export default NumberButtons;

// const NumButton = props => {
//   return <button className={props.className}>{props.text}</div>;
// };
//
// export default NumButton;
