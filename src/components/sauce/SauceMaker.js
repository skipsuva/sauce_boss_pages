import React from 'react';
import MakerMap from './SauceMaker/MakerMap';

const SauceMaker = (props) => (
  <div>
    <h4>SauceMaker</h4>
    <p>Maker Sauces: {props.maker_sauce_count}</p>
    <p>About: {props.about}</p>
    <p>Lat/Long: {props.latitude} / {props.longitude}</p>

    <MakerMap latitude={props.latitude} longitude={props.longitude}/>
  </div>
);

export default SauceMaker;
