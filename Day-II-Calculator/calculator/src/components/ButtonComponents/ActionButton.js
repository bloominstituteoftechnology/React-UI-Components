import React from 'react';
import './Button.css';
import NumberButton from "./NumberButton";

//clear and zero buttons <--modified to just clear
//takes in squarebutton
//parent element to squarebutton child to display
const ActionButton = (props) =>{
    return (
        <div>
            <div>
                <button className={props.displayStyle}>              {props.data.clear}
                </button>
                <NumberButton data={props.data.divide} displayStyle="red-square" />
            </div>
            <div>
                <NumberButton data={props.data.seven} />
                <NumberButton data={props.data.eight} />
                <NumberButton data={props.data.nine} />
                <NumberButton data={props.data.multiply} displayStyle="red-square" />
            </div>
            <div>
                <NumberButton data={props.data.four} />
                <NumberButton data={props.data.five} />
                <NumberButton data={props.data.six} />
                <NumberButton data={props.data.subtract} displayStyle="red-square" />
            </div>
            <div>
                <NumberButton data={props.data.one} />
                <NumberButton data={props.data.two} />
                <NumberButton data={props.data.three} />
                <NumberButton data={props.data.add} displayStyle="red-square" />
            </div>
            <div>
                <NumberButton data={props.data.zero} displayStyle="long-white-square bold" />
                <NumberButton data={props.data.equals} displayStyle="red-square" />
            </div>
        </div>
    )
};

ActionButton.defaultProps = {
    displayStyle: "long-white-square"
}

export default ActionButton;