import React from 'react';
import './Header.css';

function HeaderTitle (props){
    return <div class="headerTitle">
        <h1>{props.title}</h1>
        <div class="headerUserName">{props.userName} . {props.timeStamp}</div>
    </div>
}

export default HeaderTitle
