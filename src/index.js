import React from "react";
import ReactDom from "react-dom";


// stateless functional component
// always return JSX

// JSX Rules
// return single element
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting


// function Greeting() {
//   return <h4>Hello</h4>
// } 

// const Greeting=()=>{
//   return React.createElement("h1",{},"helloo;")
// }

// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, "hello 4")
//   );
// };

function Greeting(){
  return (
    <div>
      <h1>hello 3</h1>
    </div>
  )
}



ReactDom.render(<Greeting />, document.getElementById("root"));
