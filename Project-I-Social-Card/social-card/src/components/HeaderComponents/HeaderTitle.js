import React from 'react';
import './Header.css';


const HeaderTitle = () => {
  return (
    <div className="headerFlex">
      
       <img className="lambdaImg" src="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png" alt="logo"/>
      <div className="headerWords">
            <p>Lambda School @LambdaSchool 26 jan </p>
            <p>Let's learn React by building simple interfaces with
        components. Don't try to overthink it. Just keep it simple
        and have fun. Once you feel comfortable using components
        you are well on your way to mastering React!</p>
      </div>
	</div>
  );
}

export default HeaderTitle;