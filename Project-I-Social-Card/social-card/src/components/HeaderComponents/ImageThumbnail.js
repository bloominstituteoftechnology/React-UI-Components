import React from 'react';

import './Header.css';

import LambdaLogo from '../../images/lambda-logo.jpg';

const ImageThumbnail = () => {
	return (
		<div className="card__header__image">
			<img src={LambdaLogo} alt="Lambda Logo"/>
		</div>
	);
};

export default ImageThumbnail;