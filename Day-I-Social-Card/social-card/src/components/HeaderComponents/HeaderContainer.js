import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js';
import HeaderTitle from './HeaderTitle.js';
import HeaderContent from './HeaderContent.js';

class HeaderContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      avatar: 'https://ibin.co/3whrpKSBbZ81.png',
    };
  }
  render(){
    return (
      <div className='header-container'>
        <ImageThumbnail url={this.state.avatar}/>
        <div className='header-material'>
          <HeaderTitle />
          <HeaderContent />
        </div>
      </div>
    );
  }
}

export default HeaderContainer;