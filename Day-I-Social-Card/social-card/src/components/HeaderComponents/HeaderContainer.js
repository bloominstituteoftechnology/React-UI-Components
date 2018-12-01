import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
	return (
		<div>
				<div className="headerAll">
                    <div className="headUpper">
                            <ImageThumbnail />
                            <HeaderTitle />
                    </div>
                    <div className="headLower indent">
                        <HeaderContent />
                    </div>
	            </div>
		</div>
    )
};

export default HeaderContainer;