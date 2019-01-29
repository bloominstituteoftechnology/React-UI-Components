import React, { Component } from 'react';
import './App.css';
import SideIcon from './SideIcon';
import Handle from './Handle';
import Status from './Status';
import Preview from './Preview';

class Card extends Component {
  render() {
    return (
      <div className="container">
        <SideIcon src="https://pbs.twimg.com/profile_images/973277209644249089/0Te2jtBH_400x400.jpg"/>
        <div className="card-container">
          <Handle 
            user="Lambda School" 
            twitter="@LambdaSchool"
            date=" · 26 jan "
          />
          <Status 
            status="Let's learn React by building simple interfaces with components. Don't try to overthink it. Just keep it simple and have fun.Once you feel comfortable using components you are well on your way to mastering React!"/>
          <Preview 
            getstarted="Get Started With React!"
            previewstatus="React makes it painless to create interactive UIs. Design simple views for each state in your application."
            website="reactjs.org"
          />
        </div>
      </div>
    );
  }
}

export default Card;
