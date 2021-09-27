import React from "react";
import ReactDom from "react-dom";

// CSS import
import "./index.css";

// setup array
const books = [
  {
    id:1,
    author: "Emily Winfield Martin",
    title: "The Wonderful Things You Will Be",
    img: "https://images-na.ssl-images-amazon.com/images/I/91Sv0lGpX3L._AC_UL200_SR200,200_.jpg",
  },
  {
    id:2,
    author: "Eric Hill",
    title: "Where's Spot?",
    img: "https://images-na.ssl-images-amazon.com/images/I/51o4b5AdNLL._AC_UL200_SR200,200_.jpg",
  },
  {
    id:3,
    author: "Margaret Wise Brown",
    title: "Goodnight Moon",
    img: "https://images-na.ssl-images-amazon.com/images/I/91OmGflKYaL._AC_UL200_SR200,200_.jpg",
  },
];


function BookList() {
  return <section className="booklist">{books.map((book,index)=>{
    //console.log(book);
    return (
      // <Book img={book.img}></Book>
     //<Book key={book.id} book={...book}></Book>
      <Book key={book.id} book={book}></Book>
    );
  })}
  </section>;
}

const Book = (props) => {
  // const Book = ({ img, title, author, children}) => {
  const clickHandler =(e)=>{
    console.log(e);
    console.log(e.target);
    alert("Clicked")
  }
  const complexHandler= (author)=>{
    console.log(author);
  }
  console.log(props);
  const { img, title, author } = props.book;
  return (
    <article className="book" onMouseOver={()=>{
      console.log(title);
    }}>
      <img src={img} alt="" />
      <h1 onClick={()=> console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type ="button" onClick={clickHandler}>click me</button>
      <button type ="button" onClick={()=> complexHandler(author)}>click complex</button>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
