import React from 'react';
import './Header.css';
import ImgThumb from './ImageThumbnail'
import HeaderTitle from './HeaderTitle';
import HeaderContent from  './HeaderContent';

const HeaderContainer = () => {
  return (
      <div className='container-fluid'> 
      <div className="row d-flex mb-2">
              <div className='col-1 p-0'><ImgThumb /> </div>
              <div className='col-11 p-0'>
              <HeaderTitle />
              <HeaderContent />
              </div>     
      </div>
      </div>
  );

}


export default HeaderContainer;
