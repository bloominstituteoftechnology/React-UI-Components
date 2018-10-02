import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';

const HeaderContent = props => {
  return (
    <div>
      <HeaderTitle />
      <p className="HeaderContent__p">
        Let's learn react by building simple interfaces with components. Don't
        try to overthink it, just keep it simple and have fun. Once you feel
        comfortable using components, you are well on your way to mastering
        react.
      </p>
    </div>
  );
};

export default HeaderContent;
