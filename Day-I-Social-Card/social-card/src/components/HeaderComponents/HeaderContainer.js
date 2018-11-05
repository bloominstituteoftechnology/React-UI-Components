import React from 'react';
import './Header.css';

import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

function HeaderContainer(props) {

  const textContent = "Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!";

  return (

    <div className="card-header">

      <ImageThumbnail src="https://yt3.ggpht.com/a-/AN66SAw9C1HPxBru_POv5bcGj8yLp8OSc18VosnELA=s288-mo-c-c0xffffffff-rj-k-no" />

      <div>

        <HeaderTitle title="Lambda School" handle="@LambdaSchool" timestamp="26 jan" />
        <HeaderContent content={textContent}/>

      </div>

    </div>

  );

}

export default HeaderContainer;
