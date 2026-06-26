import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

function Layout() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const isActive = (path) => location.pathname === path;

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-content">
          <Link to="/" className="logo">
            <span className="logo-icon">🍽️</span>
            <span className="logo-text">Makan Putrajaya</span>
          </Link>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={`hamburger ${menuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav">
            <Link to="/" onClick={() => setMenuOpen(false)} className={isActive('/') ? 'active' : ''}>🏠 Utama</Link>
            <Link to="/tambah-lokasi" onClick={() => setMenuOpen(false)} className={isActive('/tambah-lokasi') ? 'active' : ''}>📍 Tambah Lokasi</Link>
            <Link to="/daftar-kedai" onClick={() => setMenuOpen(false)} className={isActive('/daftar-kedai') ? 'active' : ''}>🏪 Daftar Kedai</Link>
          </nav>
        )}
      </header>
      <main className="main-content"><Outlet /></main>
      <nav className="bottom-nav">
        <Link to="/" className={`nav-item ${isActive('/') ? 'active' : ''}`}>
          <span className="nav-icon">🏠</span><span className="nav-label">Utama</span>
        </Link>
        <Link to="/tambah-lokasi" className={`nav-item ${isActive('/tambah-lokasi') ? 'active' : ''}`}>
          <span className="nav-icon">📍</span><span className="nav-label">Tambah</span>
        </Link>
        <Link to="/daftar-kedai" className={`nav-item ${isActive('/daftar-kedai') ? 'active' : ''}`}>
          <span className="nav-icon">🏪</span><span className="nav-label">Kedai</span>
        </Link>
      </nav>
    </div>
  );
}

export default Layout;
