import React from 'react';
import './Header.css';
//import ImageThumbnail from './ImageThumbnail'
import HeaderTitle from './HeaderTitle'
import HeaderContent from './HeaderContent'

const HeaderContainer = _ => {
  return (
    <div className='header-container'>
      {/* <ImageThumbnail imgSrc='https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png' /> */}
      <HeaderTitle headTitle='Lambda School ' grayText='@LambdaSchool . 26 jan' />
      <HeaderContent headerMainText={`Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!`} />
    </div>
  )
}

export default HeaderContainer;