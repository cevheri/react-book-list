import React from "react";
import ReactDom from "react-dom";


// CSS import
import "./index.css"


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

// function Greeting(){
//   return (
//     <section>
//       <article>
//         <h1>hello 3</h1>
//         <ul>
//           <li>
//             <a href='#'> Second Hello</a>
//           </li>
//         </ul>
//       </article>
//       <div></div>
//     </section>
//   );
// }

//Nested Components, React Tools
// function Greeting() {
//   return (
//     <div>
//       <Person />
//       <Message />
//       <p>This new pharagraph</p>
//     </div>
//   );
// }

// const Person = () => <h2>Cevheri</h2>
// const Message = () => {
//   return (
//     <p>This is my message</p>
//   );
// };

// ReactDom.render(<Greeting />, document.getElementById("root"));

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  );
}
const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};
const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/91Sv0lGpX3L._AC_UL200_SR200,200_.jpg"
      alt=""
    />
  );
};
const Title = () => <h1>The Wonderful Things You Will Be</h1>;
const Author = () => <h4 style={{color:"#617d98", fontSize:"0.75rem", marginTop:"0.25rem"}}>Emily Winfield Martin</h4>;

ReactDom.render(<BookList />, document.getElementById("root"));
