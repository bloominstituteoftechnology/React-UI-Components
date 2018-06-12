import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    console.log('PROPS', props);
    return <button className='operator'>{props.name}</button>;

}

export default ActionButton;