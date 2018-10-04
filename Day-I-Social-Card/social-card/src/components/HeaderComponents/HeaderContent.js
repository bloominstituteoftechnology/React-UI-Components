import React from 'react';
import './Header.css';

const HeaderContent = () => {
  return (
    <div className="header-content">
      <br></br>
        <p>Let's learn React by building simple interfaces with components. Don't try to overthink it (HAHH! fat chance David), just keep it simple and have fun.</p>

  </div>
  )
}


export default HeaderContent;
//export default (props) => <div className={`btn-borders NumberButton ${props.btnWidth}`}>{props.children}</div> 
// stateless functional component ( no this.state object)