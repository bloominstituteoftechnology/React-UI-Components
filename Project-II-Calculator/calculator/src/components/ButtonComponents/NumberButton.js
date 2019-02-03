import React from 'react';
import './Button.css';

//This will contain the props fro 0-9

const NumberButton = (props) => {
    return(
        <React.Fragment>
            <a className={props.styles}>{props.type}</a>
        </React.Fragment>
    );
}

export default NumberButton;