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
      res = await res.text();

      let secureData = sjson.parse(res, {
        constructorAction: 'remove',
        protoAction: 'remove'
      });

      if (secureData.status === 404) {
        console.log(secureData.message);
        setLoading(false);
        setError(true);
      } else {
        setCountries(secureData);
        setError(false);
        setLoading(false);
      }
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
            <h3 className={Styles.errorMessage}>
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
            <h3>Unveil the World's Diversity with a Click!</h3>

            <div>
              <h4>
                🌍 Ever wondered which countries share the same currency?
                Explore the globe effortlessly and find the nations associated
                with your preferred currency. Whether you're a traveler, a
                curious mind, or just love discovering new places, Global
                Currency Tracker is your passport to global currency insights.
              </h4>

              <h4>
                🔍 Enter a currency and embark on a journey to unveil the
                countries that embrace the same monetary unit. From bustling
                metropolises to hidden gems, our app is your gateway to a world
                of diverse cultures, landscapes, and histories.
              </h4>

              <h4>
                🌐 Ready to discover the international tapestry woven by
                currencies? Let's get started! Happy exploring!
              </h4>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CountryList;
