import React from 'react';

class Post extends React.Component {
    render() {
        return <div><h2>{this.props.post.header.name}</h2><p>{this.props.post.header.content}</p></div>;
    }
}

export default Post;
