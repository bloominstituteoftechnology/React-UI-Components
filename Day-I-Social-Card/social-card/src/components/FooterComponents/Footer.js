import React, { Component } from 'react'
import './Footer.css'
class Footer extends Component {
  constructor () {
    super()
    this.state = {
      likes: 0,
      retweets: 0
    }
  }

  handleLikes = () => {
    this.setState({ likes: this.state.likes + 1 })
    console.log(this.state.likes)
  }

  handleRetweets = () => {
    console.log('retweet')
    this.setState({ retweets: this.state.retweets + 1 })
  }

  render () {
    return (
      <div className='Footer'>
        <div className='message'>
          <i className='far fa-comment' />
        </div>
        <div className='retweet' onClick={this.handleRetweets}>
          <i className='fas fa-sync fa-spin' />
          <span>{this.state.retweets}</span>
        </div>
        <div className='like' onClick={this.handleLikes}>
          <i className='far fa-heart' />
          <span>{this.state.likes}</span>
        </div>
        <div className='DM'>
          <i className='far fa-envelope' />
        </div>
      </div>
    )
  }
}

export default Footer
