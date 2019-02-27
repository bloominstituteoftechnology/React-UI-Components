import React, { Fragment } from "react";

import CardBanner from "./CardBanner";
import CardContent from "./CardContent";
import CardContainer from "./CardContainer";

const Card = ({ bannerImage, bannerAlt }) => {
  return (
    <Fragment>
      <CardContainer>
        <CardBanner bannerImage={bannerImage} bannerAlt={bannerAlt} />
        <CardContent />
      </CardContainer>
    </Fragment>
  );
};

export default Card;
