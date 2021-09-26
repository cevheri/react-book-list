import React from "react";
import ReactDom from "react-dom";

// CSS import
import "./index.css";

// setup objects
const bookOne = {
  author: "Emily Winfield Martin",
  title: "The Wonderful Things You Will Be",
  img: "https://images-na.ssl-images-amazon.com/images/I/91Sv0lGpX3L._AC_UL200_SR200,200_.jpg",
};

const bookTwo = {
  author: "Eric Hill",
  title: "Where's Spot?",
  img: "https://images-na.ssl-images-amazon.com/images/I/51o4b5AdNLL._AC_UL200_SR200,200_.jpg",
};
const bookThree = {
  author: "Margaret Wise Brown",
  title: "Goodnight Moon",
  img: "https://images-na.ssl-images-amazon.com/images/I/91OmGflKYaL._AC_UL200_SR200,200_.jpg",
};

function BookList() {
  return (
    <section className="booklist">
      <Book author={bookOne.author} title={bookOne.title} img={bookOne.img} />
      <Book author={bookTwo.author} title={bookTwo.title} img={bookTwo.img} />
      <Book author={bookThree.author} title={bookThree.title} img={bookThree.img} 
      randomValue="without props"/>
    </section>
  );
}
const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author.toUpperCase()}</h4>
      <p>{props.randomValue}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
