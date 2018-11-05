import React from 'react';
import './Header.css';

import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';

function HeaderContainer(props) {

  const textContent = "Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!";

  return (

    <React.Fragment>

      <ImageThumbnail src="https://ibin.co/3whrpKSBbZ81.png" />
      <HeaderTitle title="Lambda School" handle="@LambdaSchool" timestamp="26 jan" />
      <HeaderContent content={textContent}/>

    </React.Fragment>

  );

}

export default HeaderContainer;
