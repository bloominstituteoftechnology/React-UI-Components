import React from 'react';
import HeaderContainer from '../HeaderComponents';
import CardContainer from '../CardComponents';

const Post = (props) => {
    return <div className="post">
             <HeaderContainer {...props.post.header} />
             <CardContainer {...props.post.card} />
           </div>;
};

export default Post;
