import React from "react";
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";
import "./Card.css";

function CardContainer() {
  return (
    <React.Fragment>
      <CardBanner src="https://ibin.co/3wnC6SgIOJud.png" alt="React Image" />
      <CardContent
        title="Get started with React"
        paragraphContent="React makes it painless to create interactive UIs. Design simple views for each state in your application."
        link="https://reactjs.org/"
        linkContent="reactjs.org"
      />
    </React.Fragment>
  );
}

export default CardContainer;
