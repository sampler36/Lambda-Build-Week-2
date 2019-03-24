import React from "react";
import { BookList } from "../data/books";
import Book from "./book";
import Books from "./books";
import { Route} from "react-router-dom";

const BooksContainer = (props) => {
  let bookId = BookList.map((book, i) => {
    return (
      <Route
        key={i}
        path={`/books/${book.id}`}
        render={() => 
          <Book
            image={book.profile_img}
            title={book.title}
            publisher={book.publisher}
            summary={book.summary}
            author={book.author}
            description={book.description}
          />
        }
      />

    );
  });

  return (
    <React.Fragment>
      <Route
        exact
        path="/books"
        render={() => <Books title="Our Collections" />}
      />
      {bookId}
    </React.Fragment>
  );
};

export default BooksContainer;
