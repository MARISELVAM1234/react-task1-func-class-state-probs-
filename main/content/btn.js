import React from 'react'

const Btn = (props) => {
  // console.log(props.btnName);
  const click =()=>{
props.F1("value");
  }
  console.log(props);
  return (
    <div style={{textAlign:"center" ,marginTop:"20px"}}>
        <button onClick={click} style={{backgroundColor:"green", border:"none" ,height:"40px" , width:"120px" ,color:"white", marginBottom:"100px"}}>{props.btnName}</button>
    </div>
  )
}

export default Btn