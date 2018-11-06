import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';

function HeaderContainer(){
  return (
    <React.Fragment>
      <HeaderTitle title= 'Lambda School' />
      <HeaderTitle tags='@LambdaSchool 	• 26 jan' />
      <HeaderContent description='Lets learn React by building simple interfaces with components. Dont try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!' />
    </React.Fragment>
  );
}

export default HeaderContainer;
