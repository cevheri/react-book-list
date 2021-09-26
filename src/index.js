import React from "react";
import ReactDom from "react-dom";

// stateless functional component
// always return JSX

// function Greeting() {
//   return <h4>Hello</h4>
// } 
  

// const Greeting=()=>{
//   return React.createElement("h1",{},"helloo;")
// }

function Greeting(){
  return (
    <div>
      <h1>hello 3</h1>
    </div>
  )
}

// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, "hello 4")
//   );
// };

ReactDom.render(<Greeting />, document.getElementById("root"));
