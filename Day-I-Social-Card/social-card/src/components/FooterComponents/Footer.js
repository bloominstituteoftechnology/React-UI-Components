
import React from 'react';
import './Footer.css';

function Footer() {
    let a = 1
    let b = 3
    let c = 5
    let d = 7
    return <footer>
        <div>
            <h4 className="comments">Comments {a}</h4>
            <h4 className="retweets">Retweets {b}</h4>
            <h4 className="likes">Likes {c}</h4>
            <h4 className="messages">Messages {d}</h4>
        </div>
      </footer>;
}

export default Footer