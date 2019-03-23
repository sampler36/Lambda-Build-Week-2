// import React from 'react';

// const Reviews = (props) => (
//     <div className="main-content">
//       <div className="container">
//         <h1>Reviews Page</h1>
//       </div>
//     </div>
//   );
//   export default Reviews;
  
  import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { shape, string, arrayOf, func } from 'prop-types';
import Comment from './review';
import { deleteComment, makeCommentOfTheDay } from '../state/actionCreators';


export class Comments extends React.Component {
  render() {
    return (
      <div>
        <h3> Reviews</h3>
        <div>
          {
            // is <Comment /> getting everything it needs?
            this.props.comments.map(comment => (
              <Comment
                key={comment.id}
                comment={comment}
                makeCommentOfTheDay={this.props.makeCommentOfTheDay}
                deleteComment={this.props.deleteComment}
                isCommentOfTheDay={comment.id === this.props.commentOfTheDay}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

Comment.propTypes = {
  // data from state:
  comments: arrayOf(shape({
    id: string.isRequired,
    author: string.isRequired,
    text: string.isRequired,
  })).isRequired,
  commentOfTheDay: string,
  // functions that change state:
  makeCommentOfTheDay: func,
  deleteComment: func,
};

function mapStateToProps(state) {
  return {
    comments: state.comments,
    commentOfTheDay: state.commentOfTheDay,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deleteComment,
    makeCommentOfTheDay,
    // there are 2 keys missing here!
    // look at the propTypes for hints
    // (or imports at the top)
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
