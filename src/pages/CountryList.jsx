import React from 'react';
import DOMPurify from 'dompurify';
import Loader from '../utils/Loader';
import sjson from 'secure-json-parse';
import { useDebounce } from '../hooks/useDebounce';
import Pagination from '../components/Pagination';
import CountryCard from '../components/CountryCard';
import Styles from '../styles/CountryList.module.css';

const CountryList = () => {
  const [query, setQuery] = React.useState('');
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [countries, setCountries] = React.useState([]);
  const [activePage, setActivePage] = React.useState(1);

  let limit = 9;
  let delay = 2000;
  let endingIndex = activePage * limit - 1;
  let startingIndex = (activePage - 1) * limit;
  const debouncedQuery = useDebounce(query, delay).toLowerCase();

  const fetchCountries = async () => {
    setLoading(true);
    try {
      let res = await fetch(`v3.1/currency/${debouncedQuery}`);
      res = res.text();

      let secureData = sjson.parse(res, {
        constructorAction: 'remove',
        protoAction: 'remove'
      });

      setCountries(secureData);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
      setLoading(false);
      setError(true);
    }
  };

  const filteredCountries =
    countries.length > 0
      ? countries?.slice(startingIndex, endingIndex + 1)
      : [];

  const handleQueryChange = (e) => {
    let cleanQuery = DOMPurify.sanitize(e.target.value);
    setQuery(cleanQuery.toUpperCase());
  };

  console.log(error);

  React.useEffect(() => {
    query && fetchCountries();
  }, [debouncedQuery]);

  return (
    <>
      <div>
        <div className={Styles.parentContainer}>
          <div>
            <h1>Global Currency Tracker</h1>
          </div>

          <input
            type='text'
            value={query}
            placeholder='Enter currency of your choice (e.g., USD, EUR, Rupee)'
            onChange={handleQueryChange}
          />
        </div>

        {loading ? (
          <Loader />
        ) : error ? (
          <div style={{ padding: '10px', marginTop: '50px' }}>
            <h3
              style={{
                color: 'tomato',
                fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'
              }}
            >
              Error: Invalid currency! Cannot find any country for the currency.
            </h3>
          </div>
        ) : query.length > 0 ? (
          <div>
            <div className={Styles.container}>
              {filteredCountries?.length > 0 &&
                filteredCountries.map((country, i) => (
                  <CountryCard key={i} id={i} {...country} />
                ))}
            </div>

            {countries?.length > limit && (
              <Pagination
                perPage={limit}
                activePage={activePage}
                handlePageChange={setActivePage}
                countriesLength={countries?.length}
              />
            )}
          </div>
        ) : (
          <div className={Styles.welcome}>
            <h2>Welcome to the Global Currency Tracker !!!</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default CountryList;
