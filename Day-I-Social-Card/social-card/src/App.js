import React from 'react';
import './App.css';

import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';

const App = () => {
    return (
        <section className='social-card'>
            <HeaderContainer />
            <CardContainer />
        </section>
    );
};

export default App;



