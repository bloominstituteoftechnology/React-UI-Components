import React from "react";

import CardBanner from "./CardBanner";
import CardContent from "./CardContent";
import CardContainer from "./CardContainer";

const Card = () => {
  return (
    <React.Fragment>
      <CardContainer>
        <CardBanner />
        <CardContent />
      </CardContainer>
    </React.Fragment>
  );
};

export default Card;
