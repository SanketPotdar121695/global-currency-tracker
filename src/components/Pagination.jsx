import React from 'react';
import Styles from '../styles/Pagination.module.css';

const Pagination = ({
  perPage,
  activePage,
  countriesLength,
  handlePageChange
}) => {
  const totalPages = Math.ceil(countriesLength / perPage);

  return (
    <div className={Styles.container}>
      {activePage !== 1 && (
        <button onClick={() => handlePageChange(activePage - 1)}>Prev</button>
      )}

      {[...Array(totalPages)].map((item, index) => (
        <button
          className={activePage === index + 1 ? Styles.activePage : ''}
          key={index}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      {activePage !== totalPages && (
        <button onClick={() => handlePageChange(activePage + 1)}>Next</button>
      )}
    </div>
  );
};

export default Pagination;
