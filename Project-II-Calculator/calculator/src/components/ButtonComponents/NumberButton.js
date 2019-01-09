import React from 'react';
import Button from './Button'
import './Button.css';


function NumberButton(props){
    return(
        <div className="numbers">
            {props.buttons.filter(item=>item.type==="number" || item.type==='clear').map( button => 
                    < Button 
                        item = {button} 
                        key={button.id} 
                        handleClick={props.handleClick} 
                        state = {props.state} 
                    />
                    
                )
            }
        </div>       
    );
}


export default NumberButton;