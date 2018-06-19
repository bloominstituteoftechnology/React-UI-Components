import React from 'react';
import './Button.css';

const NumberButton = () => {
    return (
    
        <section className="calculator">
    
        <div className="number-holder">
        {/* <button className="bottom-content"> 0 </button>
        <button className="number-content sign"> = </button>     */}
        <button className="number-content"> 1 </button>
        <button className="number-content"> 2 </button>
        <button className="number-content"> 3 </button>
        <button className="number-content sign"> +</button>
        <button className="number-content"> 4 </button>
        <button className="number-content"> 5 </button>
        <button className="number-content"> 6 </button>
        <button className="number-content sign"> − </button>
        <button className="number-content"> 7 </button>
        <button className="number-content"> 8 </button>
        <button className="number-content"> 9 </button>
        <button className="number-content sign"> × </button>
        {/* <button className="bottom-content text-clear"> clear </button>
        <button className="number-content sign"> ÷ </button>     */}
         </div>
         </section>);
};



export default NumberButton;
