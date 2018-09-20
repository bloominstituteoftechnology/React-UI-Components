import React from 'react';
import './Header.css';


const HeaderTitle = (props) => {
    return (
        <section className='title-container'>
            <p className='title'>{props.userName}</p>
            <p className='tag'>{props.userLink}</p>
            <p className='tag'>{props.postDate}</p>
        </section>
    );
}

export default HeaderTitle;