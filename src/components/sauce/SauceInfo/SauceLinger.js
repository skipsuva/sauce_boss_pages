import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';

const SauceLinger = (props) => {
  const sauceLingerDisplay = parseFloat(Math.round(props.average_linger * 100) / 100).toFixed(1);
  const sauceLingerGauge = (props.average_linger / 5) * 100;
  return (
    <div style={{ width: '150px' }}>
      <CircularProgressbar
        percentage={90}
        text={`${sauceLingerDisplay}`}
        styles={{
          path: {
            stroke: `rgba(220,65,55)`,
            transform: 'rotate(180deg)',
            transformOrigin: 'center center',
          },
          text: { fill: '#f88', fontSize: '16px', fontFamily: 'Avenir' },
        }}
      />
    </div>
  );
};

export default SauceLinger;
