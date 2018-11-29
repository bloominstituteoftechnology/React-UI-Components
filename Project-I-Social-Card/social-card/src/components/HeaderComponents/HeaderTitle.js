import React from 'react';
import './Header.css';

const HeaderTitle = props => {
  return (
    <div>
    <h1 class="display-name">Lambda School</h1>
    <h2 class="user-name">@LambdaSchool</h2>
    <time dateTime="2018-1-26">26 jan</time>
    </div>
  )
}

export default HeaderTitle;
