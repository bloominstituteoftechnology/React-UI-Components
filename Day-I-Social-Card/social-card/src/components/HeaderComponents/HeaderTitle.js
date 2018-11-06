import React from 'react';
import './Header.css';

function HeaderTitle (props) {
    return (
    <React.Fragment>
    <h3 className="header">{props.title}</h3> 
    <h4 className="handle">{props.handle}</h4>
    </React.Fragment>)
    }

export default HeaderTitle;