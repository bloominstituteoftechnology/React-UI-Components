import React from "react";
import "./Button.css";

const numbers = [];

for (let i = 0; i <= 9; i++) {
  numbers.push(i);
}
console.log(numbers);

const NumberButtons = props => {
  return (
    <div className="numbers-container">
      <div className="full-width">
        <span>Clear</span>
      </div>
      <div>
        <span>7</span>
        <span>8</span>
        <span>9</span>
      </div>
      <div>
        <span>4</span>
        <span>5</span>
        <span>6</span>
      </div>
      <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
      <div className="full-width">
        <span>0</span>
      </div>
    </div>
  );
};

export default NumberButtons;
