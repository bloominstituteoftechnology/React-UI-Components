import React from 'react';
import './Footer.css';

let retweetCount = 0;
let heartCount = 0;

// function Footer() {

//     return (
//         <div className='footer-content'>
//             <div className='comment-icon icons'><i class='far fa-comment'></i></div> 
//             <div className='retweet-icon icons'><i class='fas fa-retweet' onClick={() => {
//                 console.log("clicked to retweet");
//             }}> {retweetCount}</i></div> 
//             <div className='heart-icon icons'><i class='far fa-heart' onClick={() => {
//                 console.log('clicked on heart');
//             }}> {heartCount}</i></div> 
//             <div className='envelope-icon icons'><i class='far fa-envelope'></i></div> 
//         </div>
//     );
// }

// export default Footer;

class Footer extends React.Component {
    constructor(props){
        super(props);
        this.rt = retweetCount;
        this.hc = heartCount;

        this.state = {retweets: this.rt};
        this.state = {hearts: this.hc};
    }

    render() {
        return (
            <div className='footer-content'>
                <div className='comment-icon icons'><i class='far fa-comment'></i></div> 
                <div className='retweet-icon icons'><i class='fas fa-retweet' onClick={() => {
                    this.rt++;
                    this.setState({retweets: this.rt});
                }}> {this.rt}</i></div> 
                <div className='heart-icon icons'><i class='far fa-heart' onClick={() => {
                    this.hc++;
                    this.setState({hearts: this.hc});
                }}> {this.hc}</i></div> 
                <div className='envelope-icon icons'><i class='far fa-envelope'></i></div> 
            </div>
        );
    }
}

export default Footer;