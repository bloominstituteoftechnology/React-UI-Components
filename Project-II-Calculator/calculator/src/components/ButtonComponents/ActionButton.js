import React from 'react';
import './Button.scss';



const ActionButton = props =>{

    return (

        <button className={
            props.large ? "basic basic--large " : 'basic basic--small'
        
        
        }>{props.symbol}</button>
    )
}

export default ActionButton
