import React from 'react'

const SauceMaker = (props) => (
  <div>
    <h4>SauceMaker</h4>
    <p>Maker Sauces: {props.maker_sauce_count}</p>
    <p>About: {props.about}</p>
    <p>Lat/Long: {props.latitude} / {props.longitude}</p>
  </div>
);

export default SauceMaker
