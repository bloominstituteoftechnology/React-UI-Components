import React from 'react';
import './Header.css';

function HeaderTitle(props){
    return(
        <div>
            <h1 className= "title">{props.title}</h1>
            <p className= "handle">@Lambda School · 26 jan</p>
        </div>
    );
}

export default HeaderTitle;
