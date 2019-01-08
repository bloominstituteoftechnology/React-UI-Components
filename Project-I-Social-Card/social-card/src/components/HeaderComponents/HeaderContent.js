import React from 'react';
import './Header.css';
import HeadTitle from './HeaderTitle';

const HeadContent = () => {
  return (
    <div className='headContent'>
      <HeadTitle />
      <p className='headContentText'>Let's learn React by building simple interfaces with components.  Don't try to overthing it, just keep it simple and have fun.  
        Once you feel comfortable using components you are well on your way to mastering React!</p>
    </div>
  );
}

export default HeadContent;