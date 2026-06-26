import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addLocation, getCategories, imageToBase64 } from '../utils/storage';

function AddLocationPage() {
  const navigate = useNavigate();
  const categories = getCategories().filter(c => c !== 'Semua');
  const [formData, setFormData] = useState({ name: '', address: '', category: '', description: '', image: '' });
  const [imagePreview, setImagePreview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(e) { setFormData(prev => ({ ...prev, [e.target.name]: e.target.value })); }

  async function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { alert('Saiz gambar melebihi 5MB.'); return; }
      const base64 = await imageToBase64(file);
      setFormData(prev => ({ ...prev, image: base64 }));
      setImagePreview(base64);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.name || !formData.address || !formData.category) { alert('Sila isi semua maklumat yang diperlukan.'); return; }
    setIsSubmitting(true);
    setTimeout(() => { addLocation(formData); setSuccess(true); setIsSubmitting(false); setTimeout(() => navigate('/'), 1500); }, 500);
  }

  if (success) return (
    <div className="success-page"><div className="success-content">
      <span className="success-icon">✅</span><h2>Berjaya!</h2><p>Lokasi baru telah ditambah.</p>
    </div></div>
  );

  return (
    <div className="form-page">
      <div className="page-header"><h1>📍 Tambah Lokasi Baru</h1><p>Kongsi lokasi makanan menarik di Putrajaya</p></div>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label>Gambar Lokasi</label>
          <div className="image-upload">
            {imagePreview ? (
              <div className="image-preview">
                <img src={imagePreview} alt="Preview" />
                <button type="button" className="remove-image" onClick={() => { setImagePreview(''); setFormData(prev => ({...prev, image:''})); }}>✕</button>
              </div>
            ) : (
              <label className="upload-area">
                <input type="file" accept="image/*" onChange={handleImageChange} hidden />
                <span className="upload-icon">📷</span><span className="upload-text">Klik untuk muat naik gambar</span><span className="upload-hint">JPG, PNG (Maks 5MB)</span>
              </label>
            )}
          </div>
        </div>
        <div className="form-group"><label htmlFor="name">Nama Lokasi *</label><input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Contoh: Restoran Selera Putra" required /></div>
        <div className="form-group"><label htmlFor="address">Alamat *</label><input type="text" id="address" name="address" value={formData.address} onChange={handleChange} placeholder="Contoh: Presint 15, Putrajaya" required /></div>
        <div className="form-group"><label htmlFor="category">Kategori *</label>
          <select id="category" name="category" value={formData.category} onChange={handleChange} required>
            <option value="">-- Pilih Kategori --</option>
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>
        <div className="form-group"><label htmlFor="description">Penerangan</label><textarea id="description" name="description" value={formData.description} onChange={handleChange} placeholder="Terangkan tentang lokasi ini..." rows="4" /></div>
        <button type="submit" className="btn-submit" disabled={isSubmitting}>{isSubmitting ? '⏳ Menyimpan...' : '✅ Tambah Lokasi'}</button>
      </form>
    </div>
  );
}

export default AddLocationPage;
