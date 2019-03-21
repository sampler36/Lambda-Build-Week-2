import React from "react";
import { BooksList } from "../data/books";
import { Link } from "react-router-dom";

const Books = (props) => {
  // create a variable
  let books = BooksList.map((bookr) => {
    return (
      <div className="books-container">
        <a>
          <div
            className="books-image"
            style={{ backgroundImage: "url(" + bookr.img_src + ")" }}
          />
        </a>
        <h3>{bookr.title}</h3>
      </div>
    );
  });

  return (
    <div className="book-container">
      <div>
        <Link className="back" to="/">
          Back
        </Link>
      </div>
      <h2>{props.title}</h2>
      <div className="container">{books}</div>
    </div>
  );
};

export default Books;
