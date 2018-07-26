import React from 'react';
import { Radar } from 'react-pathjs-chart';

const SauceFlavor = (props) => {
  const flavorData = props.average_flavor_profile;
    let radarData = [{
      "Vinegar": flavorData.vinegar + 0.5,
      "Garlic/Onion": flavorData.garlic_onion + 0.5,
      "Sweet": flavorData.sweet + 0.5,
      "Smoky": flavorData.smoky + 0.5,
      "Citrus/Fruit": flavorData.citrus_fruit + 0.5,
      "Salt": flavorData.salt + 0.5,
      "Spices": flavorData.spices + 0.5,
      "Vegetal": flavorData.vegetal + 0.5
    }];

    let radarOptions = {
      width: 380,
      height: 380,
      r: 150,
      max: 6.5,
      fill: "#f49f24",
      stroke: "#555",
      animate: {
        type: 'oneByOne',
        duration: 600
      },
      label: {
        fontSize: 12,
        fontFamily: 'Avenir',
      }
    };
  return(
    <div>
      <Radar data={radarData} options={radarOptions} />
    </div>
  );
};

export default SauceFlavor;
