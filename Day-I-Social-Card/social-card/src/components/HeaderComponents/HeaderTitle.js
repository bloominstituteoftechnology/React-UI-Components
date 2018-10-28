import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return <div className="profileHeader">
        <p className="name">Lambda School</p>
        <p className="username light">@LambdaSchool</p>
        <p className='light'>&#9679;</p>
        <p className="date light">26 jan</p>
      </div>;
};
          
export default HeaderTitle;