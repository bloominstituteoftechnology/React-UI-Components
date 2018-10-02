import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer.js';
import CardContainer from './components/CardComponents/CardContainer';

const App = (props) => {
  return (
    <div className="social-card">
      <HeaderContainer
        postDate={props.postDate}
        profileUrl={props.profileUrl}
        profileName={props.profileName}
        profileId={props.profileId}
      >
        {props.headerBody}
      </HeaderContainer>
      <CardContainer
        postTitle="Get Started with React"
        postUrl={props.postUrl}
      >
        {props.cardBody}
      </CardContainer>
    </div>
  );
};

export default App;
