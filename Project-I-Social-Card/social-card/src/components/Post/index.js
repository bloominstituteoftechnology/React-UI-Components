import React from 'react';
import HeaderContainer from '../HeaderComponents';

const Post = (props) => {
    return <div className="post">
             <HeaderContainer {...props.post.header} />
           </div>;
};

export default Post;
