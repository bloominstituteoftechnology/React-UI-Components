import React from 'react';
import './Header.css';
import moment from 'moment';

const HeaderTitle = () => (<p className='header-text'> <strong>Lambda School</strong> <span className='gray'>@lambdaschool &middot; {moment().format('Do MMM')}</span></p>);

export default HeaderTitle;