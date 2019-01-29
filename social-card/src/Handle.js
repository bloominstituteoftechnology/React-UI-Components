import React from 'react';
import "./Handle.css";

const Handle = props =>{
    return(
    <div className="div-handle">
        <p className="username">{props.user}</p>
        <div className="twitter-handle-wrapper">
            <p className="twitter">{props.twitter} </p>
            <p className ="twitter date">{props.date}</p>
        </div>
    </div>
    )
}
export default Handle;