import React from 'react';
import './Card.css';
import {CardBanner} from './CardBanner';
import {CardContent} from './CardContent';

export const CardContainer = () => <div className = 'cardMain'>
        <CardBanner />
        <CardContent />
    </div>;