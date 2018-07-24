import React from 'react';
import './Button.css';

const ButtonCreator = props => <div className={`btn ${props.extraStyles}`}>{props.text}</div>

const ActionButton = props => {
    return (

        <div>
            <ButtonCreator extraStyles={props.extraStyles} text={props.text} />
        </div>

    );
};


export default ActionButton; 