import React from 'react';
import './Header.css';
import moment from 'moment';

const HeaderTitle = () => {
    return <div className="profileHeader">
        <p className="name">Lambda School</p>
        <p className="username light">@LambdaSchool</p>
        <p className='light'>&#9679;</p>
        <p className="date light">{moment().format('MMM D')}</p>
      </div>;
};
          
export default HeaderTitle;