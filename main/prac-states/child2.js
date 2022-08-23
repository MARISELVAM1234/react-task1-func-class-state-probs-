import React, { Component } from 'react'
import "./state.css"

export class Child2 extends Component {
  render() {
    return (
      <div>
        <div className="div-part">
        <img src={this.props.data.pic} alt=""></img>
        <h1>{this.props.data.head}</h1>
        <p>{this.props.data.parag}</p>
        <div className="btn-part">
          <button onClick={() => this.add()}>Add to cart</button>
        </div>
      </div>
      </div>
    )
  }
}

export default Child2