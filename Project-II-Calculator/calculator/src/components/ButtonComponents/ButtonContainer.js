import React from "react";
import "./Button.css";

const ButtonContainer = () => {
  return (
    <div className="btn__container">
      <div className="number__btns__container">
        <div className="btn clear">clear</div>
        <div className="number__btns">
          <div className="btn one">1</div>
          <div className="btn two">2</div>
          <div className="btn three">3</div>
          <div className="btn four">4</div>
          <div className="btn five">5</div>
          <div className="btn six">6</div>
          <div className="btn seven">7</div>
          <div className="btn eight">8</div>
          <div className="btn nine">9</div>
        </div>
        <div className="btn zero">0</div>
      </div>
      <div className="action__btns__container">
        <div className="btn divide">÷</div>
        <div className="btn multiply">x</div>
        <div className="btn subtract">-</div>
        <div className="btn add">+</div>
        <div className="btn equal">=</div>
      </div>
    </div>
  );
};

export default ButtonContainer;
