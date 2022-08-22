import React, { Component } from "react";
import Class2 from "./class2";
import img3 from "../../assets/3.jpg";
import "./class.css"

 const chefs = [
  {
    img: img3,
    para: "webpack-dev-server Server started: Hot Module Replacement enabled, Live Reloading enabled, Progress disabled, Overlay enabled.",
  },
  {
    img: img3,
    para: "webpack-dev-server Server started: Hot Module Replacement enabled, Live Reloading enabled, Progress disabled, Overlay enabled.",
  },
  {
    img: img3,
    para: "webpack-dev-server Server started: Hot Module Replacement enabled, Live Reloading enabled, Progress disabled, Overlay enabled.",
  },
  {
    img: img3,
    para: "webpack-dev-server Server started: Hot Module Replacement enabled, Live Reloading enabled, Progress disabled, Overlay enabled.",
  },
]


export default class Class1 extends Component {
   ;
  render() {
    // console.log(this);
    return (
      <div className="head">
        <h1>Our Chefs</h1>
        <div className="chefs-part">
          {chefs.map((ele, index) => (
            <Class2 key={index} dynam={ele.img} dynam2={ele.para} />
          ))}
        </div>
      </div>
    );
  }
}
