import React from 'react';
import StarRatings from 'react-star-ratings';
import './SauceHeader.scss';

const SauceHeader = (props) => (
  <div id="sauce-header" className="col-md-5 hidden-xs-down">

    <div className="img-container">
      <img src={props.img_url} />
    </div>

    <div className="info-container">
      <h3>{props.name}</h3>
      <h5>{props.maker}</h5>
      <p>{props.origin}</p>
    </div>

    <div className="rating-container">
      <div className="star-container">
        <p>{props.average_rating}</p>
        <StarRatings
          rating={props.average_rating}
          starRatedColor="rgb(220,65,55)"
          numberOfStars={5}
          name='rating'
          starDimension="20px"
          starSpacing="2px"
        />
      </div>
      <div className="rating-text-container">
        <p>{props.rating_count} ratings | {props.review_count} reviews</p>
      </div>
    </div>

    <div className="links-container">
      <p>{props.website}</p>
    </div>

  </div>
);

export default SauceHeader;
