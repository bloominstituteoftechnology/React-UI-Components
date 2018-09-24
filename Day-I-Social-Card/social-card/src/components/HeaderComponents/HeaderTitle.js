import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import moment from 'moment';

const HeaderTitle = () => {
    return (
      <div className="header-title-wrapper">
        <div className="header-title">
          <h4 className="appTitle">Lambda School</h4>
          <p className="emailAddress">info@LambdaSchool</p>
          <p className="separator">•</p>
          <p className="dateStamp">{moment().format("D MMM YYYY")}</p>
        </div>
          <br></br>
    </div>
    )
  }

export default HeaderTitle;
// export default (props) => <div className={`btn-borders NumberButton ${props.btnWidth}`}>{props.children}</div> 
// stateless functional component ( no this.state object)