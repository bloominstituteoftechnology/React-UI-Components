import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer'
import CardContainer from './components/CardComponents/CardContainer'
import {FlexColumn} from "./components/Elements/Flex";

const App = () => {
    return (
        <FlexColumn alignEnd width="500px" padding={50}>
            <HeaderContainer/>
            <CardContainer />
        </FlexColumn>
    );
};

export default App;
