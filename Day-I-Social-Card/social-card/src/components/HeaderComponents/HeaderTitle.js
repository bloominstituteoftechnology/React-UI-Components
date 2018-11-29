import React from 'react';
import './Header.css';

const HeaderTitle= props => {
    return (
        <div className = "title">
            <h3>Lambda School</h3>
            <p className='tagline'>@LambdaSchool &middot; 26 Jan</p>
        </div>
    )
}

export default HeaderTitle;