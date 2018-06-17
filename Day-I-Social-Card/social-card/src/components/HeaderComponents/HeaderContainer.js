import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = () => {
    return (
        <div className='header-wrapper'>
            <div className='row'>
                <div className="col-2">
                   <ImageThumbnail />
                </div>
                <div className='col-10'>
                    
                    <HeaderTitle />
                    <HeaderContent />
                </div>
            </div>
        </div>

    )

}

export default HeaderContainer;