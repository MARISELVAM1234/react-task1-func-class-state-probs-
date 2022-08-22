import React from "react";
import "./content.css";
import Btn from "./btn";

const Content = (props) => {
  const btnName = "CLICKMENU"
  const F1 =(data)=>{
console.log("data" , data);
  }
  console.log(props);
  return (
    <div className="content">
    <div className="content-part">

      <div className="left-side">
     <h1> {props.property.header}</h1>
        <p>
         {props.property.para}
        </p>
      </div>
      <div className="right-side">
        <h1>{props.property.header} </h1>
        <p>
        {props.property.para}
        </p>
      </div>
    </div>
    <Btn btnName = {btnName} F1 ={F1}  />
    </div>
  );
};

export default Content;
