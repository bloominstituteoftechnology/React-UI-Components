import React from 'react';
import './Header.css';


function HeaderContent(props) {
    return (
        <React.Fragment>
            <div className="header-content">
                <p> {props.content}</p>
            </div>
        </React.Fragment>
    );
  }

  export default HeaderContent;