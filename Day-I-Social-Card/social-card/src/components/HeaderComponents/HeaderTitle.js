import React from 'react';
import moment from 'moment';

import './Header.css';
const time = moment();

const HeaderTitle = () => {
  return (
    <div>
      <h3>Lambda School</h3>
      <div>
        @LambdaSchool <span>{time.format('MMM Do ')}</span>
      </div>
    </div>
  );
};

export default HeaderTitle;
