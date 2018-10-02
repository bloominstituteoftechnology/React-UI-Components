import React from 'react';
import './Header.css';

const HeaderTitle = props => { // props = { type: "primary"}

    return (
      <div class = 'title-content'>
      <div class = 'title-content-top'> 
        <h1 class = 'name'>Lambda School</h1>
        <a class='twitterlink' href="https://twitter.com/lambdaschool?lang=en">@LambdaSchool</a>
        <span class="short-timestamp " data-aria-label-part="last" data-time="1528790237" data-time-ms="1528790237000" data-long-form="true">Jun 12</span>
      </div>
      <div class = 'title-content-bottom'> 
        <p class = 'tweet'>Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel confortable using components you are well on your way to mastering React!</p>
      </div>
      </div>
    );
}

export default HeaderTitle;