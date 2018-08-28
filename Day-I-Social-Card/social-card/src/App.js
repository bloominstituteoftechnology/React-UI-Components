import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer'


const App = () => {

  this.state = {
      userName: "Lambda School",
      userTag: "@LambdaSchool",
      retweets: 6,
      likes: 4      
  };
  return (
    <div className="main-wrapper">
      <div className="inner-wrapper">
      {console.log(this.state.useName)}
        <HeaderContainer username={this.state.userName} usertag={this.state.userTag}/>
        <CardContainer />
        <Footer retweets={this.state.retweets} likes={this.state.likes} clickEventTweets={this.state.clickTweets} clickEventLikes={this.state.clickLikes} appRetweets={this.state} />
      </div>
    </div>
  );
};

export default App;
