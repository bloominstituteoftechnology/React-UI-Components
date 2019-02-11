import React from "react"
import HeaderContent from "./HeaderContent.js"
import HeaderTitle from "./HeaderTitle.js"
import ImageThumbnail from "./ImageThumbnail"
import "./Header.css"

const HeaderContainer = () => {
  return (
    <header>
      <ImageThumbnail />
      <div>
        <HeaderTitle
          title="Lambda School"
          handle="@LambdaSchool"
          date="26 Jan"
        />
        <HeaderContent />
      </div>
    </header>
  )
}

export default HeaderContainer
