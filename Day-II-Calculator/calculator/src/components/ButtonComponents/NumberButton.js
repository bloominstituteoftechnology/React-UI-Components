import React from 'react';
import './Button.css';
function Button(props) {
    const {button} = props;
    return (
        <div className='buttons'>
        <div className="numbers147">
        <button className = 'numberButton'>{button.one}</button>
        <button className = 'numberButton'>{button.four}</button>
        <button className = 'numberButton'>{button.seven}</button>
        </div>
        <div className="numbers258">
        <button className = 'numberButton'>{button.two}</button>
        <button className = 'numberButton'>{button.five}</button>
        <button className = 'numberButton'>{button.eight}</button>
        </div>
        <div className="numbers369">
        <button className = 'numberButton'>{button.three}</button>
        <button className = 'numberButton'>{button.six}</button>
        <button className = 'numberButton'>{button.nine}</button>
        </div>
        <div className="operators">
        <button className = 'functionButton'>{button.divide}</button>
        <button className = 'functionButton'>{button.multiply}</button>
        <button className = 'functionButton'>{button.subtract}</button>
        <button className = 'functionButton'>{button.add}</button>
        <button className = 'functionButton'>{button.equal}</button>
        </div>
        </div>
    )
}
 export default Button;