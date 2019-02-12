import React from 'react';
import './Header.css';
import Moment from 'moment';

function HeaderTitle () {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const month = months[Moment().month()];
    const day = Moment().day();
    const year = Moment().year();
    return (

        <div className = "header-title"> 
            <h3 className ="display-name">Lambda School</h3>
            <p className ="link-text">@LambdaSchool</p>  
            <p className ="link-text">{month} {day}, {year}</p>
        </div>
    );
};

export default HeaderTitle;