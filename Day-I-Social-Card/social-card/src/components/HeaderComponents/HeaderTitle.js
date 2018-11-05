import React from 'react';
import './Header.css';

function HeaderTitle(props) {
    return (
        <React.Fragment>
            <span className="bold">{props.name} </span><span className="pale"> {props.handle} · {props.date}</span>
        </React.Fragment>
    );
}

export default HeaderTitle;