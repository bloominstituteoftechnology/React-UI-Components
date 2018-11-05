import React from 'react';
import './Header.css';

function HeaderContent(props) {
    return (
     <React.Fragment>
        <p className="header-description">{props.content}</p>
      </React.Fragment>
    );
}

export default HeaderContent;
