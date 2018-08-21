import React from 'react';
import './SauceReviews.scss';

const SauceReviews = (props) => (
  <div id="sauce-reviews">
    <h4>Reviews</h4>
    <p>{props.rating_count} ratings</p>
    <p>{props.review_count} reviews</p>
  </div>
);

export default SauceReviews;
