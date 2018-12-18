import React from 'react';
import './Header.css';

function HeaderTitle(props) {
    return <h2 className="headerText">{props.title}</h2>


}

export default HeaderTitle;

/* <p className="handle">{props.handle}</p>
<p className="date">{props.date}</p> */