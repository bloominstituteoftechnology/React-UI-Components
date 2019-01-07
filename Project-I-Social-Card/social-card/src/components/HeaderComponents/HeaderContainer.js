import React from 'react';
import './Header.css';


import { Thumb } from './ImageThumbnail';
import { Post } from './HeaderContent';
import { Title } from './HeaderTitle';

function HeadContain() {
    return (
    <div className="postcomplete">
        <Thumb />
        <div className="posthold">
            <Title />
            <Post />
        </div>
    </div>
    )
}


export default HeadContain;