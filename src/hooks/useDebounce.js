import React from 'react';

export const useDebounce = (query, delay) => {
  const [debouncedQuery, setDebouncedQuery] = React.useState(query);

  React.useEffect(() => {
    const timerID = setTimeout(() => {
      setDebouncedQuery(query);
    }, delay);

    return () => {
      clearTimeout(timerID);
    };
  }, [query, delay]);
  return debouncedQuery;
};

export default useDebounce;
