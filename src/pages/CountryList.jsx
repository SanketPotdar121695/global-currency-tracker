import React from 'react';
import DOMPurify from 'dompurify';
import sjson from 'secure-json-parse';
import { useDebounce } from '../hooks/useDebounce';
import CountryCard from '../components/CountryCard';

const CountryList = () => {
  let delay = 2000;

  const [query, setQuery] = React.useState('');
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [countries, setCountries] = React.useState([]);

  const debouncedQuery = useDebounce(query, delay);

  const fetchCountries = () => {
    setLoading(true);
    fetch(`v3.1/currency/${debouncedQuery}`)
      .then((res) => res.text())
      .then((data) => {
        let secureData = sjson.parse(data, {
          constructorAction: 'remove',
          protoAction: 'remove'
        });
        setCountries(secureData);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
        setError(true);
      });
  };

  const handleQueryChange = (e) => {
    let cleanQuery = DOMPurify.sanitize(e.target.value);
    setQuery(cleanQuery);
  };

  React.useEffect(() => {
    query && fetchCountries();
  }, [debouncedQuery]);

  console.log(error);

  return (
    <>
      <div>
        <h1>Global Currency Tracker</h1>

        <input
          type='text'
          value={query}
          placeholder='Enter currency of your choice'
          onChange={handleQueryChange}
        />

        {loading && <h1>Loading...</h1>}
        {error && <h1>Oops! Something went wrong!</h1>}

        {countries?.length > 0 &&
          countries.map((country, i) => <CountryCard key={i} {...country} />)}
      </div>
    </>
  );
};

export default CountryList;
