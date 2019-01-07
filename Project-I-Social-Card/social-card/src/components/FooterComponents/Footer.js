import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    constructor() {
        super();
        this.state = {
          likes: 0,
          retweets: 0
        };
    }

    handleLikes = () => {
        this.setState({ likes: this.state.likes + 1 })
    }

    handleTweets = () => {
        this.setState({ retweets: this.state.retweets + 1 })
    }

    render(){
        return (
            <div className="Footer">
              <i className="far fa-2x fa-comment"></i>
              <a href="#" onClick={this.handleTweets}><i className="fa fa-2x fa-retweet"> {this.state.retweets} </i></a>
              <a href="#"><i className="far fa-2x fa-heart" onClick={this.handleLikes}> {this.state.likes} </i></a>
              <i className="far fa-2x fa-envelope"></i>
            </div> 
          );
        };
    }

  export default Footer;
  