import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      favorites: 6,
      retweets: 8
    };
  }

  handleFooterClick = e => {
    console.log(e.target);
    if (e.target.classList.contains('fa-retweet')) {
      if (e.target.classList.contains('retweet')) {
        e.target.classList.remove('retweet');
        this.setState({ retweets: this.state.retweets - 1 });
      } else {
        e.target.classList.add('retweet');
        this.setState({ retweets: this.state.retweets + 1 });
      }
    } else if (e.target.classList.contains('fa-heart')) {
      if (e.target.classList.contains('favorite')) {
        e.target.classList.remove('favorite');
        e.target.classList.add('far');
        e.target.classList.remove('fas');
        this.setState({ favorites: this.state.favorites - 1 });
      } else {
        e.target.classList.add('favorite');
        e.target.classList.remove('far');
        e.target.classList.add('fas');
        this.setState({ favorites: this.state.favorites + 1 });
      }
    }
  };

  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <CardContainer />
        <Footer
          retweets={this.state.retweets}
          favorites={this.state.favorites}
          handleFooterClick={this.handleFooterClick}
        />
      </div>
    );
  }
}

export default App;
