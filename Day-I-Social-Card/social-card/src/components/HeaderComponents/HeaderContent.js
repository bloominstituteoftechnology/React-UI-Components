import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';


function HeaderContent(props){
  return(
    <React.Fragment>
      <p className='paragraph'>{props.description}</p>
    </React.Fragment>
  );
}

export default HeaderContent;
