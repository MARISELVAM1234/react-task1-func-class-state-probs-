import React from 'react'
import Content from './content';

const property= {
    header : "Enjoy Your Healthy Delicious Food ",
    para : " Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat."
} 

const Obj = (props) => {
  return (
    <div>
    <Content property = {property}/>

    </div>
  )
}


export default Obj