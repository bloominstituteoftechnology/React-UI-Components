import React from 'react';
import './Button.css';


export default function NumberButton({ num, click }) {
  return (
    <button className="num-button" onClick={click}>
      {num}
    </button>
  )
}
