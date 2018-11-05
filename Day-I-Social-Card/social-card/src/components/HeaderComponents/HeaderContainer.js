import React from 'react';
import './Header.css';

import Thumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const Header = () =>(
    <div class='header'>
        <Thumbnail />
        <HeaderTitle />
        <HeaderContent />
    </div>
);

export default Header;