import React from 'react';
import './Header.css';

function HeaderTitle (props) {
    return (
    <React.Fragment>
    <h3 className="header">{props.title}</h3> 
    <h5 className="handle">{props.handle}</h5>
    <h4 className="text">{props.text}</h4>
    </React.Fragment>)
    }

export default HeaderTitle;