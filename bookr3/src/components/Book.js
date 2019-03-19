import React from 'react';
import { shape, string, func, bool } from 'prop-types';
import styled from 'styled-components';

const StyledBook = styled.div`
  margin: 10px;
  padding: 8px;
  background-color: ${pr => (pr.highlight ? '#fffbc4' : '#f4f4f4')};
  .text {
    margin-bottom: 10px;
  }
  em {
    font-weight: bold;
  }
`;

export default class Book extends React.Component {
  render() {
    const {
      book,
      isBookOfTheDay,
      deleteBookAsync,
      makeBookOfTheDay,
    } = this.props;

    return (
      <StyledBook highlight={isBookOfTheDay}>
        <div className='text'>{book.text}</div>
        <em className='author'>{book.author}</em>
        <div>
          <button onClick={() => deleteBookAsync(book.id)}>Delete</button>
          <button onClick={() => makeBookOfTheDay(book.id)}>Make Book of the Day</button>
        </div>
      </StyledBook>
    );
  }
}

Book.propTypes = {
  book: shape({
    author: string.isRequired,
    text: string.isRequired,
  }).isRequired,
  deleteBookAsync: func.isRequired,
  makeBookOfTheDay: func.isRequired,
  isBookOfTheDay: bool.isRequired,
};
