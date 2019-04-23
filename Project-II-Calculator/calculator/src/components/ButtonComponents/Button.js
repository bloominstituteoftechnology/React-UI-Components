import React from 'react'

function Button (props){
    return(
        <button className={props.item.style}>{props.item.name}</button>

    )
}

export default Button 