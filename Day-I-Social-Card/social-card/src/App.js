import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer'
import {FlexColumn} from "./components/Elements/Flex";

const App = () => {
    return (
        <FlexColumn width="500px" padding={50}>
            <HeaderContainer/>

        </FlexColumn>
    );
};

export default App;
