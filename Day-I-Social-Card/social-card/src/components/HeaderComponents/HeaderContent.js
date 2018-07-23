import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import moment from 'moment';

const HeaderContent = () => {
  // let now = moment();
  // console.log(now);
  return (
  <div className="header">
    <HeaderTitle date={ moment().format("D MMM") }/>
    <p> 
      Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun.
      Once you feel comfortable using components you are well on your way to mastering React!
    </p>
  </div>
  )
};

export default HeaderContent;

