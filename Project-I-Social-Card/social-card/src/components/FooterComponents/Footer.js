import React from 'react';
import './Footer.css';
import speech from '../../img/speech.png';
import bluespeech from '../../img/speech_blue.png';
import retweet from '../../img/retweet2.png';
import greenRT from '../../img/retweet_green.png';
import heart from '../../img/heart.png';
import pinkHeart from '../../img/heart_pink.png';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            retweets: 0,
            likes: 0,
        }
    }
    render() {
        return (
            <div className="footer">
                <img className="footer-icon" src={speech} onMouseOver={e => (e.currentTarget.src=bluespeech)} onMouseOut={e => (e.currentTarget.src=speech)}/>
                <div className="incrementable">
                    <img className="footer-icon" src={retweet} onClick={this.incrementRTs} onMouseOver={e => (e.currentTarget.src=greenRT)} onMouseOut={e => (e.currentTarget.src=retweet)}/>
                    <div id="retweets">{this.state.retweets}</div>
                </div>
                <div className="incrementable">
                    <img className="footer-icon" src={heart} onClick={this.incrementLikes} onMouseOver={e => (e.currentTarget.src=pinkHeart)} onMouseOut={e => (e.currentTarget.src=heart)}/>
                    <div id="likes">{this.state.likes}</div>
                </div>
                <img className="footer-icon" src={require('../../img/letter.png')}/>
            </div>
        )
    }
    incrementRTs = () => {
        console.log("clicked rt")
        this.setState({retweets: this.state.retweets + 1});
      }
    incrementLikes = () => {
        this.setState({likes: this.state.likes + 1});
    }
}

export default Footer;