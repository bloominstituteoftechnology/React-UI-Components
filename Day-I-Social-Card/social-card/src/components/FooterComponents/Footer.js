import React from 'react';
import './Footer.css';

class Footer extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			commentCount: 0,
			replyCount: 0,
			likeCount: 0,
		}

		this.handleComment = this.handleComment.bind(this)
		this.handleReply = this.handleReply.bind(this)
		this.handleLike = this.handleLike.bind(this)
		
	}
	handleComment (event) {
		this.setState(prevState=>{
			return {
				commentCount: prevState.commentCount + 1
			}	
		})
	}
	handleReply (event) {
		this.setState(prevState=>{
			return {
				replyCount: prevState.commentCount + 1
			}
		})
	}
	handleLike (event) {
		this.setState(prevState=>{
			return {
				likeCount: prevState.likeCount + 1
			}
		})
	}
	render(){
		return (
			<div className="footer">
				<i onClick={this.handleComment} className="icon far fa-comment"> {!this.state.commentCount ? '' : this.state.commentCount}</i>
				<i onClick={this.handleReply} className="icon fas fa-sync"> {!this.state.replyCount ? '' : this.state.replyCount}</i>
				<i onClick={this.handleLike} className="icon far fa-heart"> {!this.state.likeCount ? '' : this.state.likeCount}</i>
				<i className="icon far fa-envelope"></i>
			</div>
		);
	}
	
};

export default Footer;