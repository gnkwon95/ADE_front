import React from "react";
import PropTypes from "prop-types";

import ReviewStars from "../Etc/ReviewStars";
import ReviewBox from "../Etc/ReviewBox";

const Review = ({ review }) => {

  return (
    <div>
      <h1 style={{ display: "inline" }}>상담 후기</h1>
      <span>({review.contents.length}명)</span>
      <ReviewStars score={review.score} />
      {review.contents.map((content) => (
        <ReviewBox key={content.id} content={content} score={review.score} />
      ))}
    </div>
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    contents: PropTypes.array.isRequired,
    score: PropTypes.node.isRequired,
  }),
};

export default Review;
