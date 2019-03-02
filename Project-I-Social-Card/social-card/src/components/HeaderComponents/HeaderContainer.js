import React from "react";
import "./Header.css";



import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';



const HeaderContainer = props => {
  return (
      <div className='header'>
        <HeaderTitle />
        <HeaderContent />
      </div>
  )
}

export default HeaderContainer;


