import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import Image from './ImageThumbnail';

const Container = () => {
    return(
        <div className="flex">
            <div>
                <Image />
            </div>
            <div>
                <HeaderContent />
            </div>
        </div>
    );
};


export default Container