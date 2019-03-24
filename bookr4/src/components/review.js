import React from "react";
import { shape, string, func } from "prop-types";
import styled from "styled-components";

const StyledComment = styled.div`
  margin: 10px;
  padding: 8px;
  background-color: ${(pr) => (pr.highlight ? "#fffbc4" : "#f4f4f4")};
  .text {
    margin-bottom: 10px;
  }
  em {
    font-weight: bold;
  }
`;

export default class Comment extends React.Component {
  render() {
    const { comment, deleteComment } = this.props;

    return (
      <StyledComment>
        <div>
          <div className="text">{comment}</div>
          <em className="author">{comment}</em>
          <div>
            <button onClick={() => deleteComment(comment)}>
              Delete Comment
            </button>
          </div>
        </div>
      </StyledComment>
    );
  }
}

Comment.propTypes = {
  comment: shape({
    author: string.isRequired,
    text: string.isRequired
  }).isRequired,
  deleteComment: func.isRequired
};
