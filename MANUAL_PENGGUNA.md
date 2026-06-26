# 📖 MANUAL PENGGUNA
## Aplikasi Makan Putrajaya (PWA)
### Versi 1.0

---

## 📋 ISI KANDUNGAN

1. [Pengenalan](#1-pengenalan)
2. [Keperluan Sistem](#2-keperluan-sistem)
3. [Pemasangan Aplikasi (PWA)](#3-pemasangan-aplikasi-pwa)
4. [Navigasi Utama](#4-navigasi-utama)
5. [Modul 1: Halaman Utama](#5-modul-1-halaman-utama)
6. [Modul 2: Tambah Lokasi](#6-modul-2-tambah-lokasi)
7. [Modul 3: Daftar Kedai (Peniaga)](#7-modul-3-daftar-kedai-peniaga)
8. [Modul 4: Butiran Lokasi](#8-modul-4-butiran-lokasi)
9. [Soalan Lazim (FAQ)](#9-soalan-lazim-faq)

---

## 1. PENGENALAN

**Makan Putrajaya** adalah sebuah aplikasi web progresif (PWA) yang membolehkan pengguna mencari, berkongsi, dan mempromosikan lokasi makanan menarik di sekitar Putrajaya.

### Objektif Aplikasi:
- Memudahkan pengguna mencari tempat makan di Putrajaya
- Membolehkan sesiapa sahaja berkongsi lokasi makanan yang menarik
- Memberi peluang kepada peniaga untuk mempromosikan kedai mereka
- Menyediakan maklumat lengkap termasuk menu dan harga

### Jenis Pengguna:

| Pengguna | Peranan |
|----------|---------|
| **Pengguna Umum** | Mencari lokasi makanan, melihat butiran, menambah lokasi baru |
| **Peniaga/Penjual** | Mendaftar kedai, memasukkan maklumat kedai dan menu |

---

## 2. KEPERLUAN SISTEM

### Peranti yang Disokong:
- Telefon pintar (Android / iOS)
- Tablet
- Komputer riba / Desktop

### Pelayar Web yang Disokong:
- Google Chrome (disyorkan)
- Safari
- Mozilla Firefox
- Microsoft Edge

### Keperluan Lain:
- Sambungan internet (untuk muat pertama kali)
- Boleh digunakan secara offline selepas pemasangan PWA

---

## 3. PEMASANGAN APLIKASI (PWA)

Aplikasi ini boleh dipasang pada peranti anda seperti aplikasi biasa tanpa perlu muat turun dari App Store atau Play Store.

### 3.1 Pemasangan pada Android (Chrome):

1. Buka pelayar **Google Chrome**
2. Layari alamat aplikasi Makan Putrajaya
3. Tunggu sehingga muncul pop-up "Add to Home Screen" atau klik ikon **⋮** (menu)
4. Pilih **"Install app"** atau **"Add to Home screen"**
5. Klik **"Install"**
6. Aplikasi akan muncul di skrin utama telefon anda

### 3.2 Pemasangan pada iPhone/iPad (Safari):

1. Buka pelayar **Safari**
2. Layari alamat aplikasi Makan Putrajaya
3. Klik ikon **Share** (📤) di bahagian bawah
4. Pilih **"Add to Home Screen"**
5. Klik **"Add"**
6. Aplikasi akan muncul di skrin utama

### 3.3 Pemasangan pada Desktop (Chrome):

1. Buka Google Chrome
2. Layari alamat aplikasi
3. Klik ikon **Install** (⊕) di bar alamat
4. Klik **"Install"**

---

## 4. NAVIGASI UTAMA

Aplikasi ini mempunyai **3 bahagian navigasi utama** yang boleh diakses melalui bar navigasi di bahagian bawah skrin:

```
┌─────────────────────────────────┐
│     🏠        📍        🏪      │
│    Utama    Tambah     Kedai    │
└─────────────────────────────────┘
```

| Ikon | Label | Fungsi |
|------|-------|--------|
| 🏠 | **Utama** | Halaman utama - senarai semua lokasi makanan |
| 📍 | **Tambah** | Tambah lokasi makanan baru |
| 🏪 | **Kedai** | Daftar kedai untuk peniaga |

### Menu Hamburger (≡):
- Terletak di bahagian kanan atas header
- Klik untuk memaparkan menu navigasi penuh

---

## 5. MODUL 1: HALAMAN UTAMA

Halaman utama memaparkan semua lokasi makanan yang telah didaftarkan.

### 5.1 Carian Lokasi

1. Klik pada **kotak carian** di bahagian atas
2. Taipkan kata kunci (nama restoran, alamat, atau jenis makanan)
3. Hasil carian akan dipaparkan secara automatik
4. Untuk reset carian, padam teks dalam kotak carian

**Contoh carian:**
- "Nasi Kandar"
- "Presint 15"
- "Kafe"

### 5.2 Penapis Kategori

Gunakan butang kategori untuk menapis lokasi mengikut jenis:

| Kategori | Penerangan |
|----------|------------|
| **Semua** | Papar semua lokasi |
| **Melayu** | Restoran/gerai masakan Melayu |
| **Mamak** | Restoran mamak / nasi kandar |
| **Kafe** | Kafe dan kedai kopi |
| **Gerai** | Gerai tepi jalan / food truck |
| **Western** | Masakan barat |
| **Cina** | Masakan Cina |
| **Thai** | Masakan Thai |
| **Lain-lain** | Kategori lain |

**Cara menggunakan:**
1. Skrol butang kategori ke kiri/kanan
2. Klik kategori yang dikehendaki
3. Senarai akan dikemas kini mengikut kategori dipilih
4. Klik "Semua" untuk melihat semua lokasi

### 5.3 Kad Lokasi

Setiap lokasi dipaparkan sebagai kad yang mengandungi:
- **Gambar** lokasi (jika ada)
- **Tag kategori** (di penjuru kanan atas gambar)
- **Nama** lokasi
- **Alamat** (ditandai dengan ikon 📍)
- **Penerangan** ringkas
- **Rating** bintang (jika ada)

**Untuk melihat butiran penuh:** Klik pada mana-mana kad lokasi.

---

## 6. MODUL 2: TAMBAH LOKASI

Modul ini membolehkan sesiapa sahaja menambah lokasi makanan baru.

### 6.1 Cara Menambah Lokasi:

1. Klik **📍 Tambah** di bar navigasi bawah
2. Isi borang berikut:

| Medan | Wajib? | Penerangan |
|-------|--------|------------|
| Gambar Lokasi | Tidak | Muat naik gambar (JPG/PNG, maks 5MB) |
| Nama Lokasi | **Ya** | Nama restoran/kedai/gerai |
| Alamat | **Ya** | Alamat lengkap lokasi di Putrajaya |
| Kategori | **Ya** | Pilih kategori yang sesuai |
| Penerangan | Tidak | Maklumat tambahan tentang lokasi |

### 6.2 Muat Naik Gambar:

1. Klik pada kawasan **"📷 Klik untuk muat naik gambar"**
2. Pilih gambar dari peranti anda
3. Gambar akan dipaparkan sebagai preview
4. Untuk tukar gambar, klik butang **"✕"** dan pilih gambar baru

**Had gambar:**
- Format: JPG, PNG
- Saiz maksimum: 5MB

### 6.3 Menghantar Borang:

1. Pastikan semua medan wajib (*) telah diisi
2. Klik butang **"✅ Tambah Lokasi"**
3. Tunggu paparan "Berjaya!" muncul
4. Anda akan dialihkan ke halaman utama secara automatik

---

## 7. MODUL 3: DAFTAR KEDAI (PENIAGA)

Modul ini khas untuk **peniaga/penjual** yang ingin mendaftarkan kedai mereka.

### 7.1 Maklumat Kedai

1. Klik **🏪 Kedai** di bar navigasi bawah
2. Isi bahagian **"📋 Maklumat Kedai"**:

| Medan | Wajib? | Penerangan |
|-------|--------|------------|
| Nama Kedai | **Ya** | Nama kedai/restoran anda |
| Nama Pemilik | **Ya** | Nama penuh pemilik |
| No. Telefon | **Ya** | Nombor telefon yang boleh dihubungi |
| E-mel | Tidak | Alamat e-mel perniagaan |
| Alamat Kedai | **Ya** | Alamat lengkap kedai |
| Kategori | Tidak | Jenis masakan yang dijual |
| Waktu Operasi | Tidak | Contoh: "8:00 AM - 10:00 PM" |
| Penerangan | Tidak | Maklumat tambahan tentang kedai |

### 7.2 Menambah Menu

Bahagian **"🍜 Menu / Apa Yang Dijual"** membolehkan anda menyenaraikan menu kedai.

**Cara menambah item menu:**

1. Isi **Nama Menu** (contoh: "Nasi Lemak Special")
2. Masukkan **Harga (RM)** (contoh: 8.00)
3. Isi **Penerangan** ringkas (pilihan)
4. Klik butang **"➕ Tambah Menu"**
5. Item akan muncul dalam senarai di atas
6. Ulang langkah 1-4 untuk menambah item lain

**Cara memadam item menu:**
- Klik ikon **🗑️** di sebelah item yang ingin dipadam

### 7.3 Menghantar Pendaftaran:

1. Pastikan semua medan wajib telah diisi
2. Pastikan menu telah ditambah (disyorkan)
3. Klik butang **"✅ Daftar Kedai"**
4. Tunggu paparan "Berjaya Didaftar!" muncul
5. Kedai anda akan muncul di halaman utama

---

## 8. MODUL 4: BUTIRAN LOKASI

Halaman ini memaparkan maklumat lengkap tentang sesebuah lokasi.

### 8.1 Cara Mengakses:
- Klik pada mana-mana **kad lokasi** di halaman utama

### 8.2 Maklumat yang Dipaparkan:

**Bahagian Atas:**
- Gambar lokasi (saiz penuh)
- Tag kategori
- Nama lokasi
- Alamat
- Rating bintang

**Bahagian Penerangan:**
- Penerangan lengkap tentang lokasi

**Bahagian Maklumat Kedai** (jika ada peniaga berdaftar):
- Nama pemilik
- Nombor telefon (boleh klik untuk membuat panggilan)
- E-mel (boleh klik untuk menghantar e-mel)
- Waktu operasi

**Bahagian Menu** (jika ada):
- Senarai menu dengan nama dan harga
- Penerangan setiap item menu

### 8.3 Tindakan Tersedia:

| Tindakan | Cara |
|----------|------|
| **Kembali** | Klik "← Kembali" di bahagian atas |
| **Hubungi** | Klik nombor telefon untuk call |
| **E-mel** | Klik alamat e-mel untuk hantar e-mel |
| **Padam** | Klik "🗑️ Padam Lokasi" (dengan pengesahan) |

### 8.4 Memadam Lokasi:
1. Skrol ke bahagian bawah halaman butiran
2. Klik butang **"🗑️ Padam Lokasi"**
3. Pop-up pengesahan akan muncul
4. Klik **"OK"** untuk sahkan pemadaman
5. Lokasi akan dipadam dan anda dialihkan ke halaman utama

---

## 9. SOALAN LAZIM (FAQ)

### S1: Adakah aplikasi ini percuma?
**J:** Ya, aplikasi ini sepenuhnya percuma untuk digunakan.

### S2: Bolehkah saya menggunakan aplikasi tanpa internet?
**J:** Ya, selepas pemasangan PWA, aplikasi boleh diakses secara offline. Namun, data baru memerlukan internet untuk dimuat naik.

### S3: Bagaimana data saya disimpan?
**J:** Data disimpan secara lokal dalam pelayar web anda (localStorage). Data tidak dikongsi dengan pelayan luar.

### S4: Adakah had untuk bilangan lokasi yang boleh ditambah?
**J:** Tiada had khusus, tetapi bergantung pada kapasiti penyimpanan pelayar anda (biasanya ~5MB).

### S5: Gambar saya terlalu besar, apa yang perlu dilakukan?
**J:** Saiz gambar maksimum ialah 5MB. Anda boleh menggunakan aplikasi pengecil gambar untuk mengurangkan saiz sebelum muat naik.

### S6: Bagaimana jika saya terpadam lokasi secara tidak sengaja?
**J:** Malangnya, lokasi yang dipadam tidak boleh dikembalikan. Sila berhati-hati sebelum memadam.

### S7: Bolehkah saya mengedit maklumat lokasi yang sudah ditambah?
**J:** Pada versi semasa (v1.0), fungsi edit belum tersedia. Anda boleh memadam dan menambah semula lokasi tersebut.

### S8: Adakah data saya akan hilang jika saya clear browser cache?
**J:** Ya, kerana data disimpan dalam localStorage pelayar. Pastikan anda tidak membersihkan cache pelayar jika tidak mahu kehilangan data.

---

## 📞 BANTUAN & SOKONGAN

Jika anda menghadapi sebarang masalah atau mempunyai cadangan penambahbaikan, sila hubungi:

- **GitHub:** [github.com/mohdfairuzmy2/makan-putrajaya](https://github.com/mohdfairuzmy2/makan-putrajaya)

---

*Manual Pengguna ini adalah untuk Aplikasi Makan Putrajaya Versi 1.0*
*Tarikh Kemaskini: Jun 2026*
