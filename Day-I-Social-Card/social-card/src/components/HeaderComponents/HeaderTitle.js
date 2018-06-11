import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return (
        <div className="title">
        <h1>Lambda School 
            <small>@LambdaSchool &middot; 
                <time>June 11</time>
                </small>
                </h1>
        </div>
    );
};

export default HeaderTitle;