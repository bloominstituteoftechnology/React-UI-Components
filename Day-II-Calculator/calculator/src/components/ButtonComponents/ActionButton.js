import React from 'react';
import './Button.css';
import NumberButton from "./NumberButton";

const ActionButton = (props) =>{
    return (
        <div>
            <div className="button-container">
                <button className={props.displayStyle}>              
                    {props.text.clear}
                </button>
                <NumberButton data={props.data.divide} displayStyle="red-square" />
            </div>
            <div className="button-container">
                <NumberButton text={props.text.seven} />
                <NumberButton text={props.text.eight} />
                <NumberButton text={props.text.nine} />
                <NumberButton text={props.text.multiply} displayStyle="red-square" />
            </div>
            <div className="button-container">
                <NumberButton text={props.text.four} />
                <NumberButton text={props.text.five} />
                <NumberButton text={props.text.six} />
                <NumberButton text={props.text.subtract} displayStyle="red-square" />
            </div>
            <div className="button-container">
                <NumberButton text={props.text.one} />
                <NumberButton text={props.text.two} />
                <NumberButton text={props.text.three} />
                <NumberButton text={props.text.add} displayStyle="red-square" />
            </div>
            <div className="button-container">
                <NumberButton text={props.text.zero} displayStyle="long-white-square bold" />
                <NumberButton text={props.text.equals} displayStyle="red-square" />
            </div>
        </div>
    )
};
 ActionButton.defaultProps = {
    displayStyle: "white-square"
}
 export default ActionButton; 
