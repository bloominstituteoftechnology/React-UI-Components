import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';


function HeaderContainer() {
  return (
        <div>
    <React.Fragment>
      <HeaderTitle title="Lambda School" />
      <HeaderContent text="Let's learn React by building simple interfaces with components. Don't try to over think it, just keep it simple and have fun. Once you feel comfortable using components, you are well on your way to mastering React!" />
    </React.Fragment>
        </div>
  );
}

export default HeaderContainer;