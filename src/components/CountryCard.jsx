import React from 'react';
import Styles from '../styles/CountryCard.module.css';

const CountryCard = ({ altSpellings, name, flags, capital }) => {
  const baseSrc = flags.png;
  const fallbackSrc = 'https://i.postimg.cc/pdCBrWD9/no-img.png';

  return (
    <div className={Styles.container}>
      <img
        src={baseSrc}
        onError={(e) => (e.target.src = fallbackSrc)}
        alt={name.common}
      />

      <div className={Styles.info}>
        <h3>Country: {name.common}</h3>
        <p>Capital: {capital[0]}</p>
      </div>
    </div>
  );
};

export default React.memo(CountryCard);
