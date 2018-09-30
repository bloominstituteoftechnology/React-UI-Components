import React from 'react';
import './Header.css';

class HeaderTitle extends React.Component {
  render() {
    return (
      <h1 className='header-title'>
          Lambda School &nbsp;
          <span>
            @LambdaSchool &bull; 26 Jan
          </span>
      </h1>
    )
  }
}

export default HeaderTitle;
