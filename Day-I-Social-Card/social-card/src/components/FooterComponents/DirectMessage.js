import React from 'react';

class DirectMessage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            clicks:0
        }
    }


IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  render () {
      return (
        <div className="direct-message">
            <img onClick={this.IncrementItem} className="footer-image" id="messageB" alt="bannerpic" src="./images/reactImages/messageImage.PNG"></img>
        </div>
      )
  }

}

export default DirectMessage;