import React from 'react';
import HeaderTitle from './HeaderTitle';
import HeaderParagraph from './HeaderParagraph';
import './Header.css';

function HeaderContent() {
  return <div className="HeaderContent">
    <HeaderTitle />
    <HeaderParagraph text="Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!" />
  </div>
}

export default HeaderContent;