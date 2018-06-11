import React from 'react';
import './Container.css';
import HeaderContainer from '../HeaderComponents/HeaderContainer';
import CardContainer from '../CardComponents/CardContainer';
import Footer from '../FooterComponents/Footer';

const Container = () => {
    return (
        <div className='container'>
        <HeaderContainer />
        <CardContainer />
        <Footer />
        </div>
    )
};

export default Container;