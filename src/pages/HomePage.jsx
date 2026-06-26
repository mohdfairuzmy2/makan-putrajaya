import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getLocations, searchLocations, filterByCategory, getCategories } from '../utils/storage';

function HomePage() {
  const [locations, setLocations] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const categories = getCategories();

  useEffect(() => { setLocations(getLocations()); }, []);

  useEffect(() => {
    if (searchQuery) setLocations(searchLocations(searchQuery));
    else if (selectedCategory !== 'Semua') setLocations(filterByCategory(selectedCategory));
    else setLocations(getLocations());
  }, [searchQuery, selectedCategory]);

  function handleSearch(e) { setSearchQuery(e.target.value); setSelectedCategory('Semua'); }
  function handleCategoryFilter(cat) { setSelectedCategory(cat); setSearchQuery(''); }
  function getRatingStars(r) { return Array.from({length:5},(_,i)=>i<Math.round(r)?'⭐':'☆').join(''); }

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>🍽️ Makan Putrajaya</h1>
        <p>Temui Lokasi Makanan Menarik di Putrajaya</p>
      </div>
      <div className="search-section">
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Cari restoran, kafe, gerai..." value={searchQuery} onChange={handleSearch} />
        </div>
      </div>
      <div className="category-filter">
        {categories.map(cat => (
          <button key={cat} className={`category-chip ${selectedCategory === cat ? 'active' : ''}`} onClick={() => handleCategoryFilter(cat)}>{cat}</button>
        ))}
      </div>
      <div className="results-info"><span>{locations.length} lokasi dijumpai</span></div>
      <div className="location-grid">
        {locations.length === 0 ? (
          <div className="empty-state">
            <span className="empty-icon">🍜</span>
            <h3>Tiada lokasi dijumpai</h3>
            <p>Cuba carian lain atau tambah lokasi baru!</p>
            <Link to="/tambah-lokasi" className="btn-primary">+ Tambah Lokasi</Link>
          </div>
        ) : (
          locations.map(loc => (
            <Link to={`/lokasi/${loc.id}`} key={loc.id} className="location-card">
              <div className="card-image">
                {loc.image ? <img src={loc.image} alt={loc.name} /> : <div className="card-placeholder"><span>🍽️</span></div>}
                <span className="card-category">{loc.category}</span>
              </div>
              <div className="card-content">
                <h3>{loc.name}</h3>
                <p className="card-address">📍 {loc.address}</p>
                <p className="card-description">{loc.description}</p>
                {loc.rating > 0 && <div className="card-rating">{getRatingStars(loc.rating)} <span>({loc.rating})</span></div>}
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default HomePage;
