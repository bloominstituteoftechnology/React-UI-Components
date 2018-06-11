import React from 'react';
import './Container.css';
import HeaderContainer from '../HeaderComponents/HeaderContainer';
import CardContainer from '../CardComponents/CardContainer';

const Container = () => {
    return (
        <div className='container'>
        <HeaderContainer />
        <CardContainer />
        </div>
    )
};

export default Container;