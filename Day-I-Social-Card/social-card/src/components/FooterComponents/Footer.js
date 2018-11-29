import React from 'react';
import MessageBubble from './MessageBubble';
import Heart from './Heart';
import Refresh from './Refresh';
import DirectMessage from './DirectMessage';



const Footer = (props) => {

return <div className="footer">
            <div className="footerFavicons">
                <MessageBubble />
                <Refresh />
                <Heart />
                <DirectMessage />
            </div>
       </div>
}


export default Footer;
