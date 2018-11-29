import React from 'react';
import Moment from 'moment';
import './Header.css';


const HeaderTitle = () => {
    // const date = new Date();
    return (
        <div><h1>Lambda School<span>{Moment().format("MMM Do YY")}</span></h1></div>
    )
}

export default HeaderTitle;