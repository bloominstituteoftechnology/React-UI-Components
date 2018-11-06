import React from 'react';
import './Header.css';

import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

function HeaderContainer() {
    return (
      <React.Fragment>
          <div class="header-container">
                <ImageThumbnail />
            <div className="header-text">
                <HeaderTitle title="Lambda School" />
                <HeaderContent content="Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!" />
            </div>
          </div>
      </React.Fragment>
    );
  }
  
  export default HeaderContainer;


