import React from 'react';
import './Header.css';

function HeaderTitle (props) {
    return (
        <div>
            <div>
                <h2>{props.title}</h2>
                <p className='small-text'>@{props.title}</p>
                <p className='small-text'>{props.timestamp}</p>
            </div>
        </div>  
    );
}

export default HeaderTitle;