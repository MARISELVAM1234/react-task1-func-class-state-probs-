import React, { Component } from "react";
import "./state.css"

export class Child1 extends Component {

  add = () =>{
    console.log("value"  , this );
    this.props.add(this.props.data)
  }


  render() {
    return (
      <div className="div-part">
        <img src={this.props.data.pic} alt=""></img>
        <h1>{this.props.data.head}</h1>
        <p>{this.props.data.parag}</p>
        <div className="btn-part">
          <button onClick={() => this.add()}>Add to cart</button>
        </div>
      </div>
    );
  }
}

export default Child1;
