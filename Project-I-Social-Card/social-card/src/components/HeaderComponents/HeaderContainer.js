import React from 'react';
import './Header.css';

function HeaderCotainer() {
    return(
        <div className="container-header">
            <ImageThumbnail/>
            <HeaderYTitle />
        </div>
    );
};

export default HeaderCotainer;