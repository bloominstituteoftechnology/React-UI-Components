import React from "react";
import "./Header.css";
import HeaderContent from "./HeaderContent";
import HeaderTitle from "./HeaderTitle";
import ImageThumbnail from "./ImageThumbnail";

function HeaderContainer() {
  return (
    <div className="Header-Container">
      <ImageThumbnail
        src="https://ibin.co/3whrpKSBbZ81.png"
        alt="Lambda Image"
      />
      <div className="Header-Text">
        <HeaderTitle
          title="Lambda School"
          taggedPerson="LambdaSchool"
          date="26 Jan"
        />
        <HeaderContent content="Let's learn React by building  simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to masting React!" />
      </div>
    </div>
  );
}

export default HeaderContainer;
