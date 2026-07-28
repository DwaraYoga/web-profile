# UI & COMPONENT DESIGN BRIEF
> **Design System, Component Specifications, and Wireframe Guide**
> **Tech Stack UI:** Astro Components, React.js (Interactivity), Tailwind CSS, Lucide Icons

---

## 1. Design System & Theme Guidelines

- **Color Palette:**
  - **Background:** Dark Mode Base (`#0f172a` - Slate 900)
  - **Surface/Cards:** Dark Slate (`#1e293b` - Slate 800)
  - **Primary Accent:** Electric Cyan (`#38bdf8` - Sky 400)
  - **Text Primary:** Pure/Off White (`#f8fafc` - Slate 50)
  - **Text Secondary:** Cool Gray (`#94a3b8` - Slate 400)
- **Typography:** Sans-serif modern (Inter / System UI)
- **Border Radius:** Rounded-xl (`12px`) untuk cards, Rounded-lg (`8px`) untuk buttons & badges.

---

## 2. Page Structure (Landing Page Layout)

Landing page dirancang sebagai **Single Page Scroll** dengan seksi-seksi berikut:
1. **Hero Section:** Salam pembuka, foto profil, deskripsi ringkas, tombol CTA (Download CV & Social Links).
2. **About & Education Section:** Profile singkat, riwayat S1 Teknologi Informasi UNY (IPK 3.83), dan *highlight* skripsi Faster R-CNN.
3. **Skills Section:** Filterable grid/badges (Hard Skills & Soft Skills).
4. **Projects Showcase Section:** Grid kartu portofolio proyek (Link ke Demo Web & GitHub).
5. **Certificates Section:** Cards sertifikat kompetensi (Link/Preview PDF).
6. **Footer Section:** Link kontak cepat & copyright.

---

## 3. Detailed Component Specifications

### A. Project Card (`ProjectCard.tsx` / `ProjectCard.astro`)
Komponen visual untuk memamerkan hasil karya/proyek web development dan AI.

#### **Visual Wireframe & Layout:**
```text
+-------------------------------------------------------+
|  [IMAGE THUMBNAIL]                  [Featured Badge]  |
+-------------------------------------------------------+
|  Judul Proyek                                (2024)   |
|  Deskripsi singkat proyek dalam 2-3 baris kalimat...  |
|                                                       |
|  [React]  [Python]  [Faster R-CNN]   <-- Tech Stack   |
+-------------------------------------------------------+
|  [ 🔗 Live Web / Demo ]     [ 🐙 Source Code ]        |
+-------------------------------------------------------+