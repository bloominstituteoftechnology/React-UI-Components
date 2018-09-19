import React from 'react';
import './Header.css';

export const HeaderTitle = (props) => {
    let name = "Lambda School";
    let handle = "@LambdaSchool";
    let date = "· 19 Sep";
    
    return (
      <div>
        <h3 className="user-name">{name}</h3>
        <p className="user-handle"><span>@</span>{handle}</p>
        <p>{date}</p>
      </div>
    )
  }

  export default HeaderTitle;