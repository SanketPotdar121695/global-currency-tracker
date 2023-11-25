import React from 'react';

const CountryCard = ({ id }) => {
  return (
    <div>
      <img src='' alt='' />
      <h3>hello {id}</h3>
    </div>
  );
};

export default React.memo(CountryCard);
