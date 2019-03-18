import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';

export default function HeaderContainer({ title, body, img }) {
  return (
    <div>
      <HeaderTitle title={title} />
      <ImageThumbnail img={img} />
      <HeaderContent body={body} />
    </div>
  );
}
