import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
	constructor(props){
		super(props);
		this.state = {retweets: 0, likes: 0};
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
			<div className="footer">
				<div className="icon"><i className="far fa-comment"></i></div>
				<div className="icon"><i className="fas fa-retweet" onClick={this.incrementRT.bind(this)}></i>{this.state.retweets}</div>
				<div className="icon"><i className="far fa-heart" onClick={this.incrementLikes.bind(this)}></i>{this.state.likes}</div>
				<div className="icon"><i className="far fa-envelope"></i></div>
			</div>
		);
	}
}

export default Footer;