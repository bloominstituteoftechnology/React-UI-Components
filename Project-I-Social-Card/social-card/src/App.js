import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';

class App extends React.Component {
  state = {
    shareCounter: 23,
    heartCounter: 52,
    isLiked: false
  };

  shareHandler = () => {
    this.setState(prevState => ({
      shareCounter: prevState.shareCounter + 1
    }));
  };

  heartHandler = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked
    }));

    if (!this.state.isLiked) {
      this.setState(prevState => ({
        heartCounter: (prevState.heartCounter += 1)
      }));
    } else {
      this.setState(prevState => ({
        heartCounter: (prevState.heartCounter -= 1)
      }));
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
