// import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";


// document.getElementById('root').innerHTML = 'Hello World'

// const ele = React.createElement(
//   "div",
//   {},
//   React.createElement("h1", {}, "Hello World"),
// React.createElement("h1" ,{} , "hello")
// );
// const ele = (
//   <div style={{textAlign:"center" , color:"red "}}>
//     <h1>Hello World!</h1>
//     <h2>Hello</h2>
//     <h3>Data</h3>
//   </div>
// );
// function F1(){
//   return (
//     <h1>Hello World 1</h1>
//   )
// }
// function F2(){
//   return (
//     <h2>Hello World 2</h2>
//   )
// }
// function F3(){
//   return (
//     <h3>Hello World 2</h3>
//   )
// }
// const Main = ()=>{
//   return (
//     <div style={{textAlign:"center" , color:'red' ,backgroundColor:"black"}}>
//       <F1/>
//       <F2/>
//       <F3/>
      
//     </div>
//   )
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
