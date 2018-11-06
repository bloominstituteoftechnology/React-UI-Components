import React from 'react';
import './Header.css';

function HeaderContent(props) {
    return (
      <React.Fragment>
        <p className="headerText">{props.text}</p>
      </React.Fragment>
    );
  }
  
  export default HeaderContent;