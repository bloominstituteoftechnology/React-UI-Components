import React from "react";
import "./App.css";
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import CardContainer from "./components/CardComponents/CardContainer";
import Footer from "./components/FooterComponents/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shareClicked: false,
      likeClicked: false,
      shareCount: 6,
      likeCount: 4
    };
  }

  setLocalStorage = () => {
    // localStorage
  };

  shareClicked = event => {
    if (this.state.shareClicked === false) {
      const tempNum = this.state.shareCount + 1;
      this.setState({
        shareClicked: true,
        shareCount: tempNum
      });
    } else {
      const tempNum = this.state.shareCount - 1;
      this.setState({
        shareClicked: false,
        shareCount: tempNum
      });
    }
  };

  likeClicked = event => {
    if (this.state.likeClicked === false) {
      const tempNum = this.state.likeCount + 1;
      this.setState({
        likeClicked: true,
        likeCount: tempNum
      });
    } else {
      const tempNum = this.state.likeCount - 1;
      this.setState({
        likeClicked: false,
        likeCount: tempNum
      });
    }
  };

  render() {
    return (
      <div className="social__card__wrapper">
        <HeaderContainer />
        <CardContainer />
        <Footer
          shareCount={this.state.shareCount}
          likeCount={this.state.likeCount}
          shareClicked={this.shareClicked}
          likeClicked={this.likeClicked}
        />
      </div>
    );
  }
}

export default App;
