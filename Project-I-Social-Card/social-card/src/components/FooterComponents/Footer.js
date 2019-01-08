import React from 'react';
import FooterButton from './FooterButton';
import './Footer.css';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shares: 0,
            hearts: 0,
        };
    }

    comment() {
        alert("You commented on this post~!");
    }

    share() {
        let newState = this.state;
        newState.shares += 1;
        this.setState(newState);
    }

    heart() {
        let newState = this.state;
        newState.hearts += 1;
        this.setState(newState);
    }

    mail() {
        alert("You mailed this post~!");
    }

    render() {
        return (
            <div className="footer">  
                <FooterButton onClick={_ => this.comment()}>
                    <i className="far fa-comment"></i>
                </FooterButton>
                <FooterButton onClick={_ => this.share()}>
                    <i className="fas fa-retweet"></i>
                    <div className="footer-button-counter">{this.state.shares}</div>
                </FooterButton>
                <FooterButton onClick={_ => this.heart()}>
                    <i className="far fa-heart"></i>
                    <div className="footer-button-counter">{this.state.hearts}</div>
                </FooterButton>
                <FooterButton onClick={_ => this.mail()}>
                    <i className="far fa-envelope"></i>
                </FooterButton>
            </div>
        );
    }
}

export default Footer;
