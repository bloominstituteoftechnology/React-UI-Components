import React from 'react';
import './Header.css';

function HeaderTitle() {
  const lambdaSpanStyle = {
    fontWeight: 'normal',
    color: '#7e8e9d',
    fontSize: '12.5px'
  }

  const dateSpanStyle = {
    fontWeight: 'normal',
    color: '#7e8e9d',
    fontSize: '12.5px',
    letterSpacing: '0.1px'
  }
  return <h3 className="HeaderTitle">Lambda School <span style={lambdaSpanStyle}>@LambdaSchool</span> <span style={dateSpanStyle}>&middot; 26 jan</span></h3>
}

export default HeaderTitle;