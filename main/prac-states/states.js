import React, { Component } from "react";
import pic1 from "../../assets/menu1.jpg"
import pic2 from "../../assets/menu2.jpg"
import pic3 from "../../assets/menu3.jpg"
import pic4 from "../../assets/menu4.webp"
import Child1  from "./child1";
import Child2 from "./child2";
import "./state.css"

export class State1 extends Component {
  constructor() {
    super();
    this.em ={
      
    }
    this.state = {
      // title  : 'reactJs'
      empty :[],
      data: [
        {
          pic: pic1,
          head: "Serve your customers online",
          parag:
            "Create an eye-catching menu and get ready to start taking online orders & reservations. ",
        },
        {
          pic: pic2,
          head: "Stay on top of business",
          parag:
            "Manage your restaurant on the go and keep up to date with orders on the Wix Owner App.",
        },
        {
          pic: pic3,
          head: "Stay on top of business",
          parag:
            "Manage your restaurant on the go and keep up to date with orders on the Wix Owner App.",
        },
        {
          pic: pic4,
          head: "Stay on top of business",
          parag:
            "Manage your restaurant on the go and keep up to date with orders on the Wix Owner App.",
        },
      ],
    };
  }
add = (value) =>{
  console.log("value" , value );
  this.setState({empty:[...this.state.empty , value] })
}


  render() {
    return  <div className="menu-part">
        <h1> MENU</h1>
    <div className ="prac-state">{this.state.data.map((ele,ind ) => (
     
     <Child1 key= {ind}  data = {ele} add = {this.add}/>

   ))}
   </div>

   <h2> ADD TO CART</h2>
   <div className ="prac-state">{this.state.empty.map((ele,ind ) => (
     

    
     <Child2 key= {ind}  data = {ele}/>

   ))}
   </div>
   </div>
  }
}

  export default State1;