import React from 'react';
import './Button.css';

//square button for num 1-9 and +,-,*,/
const SquareButton = (props) => {
    return(
        <div>
            <div>
                <button className={props.buttonStyle}>
                    {props.data.seven}
                </button>
                <button className={props.buttonStyle}>
                    {props.data.eight}
                </button>
                <button className={props.buttonStyle}>
                    {props.data.nine}
                </button>
            </div>
            <div>
                <button className={props.buttonStyle}>
                    {props.data.four}
                </button>
                <button className={props.buttonStyle}>
                    {props.data.five}
                </button>
                <button className={props.buttonStyle}>
                    {props.data.six}
                </button>
            </div>
            <div>
                <button className={props.buttonStyle}>
                    {props.data.one}
                </button>
                <button className={props.buttonStyle}>
                    {props.data.two}
                </button>
                <button className={props.buttonStyle}>
                    {props.data.three}
                </button>
            </div>
        </div>
    )
};

export default SquareButton;