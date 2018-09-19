import React from 'react';
import './Card.css';
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

const CardContainer = () => {
    return (
        <section className="card-body">
            <CardBanner />
            <CardContent />
        </section>
    );
};

export default CardContainer;
