import React from 'react';
import './Header.css';


function HeaderTitle(props) {
    return (
            <div className="header-title">
                <h3 >{props.title}</h3>
                <div className="stamp">
                    <h4>@{props.title}</h4>
                    <ul>
                        <li>Date</li>
                    </ul>
                </div>
            </div>
    );
  }

  export default HeaderTitle;
