import React from 'react';
import './Post.css';
import HeaderContainer from '../HeaderComponents';
import CardContainer from '../CardComponents';
import Footer from '../FooterComponents';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = { reposted: props.reposted,
                       reposts: props.reposts,
                       liked: props.liked,
                       likes: props.likes };
        this.handleReposting = this.handleReposting.bind(this);
        this.handleLiking = this.handleLiking.bind(this);
    }
    handleReposting() {
        this.setState({ reposts: this.state.reposts + (this.state.reposted ? -1 : 1),
                        reposted: !this.state.reposted });
    }
    handleLiking() {
        this.setState({ likes: this.state.likes + (this.state.liked ? -1 : 1),
                        liked: !this.state.liked });
    }
    render() {
        return <div className="post">
             <HeaderContainer {...this.props.header} />
             <CardContainer {...this.props.card} />
                 <Footer reposts={this.state.reposts} reposted={this.state.reposted} handleReposting={this.handleReposting}
                     likes={this.state.likes} liked={this.state.liked} handleLiking={this.handleLiking} />
           </div>;
    }
}

export default Post;
