import React from 'react';
import './Button.css';

const SmallButton = props => {
    return (
        <button className = {`btn-styles ${props.colorStyles}`}> {props.text}</button>
    );
};

SmallButton.defaultProps = {
    text: 'Default Text'
  };

export default SmallButton;
