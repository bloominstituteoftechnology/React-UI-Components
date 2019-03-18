import React from 'react';
import './Footer.css';
import { ReactComponent as Comment } from './comment.svg';
import { ReactComponent as Heart } from './heart.svg';
import { ReactComponent as Repost } from './repost.svg';
import { ReactComponent as Email } from './email.svg';

class Footer extends React.Component {
    render() {
    return <div className="post-footer">
             <Comment />
             <div>
               <Repost className={this.props.reposted ? "reposted" : ""}
                       onClick={this.props.handleReposting}/>
               <span>
                 {this.props.reposts}
               </span>
             </div>
             <div>
               <Heart className={this.props.liked ? "liked" : ""}
                       onClick={this.props.handleLiking}/>
               <span>
                 {this.props.likes}
               </span>
             </div>
             <Email />
           </div>;
    }
}

export default Footer;
