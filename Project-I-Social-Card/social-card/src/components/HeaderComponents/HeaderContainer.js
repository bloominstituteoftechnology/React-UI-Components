import React from "react";
import "./Header.css";
import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";

const HeaderContainer = props => {
  return (
    <div className="header">
      <ImageThumbnail imageSource={props.profile.imageSource} />
      <div className="header-content-container">
        <HeaderTitle
          profileName={props.profile.profileName}
          profileHandle={props.profile.profileHandle}
          date={props.profile.date}
        />
        <HeaderContent headerContent={props.profile.headerContent} />
      </div>
    </div>
  );
};

export default HeaderContainer;
