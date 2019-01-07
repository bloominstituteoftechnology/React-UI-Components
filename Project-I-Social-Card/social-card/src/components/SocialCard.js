import React, { Component } from 'react';

import HeaderContainer from './HeaderComponents/HeaderContainer';
import CardContainer from './CardComponents/CardContainer';
import Footer from './FooterComponents/Footer';

class SocialCard extends Component {
    constructor() {
        super();

        this.retweet = this.retweet.bind(this);
        this.like = this.like.bind(this);

        this.state = {
            retweets: 6,
            likes: 4
        }
    }

    retweet() {
        this.setState({
            retweets: this.state.retweets + 1
        });
    }

    like() {
        this.setState({
            likes: this.state.likes + 1
        });
    }
    
    render() {
        return(
            <div className="SocialCard">
                <HeaderContainer />
                <CardContainer />
                <Footer retweet={this.retweet} 
                        like={this.like} 
                        retweets={this.state.retweets} 
                        likes={this.state.likes} />
            </div>
        )
    }

}

export default SocialCard;