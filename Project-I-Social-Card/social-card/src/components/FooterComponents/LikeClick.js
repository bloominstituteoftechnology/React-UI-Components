import React from "react";
import "./Footer.css";

class LikeClick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 7,
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };

  render() {
    return (
      <div className="like-container">
        <i className="material-icons" onClick={this.IncrementItem}>
          favorite_border
        </i>
        <span className="like-cntr">{this.state.clicks}</span>
      </div>
    );
  }
}

export default LikeClick;
