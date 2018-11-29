import React from 'react';
import './Header.css';

const HeaderTitle = () =>{
    return(
        <div className= "header-title-container">
            <span className="card-header">Lambda School</span>
            <span className="card-handle">@LambdaSchool</span>
            <span className="card-date-seperator">&#183;</span>
            <span className="card-date">26 jan</span>
        </div>
    );
}

export default HeaderTitle;