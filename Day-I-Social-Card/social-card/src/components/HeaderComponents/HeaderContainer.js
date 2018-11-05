import React from "react";
import "./Header.css";

function HeaderContainer() {
  return (
    <React.Fragment>
      <ImageThumbnail src="https://ibin.co/3whrpKSBbZ81.png" />
      <HeaderTitle
        title="Lambda School"
        taggedPerson="LambdaSchool"
        date="26 Jan"
      />
      <HeaderContent content="Let's learn React by building  simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to masting React!" />
    </React.Fragment>
  );
}

export default HeaderContainer;
