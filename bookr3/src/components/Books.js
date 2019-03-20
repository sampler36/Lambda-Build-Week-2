import React from 'react';
import { connect } from 'react-redux';
import { arrayOf, shape, string, func } from 'prop-types';
import { bindActionCreators } from 'redux';
import { getBooksAsync, deleteBookAsync, makeBookOfTheDay } from '../state/actionCreators';
import Book from './Book';

export class Books extends React.Component {
  componentDidMount() {
    this.props.getBooksAsync();
  }

  render() {
    return (
      <div>
        <h3>My Favorite Books</h3>
        <div>
          {
            this.props.books.map(book => (
              <Book
                key={book.id}
                book={book}
                isBookOfTheDay={this.props.bookOfTheDay === book.id}
                deleteBookAsync={this.props.deleteBookAsync}
                makeBookOfTheDay={this.props.makeBookOfTheDay}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

Books.propTypes = {
  // data from store
  books: arrayOf(shape({
    id: string.isRequired,
    author: string.isRequired,
    text: string.isRequired,
  })).isRequired,
  bookOfTheDay: string, // not required because `null` is legit value for this prop
  // action creators
  getBooksAsync: func.isRequired,
  deleteBookAsync: func.isRequired,
  makeBookOfTheDay: func.isRequired,
};

function mapStateToProps(state) {
  return {
    books: state.books,
    bookOfTheDay: state.bookOfTheDay,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getBooksAsync,
    deleteBookAsync,
    makeBookOfTheDay,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);
