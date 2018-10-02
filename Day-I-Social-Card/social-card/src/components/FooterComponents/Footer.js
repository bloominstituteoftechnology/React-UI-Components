import React, { Component } from 'react';
import './Footer.css';
import Icon from './Icon';

class Footer extends Component {
  state = {
    votes: [
      { name: "comment", upvotes: 2 },
      { name: "share", upvotes: 6 },
      {name: "like", upvotes: 4}
    ]
  };
  // set up add function for upvotes
  addToUpvote = (element) => {
    // get the element ID for comparison
    const elementID = element.target.id;
    // set a variable to map the icons and compare to element ID
    const changeVote = this.state.votes.map((icon) => {
      const tempIcon = icon;
      // compare element ID with each icon
      if (elementID === tempIcon.name) {
        // add a vote to upvotes
        tempIcon.upvotes += 1;
        return tempIcon;
      }

      });
      this.setState({
        // update state based on changeVote from above in addToUpvote
        changeVote
    });
  }
  render() {
    return (
      <section className='footer'>
        <Icon icon='icon far fa-comment' upvotes={this.state.votes[0].upvotes} id='comment' onClick={this.addToUpvote}/>
      <Icon icon='icon fas fa-sync' upvotes={this.state.votes[1].upvotes} id='share' onClick={this.addToUpvote} />
        <Icon icon='icon far fa-heart' upvotes={this.state.votes[2].upvotes} id='like' onClick={this.addToUpvote} />
        <Icon icon='icon far fa-envelope' id='mail'/>
      </section>
    );
  }
}

export default Footer;
