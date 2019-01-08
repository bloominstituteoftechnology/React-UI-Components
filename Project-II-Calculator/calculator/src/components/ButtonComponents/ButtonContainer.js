import React from 'react'
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';


function ButtonContainer(props){
    return(
        <div className="buttonContainer">
            <NumberButton 
                handleClear = {props.handleClear}
                state = {props.state}
                buttons = {props.buttons}
            />
            <ActionButton 
                handleClear = {props.handleClear}
                state = {props.state}
                buttons = {props.buttons}
            />
        </div>
    )
}

export default ButtonContainer