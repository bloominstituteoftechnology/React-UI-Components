import React from 'react';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';

const ContentContainer = () => {
	return (
		<div className="content">
			<HeaderTitle />
			<HeaderContent />
		</div>
	);
};

export default ContentContainer;