import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addVendor, getCategories } from '../utils/storage';

function VendorPage() {
  const navigate = useNavigate();
  const categories = getCategories().filter(c => c !== 'Semua');
  const [formData, setFormData] = useState({ shopName:'', ownerName:'', phone:'', email:'', address:'', category:'', operatingHours:'', description:'', menu:[] });
  const [menuItem, setMenuItem] = useState({ name:'', price:'', description:'' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(e) { setFormData(prev => ({...prev, [e.target.name]: e.target.value})); }
  function handleMenuItemChange(e) { setMenuItem(prev => ({...prev, [e.target.name]: e.target.value})); }

  function addMenuItem() {
    if (!menuItem.name || !menuItem.price) { alert('Sila masukkan nama dan harga menu.'); return; }
    setFormData(prev => ({...prev, menu:[...prev.menu, {...menuItem, price:parseFloat(menuItem.price)}]}));
    setMenuItem({name:'',price:'',description:''});
  }

  function removeMenuItem(i) { setFormData(prev => ({...prev, menu:prev.menu.filter((_,idx)=>idx!==i)})); }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.shopName||!formData.ownerName||!formData.phone||!formData.address) { alert('Sila isi semua maklumat yang diperlukan.'); return; }
    setIsSubmitting(true);
    setTimeout(() => { addVendor(formData); setSuccess(true); setIsSubmitting(false); setTimeout(() => navigate('/'), 1500); }, 500);
  }

  if (success) return (<div className="success-page"><div className="success-content"><span className="success-icon">✅</span><h2>Berjaya Didaftar!</h2><p>Kedai anda telah berjaya didaftarkan.</p></div></div>);

  return (
    <div className="form-page">
      <div className="page-header"><h1>🏪 Daftar Kedai Anda</h1><p>Promosikan kedai makan anda kepada penduduk Putrajaya</p></div>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-section">
          <h3>📋 Maklumat Kedai</h3>
          <div className="form-group"><label>Nama Kedai *</label><input type="text" name="shopName" value={formData.shopName} onChange={handleChange} placeholder="Contoh: Restoran Selera Kampung" required /></div>
          <div className="form-group"><label>Nama Pemilik *</label><input type="text" name="ownerName" value={formData.ownerName} onChange={handleChange} placeholder="Nama penuh pemilik" required /></div>
          <div className="form-group"><label>No. Telefon *</label><input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="012-3456789" required /></div>
          <div className="form-group"><label>E-mel</label><input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="kedai@email.com" /></div>
          <div className="form-group"><label>Alamat Kedai *</label><input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Presint 15, Putrajaya" required /></div>
          <div className="form-group"><label>Kategori</label><select name="category" value={formData.category} onChange={handleChange}><option value="">-- Pilih --</option>{categories.map(c=><option key={c} value={c}>{c}</option>)}</select></div>
          <div className="form-group"><label>Waktu Operasi</label><input type="text" name="operatingHours" value={formData.operatingHours} onChange={handleChange} placeholder="8:00 AM - 10:00 PM" /></div>
          <div className="form-group"><label>Penerangan</label><textarea name="description" value={formData.description} onChange={handleChange} placeholder="Terangkan tentang kedai anda..." rows="3" /></div>
        </div>
        <div className="form-section">
          <h3>🍜 Menu / Apa Yang Dijual</h3>
          {formData.menu.length > 0 && (<div className="menu-list">{formData.menu.map((item,i)=>(<div key={i} className="menu-item-card"><div className="menu-item-info"><strong>{item.name}</strong><span className="menu-price">RM {item.price.toFixed(2)}</span>{item.description&&<p>{item.description}</p>}</div><button type="button" className="btn-remove" onClick={()=>removeMenuItem(i)}>🗑️</button></div>))}</div>)}
          <div className="add-menu-form">
            <div className="form-group"><label>Nama Menu</label><input type="text" name="name" value={menuItem.name} onChange={handleMenuItemChange} placeholder="Nasi Lemak Special" /></div>
            <div className="form-group"><label>Harga (RM)</label><input type="number" name="price" value={menuItem.price} onChange={handleMenuItemChange} placeholder="0.00" step="0.50" min="0" /></div>
            <div className="form-group"><label>Penerangan</label><input type="text" name="description" value={menuItem.description} onChange={handleMenuItemChange} placeholder="Penerangan ringkas..." /></div>
            <button type="button" className="btn-add-menu" onClick={addMenuItem}>➕ Tambah Menu</button>
          </div>
        </div>
        <button type="submit" className="btn-submit" disabled={isSubmitting}>{isSubmitting ? '⏳ Mendaftar...' : '✅ Daftar Kedai'}</button>
      </form>
    </div>
  );
}

export default VendorPage;
