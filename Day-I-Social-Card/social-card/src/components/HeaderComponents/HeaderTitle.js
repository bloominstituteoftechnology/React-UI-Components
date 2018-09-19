import React from 'react';
import './Header.css';


const HeaderTitle = (props) => {
    return (
        <section className='title-container'>
            <p className='title'>Lambda School</p>
            <p className='tag'>@LambdaSchool</p>
            <p className='tag'>. 26 Jan</p>
        </section>
    );
}

export default HeaderTitle;