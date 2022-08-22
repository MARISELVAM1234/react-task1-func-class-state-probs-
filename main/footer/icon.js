import React from "react";
import "./icon.css";

const Icon = (props) => {
  return (
    <div className="footer-part">
      <div className="icon-part">
        <h1>{props.na}</h1>
        <i className="fa fa-whatsapp" aria-hidden="true"></i>
        <i className="fa fa-facebook-official" aria-hidden="true"></i>
        <i className="fa fa-twitter" aria-hidden="true"></i>
        <i className="fa fa-linkedin" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default Icon;
