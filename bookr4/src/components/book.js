import React from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { func, number } from "prop-types";
import { addComment } from "../state/actionCreators";

export class Book extends React.Component {
  authorRef = React.createRef();

  commentRef = React.createRef();

  onAddComment = () => {
    const authorValue = this.authorRef.current.value;
    const commentValue = this.commentRef.current.value;
    // 3- implement so it uses this.props.addComment
    // and also clears the inputs

    this.props.addComment(authorValue, commentValue);
    this.authorRef.current.value = "";
    this.commentRef.current.value = "";
    this.authorRef.current.focus();
  };

  render() {
    return (
      <>
        <div className="main-content">
          <div>
            <Link className="back" to="/books">
              Back
            </Link>
          </div>
          <h2>{this.props.title}</h2>
          <div className="container">
            <div
              className="book-profile-image"
              style={{ backgroundImage: "url(" + this.props.image + ")" }}
            />
            <div className="">
              <h2>{this.props.id}</h2>
              <p>Tittle: {this.props.title}</p>
              <p>Publisher: {this.props.publisher}</p>
              <p>Author: {this.props.author}</p>
              <p>Summary: {this.props.summary}</p>
            </div>
          </div>
        </div>
        <div className="apo">
          <h3> {this.props.numberOfComment} Add New Comment</h3>
          <div>
            <em>Author: </em>
            <input ref={this.authorRef} type="text" />
          </div>
          <div>
            <em>Comment: </em>
            <input ref={this.commentRef} type="text" />
          </div>
          <div>
            <button onClick={this.onAddComment}>Add Comment</button>
          </div>
        </div>
      </>
    );
  }
}

Book.propTypes = {
  addComment: func.isRequired,
  numberOfComment: number.isRequired
};

function mapStateToProps(state) {
  return {
    // numberOfComment: state.comments.length
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addComment
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Book);

