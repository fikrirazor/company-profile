
# KARYAVISUAL - Company Profile Website

Profil perusahaan digital untuk KARYAVISUAL, agensi kreatif yang dibangun dengan React + TailwindCSS + Zustand + Formik dan Yup.

## 📋 Deskripsi

Website profil perusahaan yang menampilkan layanan, tim, dan portofolio KARYAVISUAL. Dibangun dengan teknologi modern menggunakan React, TypeScript, dan TailwindCSS.

## 🚀 Fitur Utama

- **Responsive Design**: Tampil sempurna di semua perangkat
- **Multi-page Layout**: Home, About, Services, Team, Blog
- **Interactive Components**: Carousel, navigation, dan formulir
- **Blog Management System**: Dengan fitur create dan read blog post
- **Authentication**: Sistem login untuk admin blog
- **Modern UI/UX**: Menggunakan TailwindCSS untuk desain yang menarik

## 🛠️ Teknologi yang Digunakan

- **Frontend**: React + TypeScript
- **Styling**: TailwindCSS
- **Routing**: React Router
- **State Management**: Zustand
- **Form Handling**: Formik + Yup
- **UI Components**: TailwindCSS
- **Build Tool**: Vite

## 📁 Struktur Proyek

```
src/
├── components/          # Komponen UI reusable
│   ├── homepage/       # Komponen khusus halaman home
│   └── ui/            # Komponen UI dasar
├── pages/             # Halaman utama website
├── store/             # Manajemen state global
├── assets/            # Gambar dan aset statis
├── lib/               # Utility functions
└── App.tsx            # Root aplikasi
```

## 🎨 Halaman yang Tersedia

1. **Home** (`/`) - Landing page utama
2. **About** (`/about`) - Tentang perusahaan dan sejarah
3. **Services** (`/services`) - Layanan yang ditawarkan
4. **Team** (`/teams`) - Profil tim kreatif
5. **Blog** (`/blogs`) - Daftar artikel blog
6. **Create Blog** (`/create-blog`) - Form pembuatan blog (admin only)
7. **Login** (`/login`) - Halaman autentikasi admin

## 🔧 Instalasi

1. Clone repository ini:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
# atau
yarn install
```

3. Jalankan development server:
```bash
npm run dev
# atau
yarn dev
```

4. Build untuk produksi:
```bash
npm run build
# atau
yarn build
```

## 📝 Catatan Pengembangan

- Semua data blog disimpan di localStorage
- Sistem autentikasi menggunakan state management
- Data tim diambil dari API eksternal (randomuser.me)





