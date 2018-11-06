import React from 'react';
import './Header.css';

function HeaderTitle(props){
    return(
        <h3 className="title">{props.accountName}
            <span className="handle"> @{props.accountHandle} • 26 Jan</span>
        </h3>
    );
}

export default HeaderTitle;