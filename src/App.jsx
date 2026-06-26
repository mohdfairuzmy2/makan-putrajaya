import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AddLocationPage from './pages/AddLocationPage';
import VendorPage from './pages/VendorPage';
import LocationDetailPage from './pages/LocationDetailPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="tambah-lokasi" element={<AddLocationPage />} />
        <Route path="daftar-kedai" element={<VendorPage />} />
        <Route path="lokasi/:id" element={<LocationDetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
