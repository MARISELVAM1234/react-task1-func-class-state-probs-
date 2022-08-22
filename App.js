import "./App.css";
import Home from "./main/header/home";
import Icon from "./main/footer/icon";
import First from "./main/contact/con-details";
import Obj from "./main/content/con-obj";
import Class1 from "./main/class/class1";
import State1 from "./main/prac-states/states";

// import Child from "./main/child-parent/child";
// import Details from "./main/contact/con-details";
// const F1 =(props)=>{
//    return <div>Hello{props.name} </div>
// }
// console.log(F1);

function App() {
  // const obj = { name: "name", number: 233 };
  // const btnName = "CLICKMENU";

  return (
    <div>
      <Home />
      <Obj />
      <First />
      <Class1/>
      <State1/>
      <Icon />
      {/* <Child/> */}
    </div>
  );
}

export default App;
