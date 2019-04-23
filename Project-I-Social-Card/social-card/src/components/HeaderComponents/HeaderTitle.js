import React from 'react';
import './Header.scss';
import 'moment';
import moment from 'moment';

const HeaderTitle = () => {
    let today = moment().format('D MMMM');
    //let monthAndDay = `${today.getDate()} ${today.getMonth() + 1}`;
    return <h1>Lambda School <span>@Lambda School - {today}</span></h1>;
}

export default HeaderTitle;
