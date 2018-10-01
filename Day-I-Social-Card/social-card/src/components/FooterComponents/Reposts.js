import React from "react";
import "./Footer.css";

let repostCount = 6;

const Reposts = () => {
  return (
    <div class="reposts">
      <a href="#">
        <i class="fas fa-sync-alt" />
      </a>
      <label>{repostCount}</label>
    </div>
  );
};

export default Reposts;
