import React from 'react';
import './Header.css';
import moment from 'moment';

const HeaderTitle = (props) => {
    let name = "Lambda School";
    let handle = "LambdaSchool";
    let date = moment().format("D MMM YY");;
    
    return (
      <div className="title-container">
        <h4>{name}</h4>
        <a href="https://twitter.com/lambdaschool?lang=en"><p className="user-handle"><span>@</span>{handle}</p></a>
        <p>⋅ {date}</p>
      </div>
    )
  }

  export default HeaderTitle;
