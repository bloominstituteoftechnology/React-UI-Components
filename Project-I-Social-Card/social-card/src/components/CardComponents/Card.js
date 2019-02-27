import React, { Fragment } from "react";

import CardBanner from "./CardBanner";
import CardContent from "./CardContent";
import CardContainer from "./CardContainer";

const Card = ({ bannerImage, bannerAlt, cardLink, cardTitle, cardContent }) => {
  return (
    <Fragment>
      <CardContainer cardLink={cardLink}>
        <CardBanner bannerImage={bannerImage} bannerAlt={bannerAlt} />
        <CardContent cardTitle={cardTitle} cardContent={cardContent} />
      </CardContainer>
    </Fragment>
  );
};

export default Card;
