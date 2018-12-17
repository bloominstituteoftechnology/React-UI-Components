import React from 'react';
import './Card.css';

const CardContent = () => {
    return(
        <div className='card-content'>
            <img src='http://resources.razorplanet.com/510611-8783/510611_1994_607449.jpg'></img>
            <div className='image-details'>
                <h2>A bird that broke free</h2>
                <p>You have to make those little noises or it won't work. Be brave. If it's not what you want - stop and change it. Don't just keep going and expect it will get better. Don't be afraid to make these big decisions. Once you start, they sort of just make themselves. You have freedom here. The only guide is your heart. Talk to trees, look at the birds. Whatever it takes.</p>
                <p className='source'>twitter.com</p>
            </div>
        </div>
    );
}

export default CardContent;
