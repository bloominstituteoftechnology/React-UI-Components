import React from 'react';

import './Button.css';

function NumberButton(){
    return(
      <div className='numbers-container'>
        <button className='clear wide'> clear </button>
        <div className='one-nine'>
          <div className='seven-nine'>
            <button className='seven'>7</button>
            <button className='eight'>8</button>
            <button className='nine'>9</button>
          </div>
          <div className='four-six'>
            <button className='four'>4</button>
            <button className='five'>5</button>
            <button className='six'>6</button>
          </div>
          <div className='one-three'>
            <button className='one'>1</button>
            <button className='two'>2</button>
            <button className='three'>3</button>
          </div>
          <button className='zero wide'>0</button>
        </div>
      </div>
    )
  }
  
  export default NumberButton;