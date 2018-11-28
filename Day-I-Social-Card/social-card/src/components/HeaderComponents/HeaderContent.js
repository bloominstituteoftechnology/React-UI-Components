import React from 'react';
import './Header.css';

import HeaderTitle from './HeaderTitle.js';
import Moment from 'react-moment';

const HeaderContent = props => {
  const date = <Moment format='DD/MMM'/>

  return (
    <div className = {props.className}>
      <HeaderTitle className="Header__content__title" name="Lambda School" date={date}/>
      <p>Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!</p>
    </div>
  );
}

export default HeaderContent;
