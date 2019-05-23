import React from 'react';
import './Header.css';

function HeaderTitle(props) {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    );
}

export default HeaderTitle;
