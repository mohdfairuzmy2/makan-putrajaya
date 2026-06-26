const LOCATIONS_KEY = 'makan_putrajaya_locations';
const VENDORS_KEY = 'makan_putrajaya_vendors';

const sampleLocations = [
  { id:'1', name:'Selera Putra', address:'Presint 15, Putrajaya', category:'Melayu', description:'Pusat makanan popular dengan pelbagai pilihan masakan Melayu tradisional.', image:'', rating:4.5, createdAt:'2024-01-15T08:00:00Z', vendorId:'v1' },
  { id:'2', name:'Restoran Nasi Kandar Pelita', address:'Presint 2, Putrajaya', category:'Mamak', description:'Nasi kandar terkenal dengan lauk pilihan yang mengenyangkan.', image:'', rating:4.2, createdAt:'2024-02-20T10:00:00Z', vendorId:'v2' },
  { id:'3', name:'Kafe Botanica', address:'Presint 1, Putrajaya', category:'Kafe', description:'Kafe moden dengan suasana tenang dan kopi premium.', image:'', rating:4.7, createdAt:'2024-03-10T09:00:00Z', vendorId:null },
  { id:'4', name:'Gerai Makan Presint 9', address:'Presint 9, Putrajaya', category:'Gerai', description:'Gerai makanan malam dengan pilihan satay, mee goreng dan banyak lagi.', image:'', rating:4.0, createdAt:'2024-04-05T18:00:00Z', vendorId:null }
];

const sampleVendors = [
  { id:'v1', shopName:'Selera Putra', ownerName:'Ahmad bin Hassan', phone:'012-3456789', email:'ahmad@seleraputra.com', address:'Presint 15, Putrajaya', operatingHours:'8:00 AM - 10:00 PM', description:'Pusat makanan dengan 20+ gerai pilihan.', menu:[{name:'Nasi Lemak Special',price:8.00,description:'Nasi lemak dengan ayam goreng, sambal, telur'},{name:'Mee Goreng Mamak',price:7.00,description:'Mee goreng pedas ala mamak'},{name:'Roti Canai',price:2.50,description:'Roti canai lembut dengan kuah dhal'}], createdAt:'2024-01-10T08:00:00Z' },
  { id:'v2', shopName:'Restoran Nasi Kandar Pelita', ownerName:'Muthu a/l Rajan', phone:'013-9876543', email:'pelita@email.com', address:'Presint 2, Putrajaya', operatingHours:'24 Jam', description:'Restoran nasi kandar 24 jam terkenal.', menu:[{name:'Nasi Kandar Biasa',price:10.00,description:'Nasi dengan pilihan 2 lauk'},{name:'Roti Tissue',price:5.00,description:'Roti tissue rangup dengan susu pekat'},{name:'Teh Tarik',price:3.00,description:'Teh tarik panas yang pekat'}], createdAt:'2024-02-15T08:00:00Z' }
];

function initializeData() {
  if (!localStorage.getItem(LOCATIONS_KEY)) localStorage.setItem(LOCATIONS_KEY, JSON.stringify(sampleLocations));
  if (!localStorage.getItem(VENDORS_KEY)) localStorage.setItem(VENDORS_KEY, JSON.stringify(sampleVendors));
}


export function getLocations() { initializeData(); return JSON.parse(localStorage.getItem(LOCATIONS_KEY)||'[]'); }
export function getLocationById(id) { return getLocations().find(l=>l.id===id)||null; }
export function addLocation(loc) {
  const locations = getLocations();
  const newLoc = {...loc, id:Date.now().toString(), createdAt:new Date().toISOString(), rating:0};
  locations.unshift(newLoc);
  localStorage.setItem(LOCATIONS_KEY, JSON.stringify(locations));
  return newLoc;
}
export function deleteLocation(id) {
  const filtered = getLocations().filter(l=>l.id!==id);
  localStorage.setItem(LOCATIONS_KEY, JSON.stringify(filtered));
}
export function getVendors() { initializeData(); return JSON.parse(localStorage.getItem(VENDORS_KEY)||'[]'); }
export function getVendorById(id) { return getVendors().find(v=>v.id===id)||null; }
export function getVendorByLocationId(locId) {
  const loc = getLocationById(locId);
  return (loc && loc.vendorId) ? getVendorById(loc.vendorId) : null;
}
export function addVendor(vendor) {
  const vendors = getVendors();
  const newV = {...vendor, id:'v'+Date.now(), createdAt:new Date().toISOString(), menu:vendor.menu||[]};
  vendors.unshift(newV);
  localStorage.setItem(VENDORS_KEY, JSON.stringify(vendors));
  if (vendor.shopName && vendor.address) {
    addLocation({name:vendor.shopName, address:vendor.address, category:vendor.category||'Lain-lain', description:vendor.description||'', image:'', vendorId:newV.id});
  }
  return newV;
}
export function imageToBase64(file) {
  return new Promise((res,rej)=>{ const r=new FileReader(); r.readAsDataURL(file); r.onload=()=>res(r.result); r.onerror=e=>rej(e); });
}
export function searchLocations(q) {
  const lq = q.toLowerCase();
  return getLocations().filter(l=>l.name.toLowerCase().includes(lq)||l.address.toLowerCase().includes(lq)||l.category.toLowerCase().includes(lq)||l.description.toLowerCase().includes(lq));
}
export function filterByCategory(cat) { return (!cat||cat==='Semua') ? getLocations() : getLocations().filter(l=>l.category===cat); }
export function getCategories() { return ['Semua','Melayu','Mamak','Kafe','Gerai','Western','Cina','Thai','Lain-lain']; }
