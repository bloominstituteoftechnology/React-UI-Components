import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';

function HeaderContainer(){
  return (
    <div className='container'>
      <div className='imageContainer'>
      <div className='background'></div>
        <ImageThumbnail className='imageThumbnail' />
      </div>
      <div className='contentContainer'>
        <div className='titleContainer'>
          <HeaderTitle title= 'Lambda School' />
          <HeaderTitle tags='@LambdaSchool 	• 26 jan' />
        </div>
        <HeaderContent description='Lets learn React by building simple interfaces with components. Dont try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!' />
      </div>
    </div>
  );
}

export default HeaderContainer;
