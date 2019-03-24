// import React from 'react';

// const Comments = (props) => (
//     <div className="main-content">
//       <div className="container">
//         <h1>Reviews Page</h1>
//       </div>
//     </div>
//   );
//   export default Comments;
  
  import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { shape, string, arrayOf, func } from 'prop-types';
import Comment from './review';
import { deleteComment } from '../state/actionCreators';


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
                deleteComment={this.props.deleteComment}
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

  deleteComment: func,
};

function mapStateToProps(state) {
  return {
    comments: state.comments,

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deleteComment,
   

  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
