import React from 'react';
import SauceFlavor from './SauceInfo/SauceFlavor';
import SauceHeat from './SauceInfo/SauceHeat';
import SauceLinger from './SauceInfo/SauceLinger';

const SauceInfo = (props) => (
  <div>
    <p>Heat: {props.average_heat}</p>
    <p>Linger: {props.average_linger}</p>

    <SauceHeat average_heat={props.average_heat}/>
    <SauceFlavor average_flavor_profile={props.average_flavor_profile}/>
    <SauceLinger average_linger={props.average_linger}/>
  </div>
);

export default SauceInfo;
