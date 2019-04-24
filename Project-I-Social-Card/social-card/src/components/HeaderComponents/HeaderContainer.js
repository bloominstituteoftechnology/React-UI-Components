import React from 'react'
import './Header.css'
import Thumbnail from './ImageThumbnail'
import HeaderTitle from './HeaderTitle'
import HeaderContent from './HeaderContent'

export default function HeaderContainer(props) {
    return (
        <div className="header-container">
            <Thumbnail 
                src="https://cdn-images-1.medium.com/fit/c/120/120/1*iTABE417EkZDwRv9Uj91Qg.png"
                alt="Lambda School Logo"
            />

            <div className="header-main">
                <HeaderTitle />

                <HeaderContent 
                    content="Let's learn React by building siple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!" 
                />
            </div>

        </div>
    )
}