import React from 'react';
import './Header.css';
import CardContainer from "../CardComponents/CardContainer";
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer=()=>{

    return(
        <div className = "header">
        <div className="header-first">
        <ImageThumbnail />
            <div className= "headerTitleContent" >
               <HeaderTitle />
               <HeaderContent/>
            </div>
        </div>

</div>
);


};
export default HeaderContainer;

