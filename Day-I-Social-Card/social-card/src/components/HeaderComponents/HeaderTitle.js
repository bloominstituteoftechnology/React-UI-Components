import React from 'react';

const HeaderTitle = props => {
    return(
        <div className="header-title-container">
            <h2 className="header-title">
            {props.headerTitle}
            </h2>
            <p className="date-stamp">
               {props.titleDate}
            </p>
        </div>
    );
}

export default HeaderTitle;