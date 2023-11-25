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
      .then((res) => res.json())
      .then((data) => {
        let secureData = sjson.parse(data, {
          constructorAction: 'remove',
          protoAction: 'remove'
        });
        setCountries(secureData);
        setLoading(false);
        setError(false);
      })
      .catch((err) => setError(true));
  };

  const handleQueryChange = (e) => {
    let cleanQuery = DOMPurify.sanitize(e.target.value);
    setQuery(cleanQuery);
  };

  React.useEffect(() => {
    query && fetchCountries();
  }, [debouncedQuery]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Oops! Something went wrong!</h1>;

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
