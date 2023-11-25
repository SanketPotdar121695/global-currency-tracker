import React from 'react';
import CountryList from './CountryList';
import { Route, Routes, Navigate } from 'react-router-dom';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<CountryList />} exact />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
};

export default AllRoutes;
