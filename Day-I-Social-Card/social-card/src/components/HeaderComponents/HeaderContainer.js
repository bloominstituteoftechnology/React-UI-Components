import React from 'react';
import './Header.css';
import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";

const HeaderContainer = () => {
    return (
        <header className="card-header">
            <section className="card-header-thumbnail-holder">
                <ImageThumbnail/>
            </section>
            <section className="card-header-text-holder">
                <HeaderTitle />
                <HeaderContent />
            </section>
        </header>
    );
};

export default HeaderContainer;