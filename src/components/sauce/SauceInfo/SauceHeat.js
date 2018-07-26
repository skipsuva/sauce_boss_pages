import React from 'react';

const SauceHeat = (props) => {

  return (
    <div>
      {renderHeatMeter(props)}
    </div>
  );
};

function calculateHeatLevel(heatLevel) {
  if (heatLevel) {
    return heatLevel;
  } else {
    return 0;
  }
}

function getClosestHeat(number) {
  const adjustedNum = (number * 2).toFixed() / 2;
  if (adjustedNum > 6) {
    return 6;
  }
  return adjustedNum;
}

function renderHeatMeter(props) {
  const heatLevel = getClosestHeat(props.average_heat);
  switch (heatLevel) {
    case 6:
      return(<img src={require(`../../../assets/images/heat-meter-6.png`)}/>);
    case 5.5:
      return(<img src={require(`../../../assets/images/heat-meter-5-5.png`)}/>);
    case 5:
      return(<img src={require(`../../../assets/images/heat-meter-5.png`)}/>);
    case 4.5:
      return(<img src={require(`../../../assets/images/heat-meter-4-5.png`)}/>);
    case 4:
      return(<img src={require(`../../../assets/images/heat-meter-4.png`)}/>);
    case 3.5:
      return(<img src={require(`../../../assets/images/heat-meter-3-5.png`)}/>);
    case 3:
      return(<img src={require(`../../../assets/images/heat-meter-3.png`)}/>);
    case 2.5:
      return(<img src={require(`../../../assets/images/heat-meter-2-5.png`)}/>);
    case 2:
      return(<img src={require(`../../../assets/images/heat-meter-2.png`)}/>);
    case 1.5:
      return(<img src={require(`../../../assets/images/heat-meter-1-5.png`)}/>);
    case 1:
      return(<img src={require(`../../../assets/images/heat-meter-1.png`)}/>);
    default:
      return(<img src={require(`../../../assets/images/heat-meter-0.png`)}/>);
  }
}

export default SauceHeat;
