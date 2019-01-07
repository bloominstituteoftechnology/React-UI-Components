import React from 'react';
import './Header.css';
import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";

const HeaderContainer = props => {
  return (
    <div>
      <ImageThumbnail imageSource={props.profile.imageSource}  />
      <HeaderTitle profileName={props.profile.profileName} profileHandle={props.profile.profileHandle} date={props.profile.date} />
      <HeaderContent headerContent={props.profile.headerContent} />
    </div>
    
  );
}

export default HeaderContainer;