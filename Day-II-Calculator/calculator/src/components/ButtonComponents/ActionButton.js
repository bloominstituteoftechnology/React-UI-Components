import React from 'react';
import './Button.css';


const RedButton = props => {
    console.log ('PROPS', props.name);
    return <button className="red-button">{props.name}</button>
};

RedButton.defualtProps={
    name:'Default Button'
}

const ActionButton = props => {
    return (
        <div className="action-button">
            <RedButton name="&#247;" />
            <RedButton name="x" />
            <RedButton name="-" />
            <RedButton name="+" />
            <RedButton name="=" />    
        </div>
    );
};

export default ActionButton;