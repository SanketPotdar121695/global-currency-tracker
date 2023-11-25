import React from 'react';
import { useDebounce } from '../hooks/useDebounce';
import { CountryCard } from '../components/CountryCard';

export const CountryList = () => {
  const [query, setQuery] = React.useState('');
  const [error, setError] = React.useState(false);
  const debouncedQuery = useDebounce(query, 1000);
  const [loading, setLoading] = React.useState(false);
  const [countries, setCountries] = React.useState([]);

  const fetchCountries = () => {
    setLoading(true);
    fetch(`v3.1/currency/${debouncedQuery}`)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
        setError(false);
      })
      .catch((err) => setError(true));
  };

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
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
