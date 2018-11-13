import React, { Component } from 'react';
import './Header.css'

import Title from './HeaderTitle';
import Content from './HeaderContent';
class Header extends Component {

    render() {
        return (
            <div className="header">
                <div className="headercontent">
                    <Title />
                    <Content />
                </div>
            </div>
        );
    }

}

export default Header;