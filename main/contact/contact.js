import React from 'react'
import "./contact.css";

const Contact = (props) => {
  // console.log(props.dynamic);
  return (
    <div className='img-con'>
      <img src={props.dynamic} alt=""></img>
      <p>{props.dynamic2}</p>
    </div>
  )
}

export default Contact