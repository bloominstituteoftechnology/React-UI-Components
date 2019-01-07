import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    constructor() {
        super();
        this.state = {
            retweets: 0,
            likes: 0
        }
    }

    render() {
        return(
            <div className="Footer">
                <div className="social-button">
                    <i className="far fa-comment"></i>
                </div>
                <div className="social-button clickable" onClick={(e) => {
                    let newCount = this.state.retweets + 1;
                    this.setState({
                        retweets: newCount
                    });
                }}>
                    <i className="fas fa-sync"></i>  {this.state.retweets}
                </div>
                <div className="social-button clickable" onClick={(e) => {
                    let newCount = this.state.likes + 1;
                    this.setState({
                        likes: newCount
                    });
                }}>
                    <i className="far fa-heart"></i>  {this.state.likes}
                </div>
                <div className="social-button">
                    <i className="far fa-envelope"></i>
                </div>
            </div>
        )
    }
    
}

export default Footer;