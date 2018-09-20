import React, {Component} from 'react';
import './Footer.css';


class Footer extends Component { 
    constructor(props) { 
        super(props);
        this.state = {retweets: 0, likes: 0}
    }

    incrementRT() {
        this.setState((prevState) => ({
            retweets: prevState.retweets + 1
        }));
    }

    incrementLikes() {
        this.setState((prevState) => ({
            likes: prevState.likes + 1
        }));
    };

render() {
    return (
        <div class="footer">
        <div className="icon" className="comment"></div>
        <div className="icon" className="retweet" onClick={this.incrementRT.bind(this)}>{this.state.retweets}<img src="download.png"></img></div>
        <div className="icon" className="likes" onClick={this.incrementLikes.bind(this)}>{this.state.likes}<img src="download-1.png"></img></div>
        <div className="icon" className="letter"></div>

        </div>
    )
}
}

export default Footer