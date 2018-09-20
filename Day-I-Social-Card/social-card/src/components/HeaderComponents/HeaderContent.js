import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';

const lambdaSchool = require('../../DB/lambdaSchool');


const HeaderContent = (props) => {
    return (
        <section className="header-container">
            <HeaderTitle {...lambdaSchool}/>
            <section className='paragraph'>
                <p>{props.postHeaderText}</p>
            </section>
        </section>
    );
}

export default HeaderContent;