import React from 'react';
import './Header.css';
import * as moment from 'moment';


let now = moment().format('LLLL');


const HeaderTitle = () => {
return (
  <div>
    <div className='lambdaHeader'>
      <h1> Lambda School</h1> <h3>@LambdaSchool</h3> <h3>&bull; {now}</h3>
    </div>
  </div>
);
};


export default HeaderTitle;