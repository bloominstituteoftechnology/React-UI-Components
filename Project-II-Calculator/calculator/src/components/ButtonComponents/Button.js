import React from 'react'

function Button (props){
    console.log(props)
    return(
        <button className={props.item.style}>{props.item.name}</button>

    )
}

export default Button