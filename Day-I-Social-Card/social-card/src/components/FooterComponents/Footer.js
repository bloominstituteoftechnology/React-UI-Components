import React from 'react';


const Footer = (props) => {

return <div className="footer">
            <div className="footerFavicons">
                <div className="message"><img onClick={this.IncrementItem} className="footer-image" id="messageB" alt="bannerpic" src="./images/reactImages/messageBubble.PNG"></img></div>
                <div className="refresh"><img onClick={this.IncrementItem} className="footer-image" id="refreshB" alt="bannerpic" src="./images/reactImages/refreshImage.PNG"></img></div>
                <div className="heart"><img onClick={this.IncrementItem} className="footer-image" id="heartB" alt="bannerpic" src="./images/reactImages/heartImage.PNG"></img></div>
                <div className="direct-message"><img onClick={this.IncrementItem} className="footer-image" id="messageImageB" alt="bannerpic" src="./images/reactImages/messageImage.PNG"></img></div>
            </div>
       </div>
}

class Adder extends Footer {
        constructor (props) {
                super(props);
                this.state = {
                        clicks:0,
                }
        }
}

const IncrementItem = () => {
        this.setState({clicks: this.state.clicks + 1});
}


export default Footer;
