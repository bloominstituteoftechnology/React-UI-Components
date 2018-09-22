import React from 'react';
import './Header.css';
class HeaderContainer extends React.Component {
  render() {
    return (
      <div>
        <ImageThumbnail />
        <HeaderTitle />
        <HeaderContent />
      </div>
    )
  }
}

export default HeaderContainer