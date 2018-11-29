import React from 'react';
import './Button.css';

const Operators = (props) => {
    return (
        <div className = "operations">
          <div className = "operator">/</div>
          <div className = "operator">X</div>
          <div className = "operator">-</div>
          <div className = "operator">+</div>
          <div className = "operator">=</div>
        </div>
    )
}

export default Operators;