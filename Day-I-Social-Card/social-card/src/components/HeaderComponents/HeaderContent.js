import React from 'react';
import './Header.css';
import HeaderTitle from "./HeaderTitle";

const HeaderContent = () =>{
  return(
    <div className ="header">
      <HeaderTitle/>
      <p>let's learn react by building simple interfaces with componenents.Don't try to overthink it 
        just keep simple and have fun.Once you feel comfortable using component you are well
        on your way to mastering react.
      </p>
    </div>
  );
}

export default HeaderContent;