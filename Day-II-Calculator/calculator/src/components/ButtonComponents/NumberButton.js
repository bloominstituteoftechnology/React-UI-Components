import React from 'react';
import './Button.css';

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

const NumberButton = props => {
  return (
    <div className="numberbuttonContainer">
      <button className='numberbutton'>7</button>
      <button className='numberbutton'>8</button>
      <button className='numberbutton'>9</button>
      <button className='numberbutton'>4</button>
      <button className='numberbutton'>5</button>
      <button className='numberbutton'>6</button>
      <button className='numberbutton'>1</button>
      <button className='numberbutton'>2</button>
      <button className='numberbutton'>3</button>
    </div>
  )
}

export default NumberButton