import React from 'react';
import './Header.css';

import Thumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';

const Header = () =>(
    <div>
        <Thumbnail />
        <HeaderTitle />
    </div>
);

export default Header;