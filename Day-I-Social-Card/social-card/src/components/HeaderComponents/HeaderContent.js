import React from 'react';
import './Header.css';

function HeaderContent(props) {
    return (
        <React.Fragment>
            <p className="header-content">{props.content}</p>
        </React.Fragment>
    );
}

export default HeaderContent;