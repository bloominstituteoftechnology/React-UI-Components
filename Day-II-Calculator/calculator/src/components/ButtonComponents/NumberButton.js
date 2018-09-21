import React from 'react';
import './Button.css';

const NumberButton = () => {
  // prop.displayNumber === 1
  return (
  <div  id="numberKeys">
    <div className="btn-numbers">
    <div className="btn-clear">clear</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div classname="btn-zero">0</div>
    </div>
  </div>
  )
}
export default NumberButton;