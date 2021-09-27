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

const names = ["Mehmet", "Cevheri", "Ahmet"];
console.log(names);
const mappedNames = names.map((name) => {
  return <h4>{name}</h4>;
});
console.log(mappedNames);
function BookList() {
  return <section className="booklist">{mappedNames}</section>;
}

const Book = (props) => {
  // const Book = ({ img, title, author, children}) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
