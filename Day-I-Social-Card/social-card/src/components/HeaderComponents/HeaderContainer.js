import React from 'react';
import './Header.css';

function headerTitle(props) {
    return (
      <div >
       <div>
       <imageThumbnail />


       </div>
       <div>
       <headerContent />


       </div>
            <h1 className="header title" > Lambda School < /h1>  <h5 className = "header titleb">@LambdaSchool * 26 jan </h5>
            <h4 className="header Para" > Let 's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun.Once you feel confortable using components you are well o your way to mastering React! </h4>

        </div>
    );
}

export default HeaderTitle;
