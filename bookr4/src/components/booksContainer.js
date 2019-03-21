// import React from "react";
// import { BooksList } from "../data/books";
// import { Route } from "react-router-dom";
// import Book from "./book";
// import Books from "./books";

// const BooksContainer = (props) => {
//   let bookId = BooksList.map((bookr) => {
//     return (
//       <Route
//         path={`/books/${bookr.id}`}
//         render={() => (
//           <Book
//           image={bookr.profile_img}
//             title={bookr.title}
//             publisher={bookr.publisher}
//             summary={bookr.summary}
//             author={bookr.author}
//             description={bookr.description}
//           />
//         )}
//       />
//     );
//   });
//   return (
//     <React.Fragment>
//       <Route
//         exact
//         path="/books"
//         render={() => <Books title="Our Collection" />}
//       />
//       ;{bookId}
//     </React.Fragment>
//   );
// };

// export default BooksContainer;

import React from "react";
import { BookList } from "../data/books";
import Book from "./book";
import Books from "./books";
import { Route } from "react-router-dom";

const BooksContainer = (props) => {
  let bookId = BookList.map((book, i) => {
    return (
      <Route
        key={i}
        path={`/books/${book.id}`}
        render={() => (
          <Book
            image={book.profile_img}
            title={book.title}
            publisher={book.publisher}
            summary={book.summary}
            author={book.author}
            description={book.description}
          />
        )}
      />
    );
  });

  return (
    <React.Fragment>
      <Route
        exact
        path="/book"
        render={() => <Books title="Our Collections" />}
      />
      {bookId}
    </React.Fragment>
  );
};

export default BooksContainer;
