import React from 'react';
import Moment from 'moment';
import './Header.css';


const HeaderTitle = () => {
    // const date = new Date();
    return (
        <div><h1>Lambda School<span>{Moment().startOf('hour').fromNow()}</span></h1></div>
    )
}

export default HeaderTitle;