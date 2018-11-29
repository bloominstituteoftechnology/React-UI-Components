import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return (
        <div className = "numbers">
          <div className = "digit">7</div>
          <div className = "digit">8</div>
          <div className = "digit">9</div>
          <div className = "digit">4</div>
          <div className = "digit">5</div>
          <div className = "digit">6</div>
          <div className = "digit">1</div>
          <div className = "digit">2</div>
          <div className = "digit">3</div>
          <div className = "digit">0</div>
        </div>
    )
}

export default NumberButton;