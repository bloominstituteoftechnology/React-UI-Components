import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';

class App extends React.Component {
  state = {
    shareCounter: 0,
    heartCounter: 0,
    isLiked: false
  };

  shareHandler = () => {
    this.setState({
      shareCounter: 1
    });
  };

  heartHandler = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked
    }));

    if (!this.state.isLiked) {
      this.setState({
        heartCounter: 1
      });
    } else {
      this.setState({
        heartCounter: 0
      });
    }
  };

  render() {
    return (
      <div className='App'>
        <HeaderContainer />
        <CardContainer
          shareCounter={this.state.shareCounter}
          heartCounter={this.state.heartCounter}
          isLiked={this.state.isLiked}
          shareHandler={this.shareHandler}
          heartHandler={this.heartHandler}
        />
      </div>
    );
  }
}

export default App;
