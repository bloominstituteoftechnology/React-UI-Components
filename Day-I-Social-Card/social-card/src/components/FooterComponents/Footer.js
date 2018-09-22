import React from 'react';
import "./Footer.css";


class Footer extends React.Component {
    constructor () {
         super()
        // Can use two counter to count independently of eachother
        this.state = {
            count:0,
            count2:0,
            email: 'lambda@lambdaschool.org'
        }

    }
    // We are incrementing each time somone clicks a the re-sync icon
     increment = () => {
      this.setState({
          count2: this.state.count2 + 1
      })
    }
    // We are incrementing each time somone clicks a heart icon
     countUp = () => {
        this.setState({
            count: this.state.count + 1
        });
    }
    emailTo = () => {
        window.location.href = `mailto:${this.state.email}`;
    }
   
    
    render () {
        return (
              <div className="chat-bubble">
                {" "}
                <i className="far fa-comment"/>
                    {" "}
                    <div className= "sync" onClick={this.countUp}>
                        <i className="fas fa-sync" /><p>{this.state.count}</p></div>
            
                    {" "}
                    <div className="heart" onClick={this.increment}>
                        <i className="fas fa-heart" /><p>{this.state.count2}</p></div>
                    {" "}
                    <a href={`mailto:${this.state.email}`}> 
                    <i className="far fa-envelope" /></a>
              </div>
            );
    } 
}

export default Footer;