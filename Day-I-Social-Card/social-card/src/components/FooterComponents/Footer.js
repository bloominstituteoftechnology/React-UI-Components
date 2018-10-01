import React from "react";
import "./Footer.css";

// const Footer = () => {
//   return (
//     <footer>
//       <i className="far fa-comment" title="Comment" />
//       <i className="fas fa-sync-alt" title="Retweet">
//         <span>{}</span>
//       </i>
//       <i className="far fa-heart" title="Like" onClick={}>
//         <span>{}</span>
//       </i>
//       <i className="far fa-envelope" title="Message" />
//     </footer>
//   );
// };

class Footer extends React.Component {
  state = {
    retweets: 4,
    likes: 0
  };

  RetweetHandler = () => {
    this.setState({ retweets: 5 });
  };

  LikeHandler = () => {
    console.log("Liked!");
    this.setState({ likes: 1 });
  };

  render() {
    return (
      <footer>
        <i className="far fa-comment" title="Comment" />
        <i
          className="fas fa-sync-alt"
          title="Retweet"
          onClick={this.RetweetHandler}
        >
          <span className="counter">{this.state.retweets}</span>
        </i>
        <i className="far fa-heart" title="Like" onClick={this.LikeHandler}>
          <span className="counter">{this.state.likes}</span>
        </i>
        <i className="far fa-envelope" title="Message" />
      </footer>
    );
  }
}

export default Footer;
