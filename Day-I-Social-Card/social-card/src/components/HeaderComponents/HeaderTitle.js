import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return <div className = "header-title">
    <div className = "title"><h4> Lambda School</h4></div> 
    <div className = "handle"><p>@lambdaschool</p></div>
    <div className = "time"><time datetime = "2018-07-23"> . July 23, 2018</time></div>
        {/* timestamp research */}
    </div>

};

export default HeaderTitle;