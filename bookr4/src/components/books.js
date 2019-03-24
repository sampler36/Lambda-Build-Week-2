import React from 'react';
import { BookList } from '../data/books';
import { Link } from 'react-router-dom';

const Books = (props) => {
    let books = BookList.map((bookr) => {
      return (
        <div className="book-container">
          <Link to={`/books/${bookr.id}`}><div className="book-image" style={{ backgroundImage: "url(" + bookr.img_src + ")" }}></div></Link>
          <h3>{bookr.title}</h3>
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