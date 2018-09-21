import React from 'react';
import './Header.css';

const HeaderContainer = () => {
    return (<div className="hc-main">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"></link>
      <ImageThumbnail />
      <HeaderContainerLeft />
    </div>);
  };
  
  const ImageThumbnail = () => {
    return(<div>
      <img className="hc-image" src="https://ibin.co/3whrpKSBbZ81.png" alt="Lambda School Logo"></img>
    </div>);
  };
  
  const HeaderTitle = () => {
    return (<div className="ht-main">
      <h4 className="ht-main-name">Lambda School</h4>
      <p className="ht-username">@LambdaSchool</p>
      <p>&#183; 26 jan</p>
      </div>
      );
  };
  
  const HeaderContent = () => {
    return (<div className="hc-main-content">
      <p>Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!</p>
    </div>);
  };
  
  const HeaderContainerLeft = () => {
    return (<div>
      <HeaderTitle />
      <HeaderContent />
    </div>);
  };

  export default HeaderContainer;