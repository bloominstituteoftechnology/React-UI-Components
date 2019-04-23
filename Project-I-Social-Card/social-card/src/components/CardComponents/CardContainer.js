import React from 'react';
import './Card.scss';
import CardContent from './CardContent';
import HeaderContainer from '../HeaderComponents/HeaderContainer';
import ImageThumbnail from '../HeaderComponents/ImageThumbnail';
import Footer from '../FooterComponents/Footer';


function CardContainer (){
    return(
        <div className='CardContainer'>
            <div className='left'>
                <ImageThumbnail />
            </div>
            <div className='right'>
                <HeaderContainer />
                <CardContent />
                <Footer />
            </div>
        </div>
    )
}

export default CardContainer;