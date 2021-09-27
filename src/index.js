import React from "react";
import ReactDom from "react-dom";

// CSS import
import "./index.css";

// setup array
import { data } from "./books";
import SpecificBook from "./Book";

import { greeting } from "./testing/testing";

function BookList() {
  return (
    <section className="booklist">
      {data.map((book, index) => {
        //console.log(book);
        return (
          // <Book img={book.img}></Book>
          //<Book key={book.id} book={...book}></Book>
          <SpecificBook key={book.id} book={book}></SpecificBook>
        );
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
