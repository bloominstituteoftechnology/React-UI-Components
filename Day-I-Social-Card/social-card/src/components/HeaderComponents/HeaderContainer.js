import React from 'react';
import './Header.css';
import '../../App.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';


// function HeaderContainer() {
//   return (
//         <div class = "header-container">
//     <React.Fragment>
//       <HeaderTitle  />
//       <ImageThumbnail />
//       <HeaderContent  />
//     </React.Fragment>
//         </div>
//   );
// }

const HeaderContainer = () => {
  return (
    <div className="container-header">
      <ImageThumbnail />
      <HeaderTitle />
    </div>
  );
};
export default HeaderContainer;