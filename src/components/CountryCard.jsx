import React from 'react';
import Styles from '../styles/CountryCard.module.css';

const CountryCard = ({ altSpellings, name }) => {
  const fallbackSrc = 'https://i.postimg.cc/pdCBrWD9/no-img.png';
  const baseSrc = `https://flagsapi.com/${altSpellings[0]}/shiny/64.png`;

  return (
    <div className={Styles.container}>
      <img
        src={baseSrc}
        onError={(e) => (e.target.src = fallbackSrc)}
        alt={name.common}
        width='64px'
        height='64px'
      />

      <h3>{name.common}</h3>
    </div>
  );
};

export default React.memo(CountryCard);
