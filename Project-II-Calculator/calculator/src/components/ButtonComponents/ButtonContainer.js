import React from 'react';
import ActionButton from './ActionButton'
import NumberButton from './NumberButton'
import './Button.scss';




const ButtonContainer = props =>{

    return (
    <>
        <div className="container button-container">
           <ActionButton large symbol={props.symbols[0]}/>
           <NumberButton red symbol={props.symbols[14]}/>
        </div>
        <div className="container button-container">
           <ActionButton basic symbol={props.symbols[8]}/>
           <NumberButton basic symbol={props.symbols[9]}/>
           <NumberButton basic symbol={props.symbols[10]}/>
           <NumberButton red symbol={props.symbols[13]}/>
        </div>
        <div className="container button-container">
           <NumberButton basic symbol={props.symbols[5]}/>
           <NumberButton basic symbol={props.symbols[6]}/>
           <NumberButton basic symbol={props.symbols[7]}/>
           <NumberButton red symbol={props.symbols[12]}/>
        </div>
        <div className="container button-container">
           <NumberButton basic symbol={props.symbols[2]}/>
           <NumberButton basic symbol={props.symbols[3]}/>
           <NumberButton basic symbol={props.symbols[4]}/>
           <NumberButton red symbol={props.symbols[11]}/>
        </div>
        <div className="container button-container">
           <ActionButton large symbol={props.zero}/>
           <NumberButton red symbol={props.symbols[15]}/>
        </div>
        </>
    )
}

export default ButtonContainer