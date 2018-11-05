import React from 'react';
import './Header.css';


const HeaderContainer  = props => {
    return (
     <header className = "headerStyle">
         <ImageThumbnail/>
         <div className = "headerText">
         <HeaderTitle></HeaderTitle>
         </div>
        <HeaderContent></HeaderContent>
       
    </header>
);
};