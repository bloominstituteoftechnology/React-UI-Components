import React from 'react';
import './Button.css';

const NumberButton =  () => {

    return (
        <div className='number-button' style={{height: 300, width:200}}>
            <div className='number' style={{height: 150, width: 150}}>
                <button className="firstrow" style={{height: 50, width: 50 }}>7</button>
                <button style={{height: 50, width: 50 }}>8</button>
                <button style={{height: 50, width: 50 }}>9</button>
                <button className="secondrow" style={{height: 50, width: 50 }}>4</button>
                <button style={{height: 50, width: 50 }}>5</button>
                <button style={{height: 50, width: 50 }}>6</button>
                <button className="thirdrow" style={{height: 50, width: 50 }}>3</button>
                <button style={{height: 50, width: 50 }}>2</button>
                <button style={{height: 50, width: 50 }}>1</button>
                <button className="fourthrow "style={{height: 50, width: 150 }}>0</button>

            </div >

                <div className="column-4" style={{height: 250, width: 50 }}>
                <button className="function" style={{height: 50, width: 50 }}>=</button>
                <button className="function" style={{height: 50, width: 50 }}>+</button>
                <button className="function" style={{height: 50, width: 50 }}>-</button>
                <button className="function" style={{height: 50, width: 50}}>x</button>
                <button className="function" style={{height: 50, width: 50}}>/</button>
             </div>
       
       export default NumberButton;
    





    

  
