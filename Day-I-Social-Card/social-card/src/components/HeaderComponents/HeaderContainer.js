import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = () => {
    return (
        <div className="header-container">
            <ImageThumbnail />
        </div>
    )
}

// const rootElement = document.getElementById('root');
// ReactDOM.render(<HeaderContainer />, rootElement);

export default HeaderContainer;