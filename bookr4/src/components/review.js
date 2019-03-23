import React from 'react';
import { shape, string, func, bool } from 'prop-types';


export default class Comment extends React.Component {
  render() {
    const { comment, deleteComment, makeCommentOfTheDay, isCommentOfTheDay } = this.props;

    return (
      <div  highlight={isCommentOfTheDay}>
        <div className='text'>{comment}</div>  
        <em className='author'>{comment}</em>
        <div>
          <button onClick={() => deleteComment(comment)}>Delete</button>
          <button onClick={() => makeCommentOfTheDay(comment)}>Top Comment</button>
        </div>
      </div>
    );
  }
}

Comment.propTypes = {
    comment: shape({
    author: string.isRequired,
    text: string.isRequired,
  }).isRequired,
  deleteComment: func.isRequired,
  makeCommentOfTheDay: func.isRequired,
  isCommentOfTheDay: bool.isRequired,
};
