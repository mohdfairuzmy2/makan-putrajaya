import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getLocationById, getVendorByLocationId, deleteLocation } from '../utils/storage';

function LocationDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [location, setLocation] = useState(null);
  const [vendor, setVendor] = useState(null);

  useEffect(() => {
    const loc = getLocationById(id);
    if (loc) { setLocation(loc); const v = getVendorByLocationId(id); if (v) setVendor(v); }
  }, [id]);

  function handleDelete() { if (window.confirm('Padam lokasi ini?')) { deleteLocation(id); navigate('/'); } }
  function getRatingStars(r) { return Array.from({length:5},(_,i)=>i<Math.round(r)?'⭐':'☆').join(''); }

  if (!location) return (<div className="not-found"><span className="not-found-icon">🔍</span><h2>Lokasi Tidak Dijumpai</h2><Link to="/" className="btn-primary">← Kembali</Link></div>);

  return (
    <div className="detail-page">
      <Link to="/" className="back-link">← Kembali</Link>
      <div className="detail-image">
        {location.image ? <img src={location.image} alt={location.name} /> : <div className="detail-placeholder"><span>🍽️</span><p>Tiada gambar</p></div>}
      </div>
      <div className="detail-info">
        <span className="detail-category">{location.category}</span>
        <h1>{location.name}</h1>
        <p className="detail-address">📍 {location.address}</p>
        {location.rating > 0 && <div className="detail-rating">{getRatingStars(location.rating)}<span className="rating-value">{location.rating}/5.0</span></div>}
        <div className="detail-description"><h3>Penerangan</h3><p>{location.description || 'Tiada penerangan.'}</p></div>
      </div>
      {vendor && (
        <div className="vendor-section">
          <h2>🏪 Maklumat Kedai</h2>
          <div className="vendor-info">
            <div className="vendor-detail"><span className="vendor-label">Pemilik:</span><span>{vendor.ownerName}</span></div>
            <div className="vendor-detail"><span className="vendor-label">Telefon:</span><a href={`tel:${vendor.phone}`}>{vendor.phone}</a></div>
            {vendor.email && <div className="vendor-detail"><span className="vendor-label">E-mel:</span><a href={`mailto:${vendor.email}`}>{vendor.email}</a></div>}
            <div className="vendor-detail"><span className="vendor-label">Waktu:</span><span>{vendor.operatingHours||'Tidak dinyatakan'}</span></div>
          </div>
          {vendor.menu && vendor.menu.length > 0 && (
            <div className="menu-section"><h3>🍜 Menu</h3><div className="menu-grid">
              {vendor.menu.map((item,i)=>(<div key={i} className="menu-card"><div className="menu-card-header"><h4>{item.name}</h4><span className="menu-card-price">RM {item.price.toFixed(2)}</span></div>{item.description&&<p className="menu-card-desc">{item.description}</p>}</div>))}
            </div></div>
          )}
        </div>
      )}
      <div className="detail-actions"><button className="btn-delete" onClick={handleDelete}>🗑️ Padam Lokasi</button></div>
    </div>
  );
}

export default LocationDetailPage;
