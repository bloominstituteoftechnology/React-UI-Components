import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
    return(
        <React.Fragment >
            <div className='header-container'>
                 <ImageThumbnail />
                < div className='content'>
                    <div className='headers'>
                    <HeaderTitle title='Lambda School' title2='@LambdaSchool &#183; 26 jan'   />
                    </div>
                    
                    <HeaderContent />
                </div>
            </div>
        </React.Fragment>
    );
};


export default HeaderContainer;