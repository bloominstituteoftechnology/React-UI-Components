import React from 'react';
import './Header.css';

const HeaderTitle = (props) => {
    return (
        <div className="headertitle">
            <h1 className="headertitle--title">Lambda School <span className="headertitle--subtitle">@LambdaSchool - 26 jan <span>{props.day}</span></span></h1>
            <p className="headertitle--contentText">Let's  learn React by building simple interfaces with components. 
                Don't try to overthink it, just keep it simple and have fun. Once you
                 feel confortable using components you are well 
                 on your way to mastering React</p>
        </div>
     );
  }
export default HeaderTitle;
