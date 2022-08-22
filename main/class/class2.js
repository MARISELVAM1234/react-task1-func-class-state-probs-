import React, { Component } from 'react';
import "./class.css";
export default class Class2 extends Component {
  render() {
    // console.log('this', this.props.name);
    return (
      <div className='chefs'>
        <img src={this.props.dynam} alt=""></img>
        <p>{this.props.dynam2}</p>
      </div>
    )
  }
}
