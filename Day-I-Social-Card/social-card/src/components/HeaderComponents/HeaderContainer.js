import React from 'react';
import './Header.css';
import './HeaderContent';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';

let redLambda = 'http://www.mikewchan.com/wp-content/uploads/2018/07/lambda-school-log.jpg';
let whiteLambda = "https://ibin.co/3whrpKSBbZ81.png";

const HeaderContainer = props => {
  return (
    <div className="HeaderContainer">
      <ImageThumbnail source={redLambda} alt="Lambda School Logo"/>

      <HeaderContent 
        displayName="Lambda School" 
        username="LambdaSchool" 
        timestamp="26 jan" 
        body="This is test content LLLL"/>
    </div>
  )
}

export default HeaderContainer;
