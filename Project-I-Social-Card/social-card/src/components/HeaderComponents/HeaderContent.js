import React from 'react';
import './Header.css';

/*  
    PASSABLE PROPS:
    content - The text content to display.
*/

class HeaderContent extends React.Component {
    render() {
        return (
            <p className="header-content">{this.props.content}</p>
        );
    }
}

export default HeaderContent;
