import React from 'react';
import './Header.css';
import { ImageThumbnail } from "../HeaderComponents/ImageThumbnail";
import { HeaderTitle } from "../HeaderComponents/HeaderTitle";
import { HeaderContent } from "../HeaderComponents/HeaderContent";


export const HeaderContainer = () =>{


    return <div className="header"><ImageThumbnail /> 
    <div className= "headerLeft"><HeaderTitle /><HeaderContent/></div>
    </div>

}