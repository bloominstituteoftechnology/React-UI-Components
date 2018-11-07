import React, { Fragment } from 'react';
import './Display.css';

function ShowMeSomething (props) {
    return (
        <Fragment>
        
        <div className="startNum">{props.startingNumber}</div>
        </Fragment>
    )
}

export default ShowMeSomething;


