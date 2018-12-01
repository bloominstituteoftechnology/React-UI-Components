import React from "react";
import "./Footer.css";

class TweetClick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 5
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };

  render() {
    return (
      <div className="tweet-container">
        <i className="material-icons" onClick={this.IncrementItem}>
          autorenew
        </i>
        <span className="tweet-cntr">{this.state.clicks}</span>
      </div>
    );
  }
}

export default TweetClick;
