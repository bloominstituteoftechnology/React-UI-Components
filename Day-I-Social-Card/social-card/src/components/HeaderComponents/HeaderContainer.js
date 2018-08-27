import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail'
import HeaderContent from './HeaderContent'
import HeaderTitle from './HeaderTitle';

const HeaderContainer = () => (
<div>
<div class = "headerFlex ">
<div>
    <ImageThumbnail />
</div>
<div>
   <HeaderTitle />
<HeaderContent /> 
</div>

</div>

</div>
);

export default HeaderContainer;