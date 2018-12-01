import React from 'react';
import './Button.css';

const ButtonCreator = (props) => {
    return (
          <button className = {`buttonStyle ${props.actionStyle} ${props.operatorStyle} `}>{props.text}</button>   
    );
};

export default ButtonCreator;