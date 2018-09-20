import React from 'react';
import './Header.css';
import HeadImg from './ImageThumbnail';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';


const HeaderContainer = ()=>{
    return(
        <div className='headImg'>
            <HeadImg />
            <div className="headContent">
                <HeaderTitle />
                <HeaderContent />
            </div>
        </div>

       
    );
};
export default HeaderContainer;