import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js';
import HeaderTitle from './HeaderTitle.js';
import HeaderContent from './HeaderContent.js';
import Moment from 'moment';

const HeaderContainer = () => (
  <div className='header-container'>
      <ImageThumbnail url='https://ibin.co/3whrpKSBbZ81.png'/>
      <div className='header-material'>
        <HeaderTitle name='Lambda School'
          handle='@LambdaSchool'
          date={Moment().format('MMM DD')}
        />
        <HeaderContent content="Let's learn React by building simple interfaces with components.  Don't try to overthink it, just keep it simple and have fun.  Once you feel comfortable using components you are well on your way to mastering React!"/>
      </div>
    </div>
); // Originally written as a class component, but there is no reason for this as it has no real need for state.  I do believe passing props to fill in content to child elements allows our elements to be more modular, however.

export default HeaderContainer;