import React, { Component } from "react";
import pic1 from "../../assets/menu1.jpg"
import pic2 from "../../assets/menu2.jpg"
import pic3 from "../../assets/menu3.jpg"
import pic4 from "../../assets/menu4.webp"
import "./state.css"

export class State1 extends Component {
  constructor() {
    super();
    this.state = {
      // title  : 'reactJs'
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
  render() {
    return  <div className="tasty-part">
        <h1>TASTY MENU</h1>
    <div className ="prac-state">{this.state.data.map((ele,ind ) => (
     
     <State2  key={ind} val1 = {ele.pic} val2 ={ele.head} val3 ={ele.parag} />

   ))}
   </div>
   </div>
  }
}



export class State2 extends State1 {
add = () =>{
        console.log(this);
        }
 
  // add 
    render() {
      return (
        <div className="div-part">
          <img src={this.props.val1} alt=""></img>
          <h1>{this.props.val2}</h1>
          <p>{this.props.val3}</p>
          <div className="btn-part">
          <button onClick={()=>this.add()}>Add to cart</button>

          {/* <State3/> */}
          </div>
        </div>
      )
     
    }
   
  }


  // import React, { Component } from 'react'
  
  export class State3 extends State2 {
    render() {
      return (
        <div>states
        </div>
      )
    }
  }
  
  
 
   
 
  

  export default State1;