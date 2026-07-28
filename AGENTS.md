# AGENT.MD — System Architecture Specification
> **System Architecture & Content Management Specification**
> **Owner:** Dwara Yoga Pradana (Information Technology Graduate - UNY)[cite: 1]

---

## 1. Project Overview
- **Concept:** Portfolio Web & Profile Showcase berbasis Static Site Generation (SSG).
- **Backend Strategy:** **No-Backend / Serverless Static**. Mengeliminasi server backend & database untuk kecepatan instan, biaya $0 (free hosting), dan keamanan 100%.
- **Content Management:** Berbasis file lokal (**Astro Content Collections**) menggunakan format Markdown (`.md`) dan Data JSON (`.json`).
- **Target Hosting:** Personal Home Server

---

## 2. Tech Stack & Tools

| Komponen | Teknologi / Library | Deskripsi |
| :--- | :--- | :--- |
| **Core Framework** | **Astro.js (v4+)** | Framework SSG berbasis *Island Architecture* (Zero JS by default). |
| **UI Components** | **React.js** | Digunakan terbatas untuk komponen interaktif (Project Filter, Modal PDF Preview, Toggle Theme). |
| **Styling** | **Tailwind CSS** + Lucide Icons | Styling utilitas modern yang responsif dan ringan. |
| **Content Engine** | **Astro Content Collections** | Validasi skema data lokal secara tipe aman (*type-safe*) menggunakan **Zod**. |
| **SEO & Meta** | Astro SEO / OpenGraph | Schema markup, sitemap.xml, dan RSS Feed otomatis. |

---

## 3. Directory & Folder Structure

```text
portfolio-astro/
├── public/                 # Asset statis yang dapat diakses publik secara langsung
│   ├── cv-dwara-yoga.pdf   # File CV Utama
│   ├── certs/              # Penyimpanan File PDF Sertifikat
│   │   ├── dicoding-sql.pdf
│   │   ├── dicoding-pm.pdf
│   │   └── dicoding-software-dev.pdf
│   └── images/             # Screenshot & Thumbnail Proyek
│       └── web-diagnosis-gigi.jpg
├── src/
│   ├── content/            # LOCAL CONTENT MANAGEMENT SYSTEM
│   │   ├── config.ts       # Validasi Skema Zod
│   │   ├── profile.json    # Data Diri, Pendidikan (UNY, IPK 3.83), & Kontak
│   │   ├── projects/       # Markdown (.md) per proyek (Link Web & GitHub)
│   │   │   ├── web-diagnosis-gigi.md
│   │   └── certificates/   # JSON (.json) per sertifikat (Path PDF & Verifikasi)
│   │       ├── dicoding-sql.json
│   │       └── dicoding-pm.json
│   ├── components/         # React & Astro UI Components
│   │   ├── Hero.astro
│   │   ├── ProjectCard.tsx
│   │   ├── CertificateCard.tsx
│   │   └── SkillBadge.astro
│   ├── layouts/            # Layout Utama & SEO Head
│   └── pages/              # File-based Routing (index.astro, projects/[slug].astro)
├── astro.config.mjs
└── package.json