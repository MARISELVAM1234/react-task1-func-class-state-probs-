import React, { Component } from 'react'
import "./state.css"

export class Child2 extends Component {


  remove2 = () =>{
    console.log("remove"  , this );
    this.props.remove1(this.props.data)
  }

  render() {
    return (
      <div>
         {/* <h2> ADD TO CART</h2> */}
        <div className="div-part">
        <img src={this.props.data.pic} alt=""></img>
        <h1>{this.props.data.head}</h1>
        <p>{this.props.data.parag}</p>
        <h3> qty : {this.props.data.qty}</h3>

        <div className="btn-part">
          <button id="remove-btn" onClick={() => this.remove2()}>Remove cart</button>

        </div>
      </div>
      </div>
    )
  }
}

export default Child2