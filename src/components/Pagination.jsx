import React from 'react';

const Pagination = ({
  perPage,
  activePage,
  countriesLength,
  handlePageChange
}) => {
  const totalPages = Math.ceil(countriesLength / perPage);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px'
      }}
    >
      {activePage !== 1 && (
        <button onClick={() => handlePageChange(activePage - 1)}>Prev</button>
      )}

      {[...Array(totalPages)].map((item, index) => (
        <button key={index} onClick={() => handlePageChange(index + 1)}>
          {index + 1}
        </button>
      ))}

      {activePage !== totalPages && <button>Next</button>}
    </div>
  );
};

export default Pagination;
