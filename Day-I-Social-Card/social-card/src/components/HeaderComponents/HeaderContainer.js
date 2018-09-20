import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import ImageThumbnail from "./ImageThumbnail";
// import {Link, RichText, Date} from 'prismic-reactjs';
// import moment from '//';


// const timestamp = Date(document.data.event_date);
// const formattedDate = Moment(timestamp).format("lll");
// // Outputs as "Feb 17, 2017 1:30 PM"
// console.log(formattedDate);


const HeaderContainer =  () => {
    return <div className="header">
        <ImageThumbnail />
        <HeaderTitle />
        <HeaderContent />
      </div>;
  };
  export default HeaderContainer;