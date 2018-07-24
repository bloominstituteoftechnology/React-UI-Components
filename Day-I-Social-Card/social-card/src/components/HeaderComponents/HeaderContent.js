import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';

const HeaderContent = () => {
    return (
        <div className="header-content">
            <HeaderTitle />
          
            <div className="learn-react">
                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
            </div>
        </div>
    );
};

export default HeaderContent;