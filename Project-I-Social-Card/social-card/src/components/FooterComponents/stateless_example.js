import React from 'react';
import './Footer.css';


const StateLess = (props) => {

const clickMe = () => {
  console.log("I'm clicked")
}
  return (
    <div className="icons">
      <button onClick={clickMe()}> Button </button>
    </div>
  )
}


export default StateLess
