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
            <RedButton name="X" />    


        </div>
    );
};

export default ActionButton;