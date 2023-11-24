import React from 'react';
import DOMPurify from 'dompurify';

const CountryList = () => {
  const [query, setQuery] = React.useState('');
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [countries, setCountries] = React.useState([]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Oops! Something went wrong!</h1>;

  const handleQueryChange = (e) => {
    let cleanQuery = DOMPurify.sanitize(e.target.value);
    setQuery(cleanQuery);
  };

  return (
    <div>
      <h1>Global Currency Tracker</h1>
      <input
        type='text'
        value={query}
        placeholder='Enter currency of your choice'
        onChange={handleQueryChange}
      />

      {/* Map the countries here and show them in the form of cards - Pending */}
    </div>
  );
};

export default CountryList;
