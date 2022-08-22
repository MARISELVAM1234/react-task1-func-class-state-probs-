
import React from "react";
import "./contact.css";
import Contact from "./contact";
import img1 from "../../assets/1.png";
// import img2 from "../../assets/2.png";

const dynamic = [
  {
    img: img1,
    para: "webpack-dev-server Server started: Hot Module Replacement enabled, Live Reloading enabled, Progress disabled, Overlay enabled.",
  },
  {
    img: img1,
    para: "webpack-dev-server Server started: Hot Module Replacement enabled, Live Reloading enabled, Progress disabled, Overlay enabled.",
  },
  {
    img: img1,
    para: "webpack-dev-server Server started: Hot Module Replacement enabled, Live Reloading enabled, Progress disabled, Overlay enabled.",
  },
  {
    img: img1,
    para: "webpack-dev-server Server started: Hot Module Replacement enabled, Live Reloading enabled, Progress disabled, Overlay enabled.",
  },
];

const First = () => {
  // console.log(dynamic);
  return (
    <div className="background">
       <h1>Our Special Menu</h1>
       <div className="main">
      {dynamic.map((element, index) => (
        <Contact key={index} dynamic={element.img} dynamic2={element.para}  />
      ))}
      </div>
   </div>
  );
};

export default First;


