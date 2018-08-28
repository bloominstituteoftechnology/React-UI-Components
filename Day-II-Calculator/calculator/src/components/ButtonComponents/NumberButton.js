import React from 'react';
import './Button.css';

const NumberButton = props => {
    return <button className = "numberButton">{props.btnContent}</button>;
};

const NumberButtonsContainer = () => {
    return (
      <div className = "numberButtonsContainer">
          <div className = "numberRow">
            <NumberButton btnContent= "Clear"/>
          </div>
          <div className = "numberRow">
            <NumberButton btnContent= "7"/>
            <NumberButton btnContent= "8" />
            <NumberButton btnContent= "9" />
          </div>
          <div className = "numberRow">
            <NumberButton btnContent= "4" />
            <NumberButton btnContent= "5" />
            <NumberButton btnContent= "6" />
          </div>
          <div className = "numberRow">
            <NumberButton btnContent= "1" />
            <NumberButton btnContent= "2" />
            <NumberButton btnContent= "3" />
          </div>
          <div className = "numberRow">
            <NumberButton btnContent= "0" />
          </div>
      </div>
    );
  };

export default NumberButtonsContainer;