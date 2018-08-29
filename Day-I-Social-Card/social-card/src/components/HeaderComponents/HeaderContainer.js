import React from 'react';
import './Header.css';

import HdrImage from './ImageThumbnail';
import HdrTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => (
     <div className='HeaderContainer'>
        <HdrImage />
        <HdrTitle />
        <HeaderContent />
     </div>
)   



export default HeaderContainer;