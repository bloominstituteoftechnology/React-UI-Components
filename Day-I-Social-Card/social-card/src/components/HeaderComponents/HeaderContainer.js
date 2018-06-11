import React from 'react'
import './Header.css'
import ImageThumbnail from '../HeaderComponents/ImageThumbnail'
import HeaderContent from './HeaderContent'
import HeaderTitle from './HeaderTitle'

const HeaderContainer = () => {
  return (
    <div className={'HeaderContainer'}>
      <ImageThumbnail />
      <HeaderTitle />
      <HeaderContent />
    </div>
  )
}
export default HeaderContainer
