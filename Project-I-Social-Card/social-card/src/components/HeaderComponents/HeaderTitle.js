import React from 'react';
import './Header.css';

function HeaderTitle(props) {
    return (
        <React.Fragment>
            <h2 className="headerText">{props.title}</h2>
            <p className="handle">{props.handle}</p>
            <p className="date">{props.date}</p>
        </React.Fragment>
    );
}

export default HeaderTitle;
