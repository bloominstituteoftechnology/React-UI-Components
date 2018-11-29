import React from 'react';
import './Header.css';
import moment from 'moment';
const time = moment();


const HeaderTitle = props => <h1 className="header-title">Lambda School <span className="time-stamp">{time.format('MMM Do ')}</span></h1>;

export default HeaderTitle;
