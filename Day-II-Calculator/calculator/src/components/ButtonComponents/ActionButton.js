import React from 'react';
import './Button.css';

const ActionButton = props => {

    const clickHandler = () => {
        alert(props.name);
    };

    return (
        <div 
        
        onClick={clickHandler}
        
        className={`action-button ${props.customStyleProp}`}>
            {props.name}            
        </div>
    );
};

//DEFAULT PROPS
ActionButton.defaultProps = {
    name: '!!!',
    customStyleProp: 'action-button'
};

export default ActionButton;


