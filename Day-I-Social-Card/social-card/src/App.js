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
      liked: false
    }
  }

  likeButton = (prevState) => {
    this.setState(prevState => ({ 
      likeCount: prevState.likeCount + 1,
      liked: true
     }))
  }

  render() {
    return (
      <div>
        <HeaderContainer />
        <CardContainer />
        <Footer
          likes={this.state.likeCount}
          shares={this.state.shareCount}
          liked={this.state.liked}
          likeIt={this.likeButton}
        />
      </div>
    );
  }
};

export default App;
