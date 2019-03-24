import React from 'react';
import { shape, string, func } from 'prop-types';


export default class Comment extends React.Component {
  render() {
    const { comment, deleteComment } = this.props;

    return (
      <div>
        <div className='text'>{comment}</div>  
        <em className='author'>{comment}</em>
        <div>
          <button onClick={() => deleteComment(comment)}>Delete Comment</button>
         
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
};
