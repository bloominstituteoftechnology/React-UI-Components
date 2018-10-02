import React from "react";
import "./Card.css";

const CardBanner = props => {
  // props = { type: "primary"}

  return (
    <div>
      {" "}
      <a href="https://reactjs.org">
        <img
          class="banner-logo"
          href="https://reactjs.org"
          src="https://ibin.co/3wnC6SgIOJud.png"
          alt="React Logo"
        />
      </a>
    </div>
  );
};

export default CardBanner;
