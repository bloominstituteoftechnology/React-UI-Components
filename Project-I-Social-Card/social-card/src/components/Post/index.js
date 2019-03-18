import React from 'react';
import HeaderContainer from '../HeaderComponents';
import CardContainer from '../CardComponents';
import Footer from '../FooterComponents';

const Post = (props) => {
    return <div className="post">
             <HeaderContainer {...props.post.header} />
             <CardContainer {...props.post.card} />
             <Footer reposts={props.post.reposts} likes={props.post.likes} />
           </div>;
};

export default Post;
