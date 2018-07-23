import React from 'react';
import './Header.css';
import moment from 'moment';

const HeaderTitle=()=><p><strong>Lambda School</strong> <span class='gray'>@LambdaSchool · {moment().format('D MMMM')}</span></p>

export default HeaderTitle;