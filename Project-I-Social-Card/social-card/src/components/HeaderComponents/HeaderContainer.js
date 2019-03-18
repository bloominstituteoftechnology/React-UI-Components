import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';

export default function HeaderContainer({ title, body, img }) {
  return (
    <header>
      <div className="image-wrapper">
        <ImageThumbnail img={img} />
      </div>
      <HeaderTitle title={title} />
      <HeaderContent body={body} />
    </header>
  );
}
