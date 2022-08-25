import React, { Component } from "react";
import pic1 from "../../assets/menu1.jpg";
import pic2 from "../../assets/menu2.jpg";
import pic3 from "../../assets/menu3.jpg";
import pic4 from "../../assets/menu4.webp";
import Child1 from "./child1";
import Child2 from "./child2";
import "./state.css";
// var qty = 1
export class State1 extends Component {
  constructor() {
    super();

    this.state = {
      empty: [],
      data: [
        {
          pic: pic1,
          head: "Serve your customers online",
          parag:
            "Create an eye-catching menu and get ready to start taking online orders & reservations. ",
          qty: 1,
        },
        {
          pic: pic2,
          head: "Stay on top of business",
          parag:
            "Manage your restaurant on the go and keep up to date with orders on the Wix Owner App.",
          qty: 1,
        },
        {
          pic: pic3,
          head: "Stay on top of business",
          parag:
            "Manage your restaurant on the go and keep up to date with orders on the Wix Owner App.",
          qty: 1,
        },
        {
          pic: pic4,
          head: "Stay on top of business",
          parag:
            "Manage your restaurant on the go and keep up to date with orders on the Wix Owner App.",
          qty: 1,
        },
      ],
    };
  }
  
  add = (value) => {
    console.log( "cart",this.state.empty);
    if (!(this.state.empty.includes(value))){
      console.log("value", value);
      this.setState({ empty: [...this.state.empty, value] });
    }  
    else{
      this.setState({qty: value.qty++})
      console.log(this.state.empty);
    }

  };

  remove =  (remo) =>{
   
    // {this.state.empty.filter(remoFun)}
    // function remoFun (a){
    //  console.log("a" ,a );
    // }

// let store = [...this.state.empty]
let removeEle =this.state.empty.filter((val)=>{
  return val !== remo 
})
this.setState({empty:removeEle})

    
// console.log(remo);

  }





    // this.setState({qty: remo.qty--})
    // console.log(this.state.empty);
      // }



  render() {
    return (
      <div className="menu-part">
        <h1> MENU</h1>
        <div className="prac-state">
          {this.state.data.map((ele, ind) => (
            <Child1 key={ind} data={ele} add1={this.add} />
          ))}
        </div>

        <h2> ADD PRODUCT</h2>
        <div className="prac-state">
          {this.state.empty.map((ele, ind) => (
            <Child2 key={ind} data={ele}  remove1 = {this.remove}/>
          ))}
        </div>
      </div>
    );
  }
}

export default State1;
