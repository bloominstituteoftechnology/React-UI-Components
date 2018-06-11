import React from 'react'
import './Header.css'
import ImageThumbnail from '../HeaderComponents/ImageThumbnail'
import HeaderTitle from '../HeaderComponents/HeaderTitle'

const HeaderContainer = () => {
  return (
    <div>
      <ImageThumbnail />
      <HeaderTitle />
    </div>
  )
}
export default HeaderContainer
