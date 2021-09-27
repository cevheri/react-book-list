import React from 'react'


const Book = (props) => {
  // const Book = ({ img, title, author, children}) => {
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Clicked");
  };
  const complexHandler = (author) => {
    console.log(author);
  };
  console.log(props);
  const { img, title, author } = props.book;
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        click me
      </button>
      <button type="button" onClick={() => complexHandler(author)}>
        click complex
      </button>
    </article>
  );
};

export default Book
