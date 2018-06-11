import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';

const HeaderContainer = () => {
    return (
        <div className='header-wrapper'>
            <div className='row'>
                <div className="col-2">
                    <img src='https://pbs.twimg.com/profile_images/973277209644249089/0Te2jtBH_400x400.jp' className='lambdaImg' />
                </div>
                <div className='col-10'>

                    <HeaderTitle />
                    <HeaderContent />
                </div>
            </div>
        </div>

    )

}

export default HeaderContainer;