import React from 'react';
import './Header.css';

const HeaderTitle = (props) => {
    return <div className="post-header-title">
             <h2>{props.name}</h2>
             <h3>{props.username}</h3>
             <h3>{props.date}</h3>
           </div>;
};

export default HeaderTitle;
