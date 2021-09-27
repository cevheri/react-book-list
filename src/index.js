import React from "react";
import ReactDom from "react-dom";

// CSS import
import "./index.css";

// setup array
const books = [
  {
    author: "Emily Winfield Martin",
    title: "The Wonderful Things You Will Be",
    img: "https://images-na.ssl-images-amazon.com/images/I/91Sv0lGpX3L._AC_UL200_SR200,200_.jpg",
  },
  {
    author: "Eric Hill",
    title: "Where's Spot?",
    img: "https://images-na.ssl-images-amazon.com/images/I/51o4b5AdNLL._AC_UL200_SR200,200_.jpg",
  },
  {
    author: "Margaret Wise Brown",
    title: "Goodnight Moon",
    img: "https://images-na.ssl-images-amazon.com/images/I/91OmGflKYaL._AC_UL200_SR200,200_.jpg",
  },
];


function BookList() {
  return <section className="booklist">{books.map((book)=>{
    console.log(book);
    return (
      // <Book img={book.img}></Book>
      <Book book={book}></Book>
    );
  })}
  </section>;
}

const Book = (props) => {
  // const Book = ({ img, title, author, children}) => {
    console.log(props);
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
