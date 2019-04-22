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
                <HeaderContent />
            </div>
        </header>
    )
}