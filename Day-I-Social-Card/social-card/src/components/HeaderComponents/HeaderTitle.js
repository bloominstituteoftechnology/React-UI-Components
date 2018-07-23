import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return <div className = "header-title">
    <h1> Lambda School</h1> 
    <p>@lambdaschool</p>
    <time datetime = "2018-07-23">July 23, 2018</time>
        {/* timestamp research */}
    </div>

};

export default HeaderTitle;