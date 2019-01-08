import React from 'react';
import './Footer.css'

class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = {count1: 0, count2: 0}; 
    }

incrementTweet() {
        this.setState((state) => {
            return {count1: state.count1 + 1}
        });
    }

    incrementHeart() {
        this.setState((state) => {
            return {count2: state.count2 + 1}
        });
    }

        handleHeart = (e) => {
        this.incrementHeart();
    }

    handleTweet = (e) => {
        this.incrementTweet();
    }

    render() {
        return (
            <div className="Footer">
                <div className = "footer-icon" ><i id = "#comment-img"className ="far fa-comment"></i></div>
                <div className = "footer-icon" onClick={this.handleTweet}><i className ="fas fa-retweet"> {this.state.count1}</i></div>
                <div className = "footer-icon" onClick={this.handleHeart}><i className ="far fa-heart"> {this.state.count2}</i></div>
                <div className = "footer-icon"><i className ="far fa-envelope"></i></div>
            </div>
        );
    }
}


export default Footer;


