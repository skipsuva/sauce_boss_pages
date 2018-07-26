import React from 'react';

const SauceHeader = (props) => (
  <div>
    <img src={props.img_url} />
    <h5>{props.name}</h5>
    <h5>{props.maker}</h5>
    <p>{props.origin}</p>
    <p>{props.website}</p>
    <p>{props.average_rating} stars</p>
    <p>{props.rating_count} ratings</p>
    <p>{props.review_count} reviews</p>
    <p>{props.img_url}</p>
  </div>
);

export default SauceHeader;
