import React from "react";
import "./Footer.css";
import commentIcon from "./comment-regular.svg";
import heartIcon from "./heart-regular.svg";
import email from "./envelope-regular.svg";
import sync from "./sync-solid.svg";


class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shareCount: 0,
      likeCount: 0
    }

  }

  addShare = ()=> {
    this.setState(prevState => {
      return {shareCount: prevState.shareCount + 1}
   })
  }

  addlike = ()=> {
    this.setState(prevState => {
      return {likeCount: prevState.likeCount + 1}
   })
  }

  render() {
    return (
      <div className="footer">
        <div className="comment">
          <img src={commentIcon} alt="" />
        </div>
        <div className="share" onClick={this.addShare}>
          <img src={sync} alt="" />
          <p className="share-num" >{this.state.shareCount}</p>
        </div>
        <div className="like" onClick={this.addlike}>
          <img src={heartIcon} alt="" />
          <p className="like-num">{this.state.likeCount}</p>
        </div>
        <div className="email">
          <img src={email} alt="" />
        </div>
      </div>
    )
  } 
  
};

export default Footer;
