import React from 'react';
import FooterIcon from './FooterIcon';

const Footer = () => {
    return (
        <div className="container footer-container">
            <FooterIcon type={'comment'}/>
            <FooterIcon type={'rt'} count={6} active={true}/>
            <FooterIcon type={'heart'} count={4} active={true}/>
            <FooterIcon type={'dm'} />
        </div>
    );
}

export default Footer;
