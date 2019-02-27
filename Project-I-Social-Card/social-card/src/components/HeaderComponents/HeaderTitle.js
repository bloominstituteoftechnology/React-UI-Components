import React from 'react';
import './Header.css';

function HeaderTitle (props) {
    return (
        <div>
            <div className="header-title">
                <h4>{props.title}</h4>
                <p className='small-text'>@{props.title}</p>
                <p className='small-text'>{props.timestamp}</p>
            </div>
        </div>  
    );
}

export default HeaderTitle;