import React from 'react';
import './Button.css';

const OperatorButton = (props) =>{
    return(
        <button className = {props.buttonStyle}>
            {props.text}
        </button>    
    );
};

const Operators = () =>{
    return(
        <OperatorButton buttonStyle = {'operator'} text ={'/'} /> //Where do I get division symbol?button 
        <OperatorButton buttonStyle = {'operator'} text ={'*'} />
        <OperatorButton buttonStyle = {'operator'} text ={'-'} />
        <OperatorButton buttonStyle = {'operator'} text ={'+'} />
        <OperatorButton buttonStyle = {'operator'} text ={'='} />
    );
};

const ActionButton = (props) =>{
    return(
        <button className = {props.buttonStyle}>
            {props.text}
        </button>    
    );
};

const Actions = () =>{
    return(
        <ActionButton buttonStyle = {'action'} text = {'0'} />
        <ActionButton buttonStyle = {'action'} text = {'clear'} />
        
        
    )
}

export default OperatorButton;
export default ActionButton;