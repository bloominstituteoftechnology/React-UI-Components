import React from 'react';

class MessageBubble extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            clicks:0
        };
    }


  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  render () {
      return (
        <div className="message">
                 <div><img onClick= {this.IncrementItem} className="footer-image" id="messageImageB" alt="bannerpic" src="./images/reactImages/messageBubble.PNG" /> {this.state.clicks}</div>
        </div>
      )
  }

}

export default MessageBubble;

 {/* <img className="footer-image" id="messageImageB" alt="bannerpic" src="./images/reactImages/messageBubble.PNG" /> */}
            {/* <button onClick= {this.IncrementItem}><img className="footer-image" id="messageImageB" alt="bannerpic" src="./images/reactImages/messageBubble.PNG" /> {this.state.clicks}</button> */}