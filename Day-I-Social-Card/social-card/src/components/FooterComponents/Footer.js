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
    retweets: 0,
    likes: 0,
    isRetweeted: false,
    isLiked: false,
    heart: "far fa-heart"
  };

  RetweetHandler = () => {
    if (!this.state.isRetweeted) {
      this.setState({
        retweets: ++this.state.retweets,
        isRetweeted: true
      });
    } else {
      this.setState({
        retweets: --this.state.retweets,
        isRetweeted: false
      });
    }
  };

  LikeHandler = () => {
    console.log("Liked!");
    console.log(this.state);
    if (!this.state.isLiked) {
      this.setState({
        likes: ++this.state.likes,
        isLiked: true,
        heart: "fas fa-heart"
      });
    } else {
      this.setState({
        likes: --this.state.likes,
        isLiked: false,
        heart: "far fa-heart"
      });
    }
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
        <i className={this.state.heart} title="Like" onClick={this.LikeHandler}>
          <span className="counter">{this.state.likes}</span>
        </i>
        <i className="far fa-envelope" title="Message" />
      </footer>
    );
  }
}

export default Footer;
