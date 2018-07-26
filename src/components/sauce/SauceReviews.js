import React from 'react'

const SauceReviews = (props) => (
  <div>
    <h4>Reviews</h4>
    <p>{props.rating_count} ratings</p>
    <p>{props.review_count} reviews</p>
  </div>
);

export default SauceReviews
