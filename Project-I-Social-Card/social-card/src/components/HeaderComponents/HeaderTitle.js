import React from 'react';
import './Header.css';

function HeaderTitle(props){
    return(
        <div className="header-title">
            <h1><a href={props.userLink}>{props.userName}</a></h1>
            <h3>{props.userHandle}</h3> 
        </div>
    )
}

export default HeaderTitle;