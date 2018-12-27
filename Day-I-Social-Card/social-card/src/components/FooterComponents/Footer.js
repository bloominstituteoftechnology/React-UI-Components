import React from 'react';
import './Footer.css';

class Footer extends React.Component {

    state = {
        likes: 3,
        retweets: 4,
        liked: false,
        retweeted: false
    }

    handleAddLike = () => {
        let numOfLikes = this.state.likes;

        this.state.liked === false ? numOfLikes += 1 : numOfLikes -= 1;

        this.setState({
            likes: numOfLikes,
            liked: !this.state.liked
        })
    }

    handleAddRetweet = () => {
        let numOfRetweets = this.state.retweets;

        this.state.retweeted === false ? numOfRetweets += 1 : numOfRetweets -= 1;

        this.setState({
            retweets: numOfRetweets,
            retweeted: !this.state.retweeted
        })

    }
    

    render() {
    return (
        <div className='FooterContainer'>
            <i className="fa fa-comment-o" aria-hidden="true"></i>
            <div className="retweet">
                <i className={`fa fa-retweet ${this.state.retweeted}`} aria-hidden="true" onClick={this.handleAddRetweet}></i>
                <p className='retweetNumber'>{this.state.retweets}</p>
            </div>
            <div className="like">
                <i className={`fas fa-heart ${this.state.liked}`} aria-hidden="true" onClick={this.handleAddLike}></i>
                <p className="likeNumber">{this.state.likes}</p>
            </div>
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
        </div>
    );
    }
};

export default Footer;

