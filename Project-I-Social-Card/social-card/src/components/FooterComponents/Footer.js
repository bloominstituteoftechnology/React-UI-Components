import React from 'react';
import './Footer.css';


// const Footer = () => {
//     return (
//         <div className="Footer">
//             <i className ="far fa-comment"></i>
//             <i className ="fas fa-sync-alt">   0</i>
//             <i className ="far fa-heart">   0</i>
//             <i className ="far fa-envelope"></i>
//         </div>
//     );
// };
class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = {count1: 0, count2: 0}; 
    }
    saySomething = (something) => {
       alert(something);
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

    handleClick = (e) => {
        this.saySomething("element clicked");
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
                <span onClick={this.handleClick}><i className ="far fa-comment"></i></span>
                <span onClick={this.handleTweet}><i className ="fas fa-sync-alt">{this.state.count1}</i></span>
                <span onClick={this.handleHeart}><i className ="far fa-heart">{this.state.count2}</i></span>
                <span onClick={this.handleClick}><i className ="far fa-envelope"></i></span>
            </div>
        );
    }
}
export default Footer;