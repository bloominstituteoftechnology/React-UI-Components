import React from 'react';
import './Header.css';

const HeaderTitle = () => {
  return (
    <div className='title-content'>
      <div className='title-content-top'>
        <h1 className='lambda-name'>Lambda School</h1>
        <a className='twitterlink' href="https://twitter.com/lambdaschool?lang=en">@LambdaSchool</a>
        <span>•</span>
        <span className="timestamp">26 Jan</span>
      </div>
      <div className='title-content-bottom'>
        <p>Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!</p>
      </div>
    </div>
  );
};

export default HeaderTitle;
