import React from 'react'
import './Header.css'
import Thumbnail from './ImageThumbnail'
import HeaderTitle from './HeaderTitle'
import HeaderContent from './HeaderContent'

export default function HeaderContainer(props) {
    return (
        <header>
            <div>
                <Thumbnail />
                <HeaderTitle />
            </div>

            <div>
                <HeaderContent content="Let's learn React by building siple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!" />
            </div>
        </header>
    )
}