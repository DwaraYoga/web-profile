# UI.md — Aurora UI Design System & Component Specification
> **Theme:** Aurora UI (Vibrant Mesh Gradients & Ethereal Northern Lights)
> **Target Framework:** Astro.js + React (Islands) + Tailwind CSS + Lucide Icons

---

## 1. Design Tokens & Theme Specification

### A. Colors (Aurora Palette)
- **Primary / Accent:** Electric Blue (`#0080FF`) — Accent highlight, link, focus ring, & primary buttons.
- **Secondary / Decorative:** Magenta (`#FF1493`) — Decorative accent & highlight elements.
- **Tertiary / Glow:** Cyan (`#00FFFF`) — Secondary glow & atmospheric highlight.
- **Surfaces & Backgrounds (Dark Mode Only):**
  - Base Background: Dark Charcoal (`#090D16`) — *No pure black (#000000)*
  - Card Surface: Dark Slate (`#1E293B`) dengan opacity / backdrop-blur
  - Card Border: Muted Stroke (`#334155` / `rgba(255, 255, 255, 0.1)`)
- **Text:**
  - Primary Text: Off-White (`#F8FAFC`)
  - Secondary Text: Muted Slate (`#94A3B8`)

### B. Typography
- **Font Family:**
  - Display / Body / UI: System UI Stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`)
  - Code / Metadata: `JetBrains Mono, monospace`
- **Scale:**
  - Hero Display: `clamp(2.5rem, 5vw, 4rem)` | Weight: 700
  - H1: `2.25rem` (36px) | Weight: 700
  - H2: `1.5rem` (24px) | Weight: 600
  - Body: `1rem` (16px) | Line Height: 1.6
  - Captions / UI Labels: `0.875rem` (14px) | Weight: 500

### C. Motion & Animation Physics
- **Aurora Gradient Loop:** Mesh gradient animation dengan durasi 8–12 detik (*smooth 60fps CSS transform/opacity loop*).
- **Physics:** Spring (Stiffness: 120, Damping: 20).
- **Entry Animations:** Fade + Translate-Y (`16px → 0px`) over 480ms ease-out (Cascade Stagger: 100ms per item).
- **Hover Transitions:** Scale (`1.03`) + Lift Shadow over 200ms.

---

## 2. Layout Structure (Landing Page Flow)

- **Grid System:** CSS Grid dengan Max-Width Containment `1280px` centered & side padding `1.5rem`.
- **Section Gaps:** Vertical gap dynamic `clamp(4rem, 8vw, 8rem)`.
- **Hero Layout:** Split-Screen (Teks kiri, Aurora Mesh Visual / Photo kanan).
- **Feature/Project Layout:** Zig-Zag alternating text + card layout (Menghindari 3-kolom sejajar yang generik).
- **Mobile Collapse:** Semua layout multi-kolom collapse otomatis di bawah breakpoint `768px` (`min-h-[100dvh]` sebagai pengganti `h-screen`).

---

## 3. Detailed Component Specifications

### A. Project Card Component (`ProjectCard.tsx` / `ProjectCard.astro`)
Digunakan untuk menampilkan portofolio web & aplikasi secara interaktif.

#### **Visual Wireframe:**
```text
+-------------------------------------------------------+
|  [THUMBNAIL IMAGE + MESH GLOW]      [★ Featured]      |
+-------------------------------------------------------+
|  Judul Proyek                                (2024)   |
|  Deskripsi ringkas proyek berbasis data & web...      |
|                                                       |
|  [React]  [Python]  [Faster R-CNN]   <-- Tech Stack   |
+-------------------------------------------------------+
|  [ 🔗 Live Web / Demo ]     [ 🐙 Source Code ]        |
+-------------------------------------------------------+