import React from 'react';

import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shareCount: 6,
      likeCount: 4,
      liked: false,
      shared: false
    }
  }

  likeButton = prevState => {
    this.setState(prevState => ({ 
      likeCount: prevState.likeCount + 1,
      liked: true
     }))
  }

  shareButton = prevState => {
    this.setState(prevState => ({
      shareCount: prevState.shareCount +1,
      shared: true
    }))
  }

  render() {
    return (
      <div className='container'>
        <HeaderContainer />
        <CardContainer />
        <Footer
          likes={this.state.likeCount}
          shares={this.state.shareCount}
          liked={this.state.liked}
          shared={this.state.shared}
          likeIt={this.likeButton}
          shareIt={this.shareButton}
        />
      </div>
    );
  }
};

export default App;
