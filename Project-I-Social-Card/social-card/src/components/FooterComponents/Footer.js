import React from 'react';
import './Footer.css'

function like(likes){
    return likes++
}

class Footer extends React.Component{
    constructor(){
        super();
        this.state = {
            likes: 4,
            retweets: 6
        }
    }

    like = e => {
        this.setState({
            likes: this.state.likes + 1
        })
    }

    retweet = e => {
        this.setState({
            retweets: this.state.retweets + 1
        })
    }

    render(){
        return(
            <div className='footer-container'>
                <div><i class="far fa-comment"></i><p></p></div>
                <div onClick={this.retweet}><i class="fas fa-retweet"></i><p>{this.state.retweets}</p></div>
                <div onClick={this.like}><i class="far fa-heart"></i><p>{this.state.likes}</p></div>
                <div><i class="far fa-envelope"></i><p></p></div>
            </div>
        )
    }
}

export default Footer;