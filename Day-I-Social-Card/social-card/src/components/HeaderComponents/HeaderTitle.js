import React from 'react';
import HeaderContent from './HeaderContent';
import './Header.css';


const HeaderTitle = () => {
return(
<div className="header-title">Lambda School
<span>@LambdaSchool 
    &bull; 26 jan
    </span>
    <HeaderContent />
    </div>);
   
};

export default HeaderTitle;