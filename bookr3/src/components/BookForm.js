import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { func, number } from 'prop-types';
import { addBookAsync } from '../state/actionCreators';


export class BookForm extends React.Component {
  authorRef = React.createRef()

  textRef = React.createRef()

  onAddQuote = () => {
    const authorInput = this.authorRef.current;
    const textInput = this.textRef.current;

    const newBook = {
      author: authorInput.value,
      text: textInput.value,
    };

    this.props.addBookAsync(newBook);

    authorInput.value = '';
    textInput.value = '';
  }

  render() {
    return (
      <div>
        <h3>{this.props.numberOfBooks} Books total. Add New!</h3>
        <div>
          <em>Author: </em>
          <input ref={this.authorRef} type="text" />
        </div>
        <div>
          <em>Text: </em>
          <input ref={this.textRef} type="text" />
        </div>
        <div>
          <button onClick={this.onAddBook}>Add Books</button>
        </div>
      </div>
    );
  }
}

BookForm.propTypes = {
  // data
  numberOfBooks: number.isRequired,
  // action creator
  addBookAsync: func.isRequired,
};

function mapStateToProps(state) {
  return {
    numberOfBooks: state.books.length,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addBookAsync,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);
