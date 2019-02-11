import React from 'react';
import './Header.css';

const HeaderTitle = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.handle}</p>
            <p>{props.date}</p>
        </div>
    )
}

export default HeaderTitle