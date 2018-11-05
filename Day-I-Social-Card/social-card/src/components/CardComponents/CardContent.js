import React from 'react';
import CardTitle from './CardTitle';
import CardParagraph from './CardParagraph';
import CardHttpSig from './CardHttpSig';
import './Card.css';

const CardContent = () => {
  return <div className="CardContent">
    <CardTitle title="Get started with React" />
    <CardParagraph text="React makes it painless to create interactive UIs. Design simple views for each state in your application." />
    <CardHttpSig sig="reactjs.org" />
  </div>
};

export default CardContent;