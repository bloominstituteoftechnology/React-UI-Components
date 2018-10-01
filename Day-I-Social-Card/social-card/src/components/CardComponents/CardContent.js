import React from 'react';
import './Card.css';

const CardContent = props => {
  return (
    <div class='cardContentTextBox'>
      <h3 className = 'cardContentHeadline'>Wow man React</h3>
      <p className = 'cardContentDescription'>This is faux Twitter, man- this isn't even a real Tweet but hey: your newly-constructed React components sure as hell are.</p>
      <a class='cardContentLink' href='http://reactjs.org'>reactjs.org</a>
    </div>
  );
}

export default CardContent;