import React from 'react';
import { BookList } from '../data/books';
import { Link } from 'react-router-dom';

const Books = (props) => {
    let books = BookList.map((book) => {
      return (
        <div className="book-container">
          <Link to={`/books/${book.id}`}><div className="book-image" style={{ backgroundImage: "url(" + book.img_src + ")" }}></div></Link>
          <h3>{book.title}</h3>
        </div>
      );
    });

    return (
      <div className="main-content">
        <div><Link className="back" to="/">Back</Link></div>
        <h2>{props.title}</h2>
        <div className="container">
          {books}
        </div>
      </div>
    );
}

export default Books;