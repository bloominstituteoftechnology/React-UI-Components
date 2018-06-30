import React from 'react';
import './Button.css';


const BigButton = props => {
    console.log ('PROPS', props.name);
    return <button className="big-button">{props.name}</button>
};

BigButton.defaultProps={
    name:'Default Button'
}

export default BigButton;