import React from 'react';
import './Header.css';


function HeaderTitle(props) {
    return (
     <React.Fragment>
        <h2 className="main-title">{props.mainTitle} <span className="main-title__timestamp">{props.date}</span></h2>
      </React.Fragment>
    );
}

export default HeaderTitle;


