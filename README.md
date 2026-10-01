<div align="center">

# 🚀 ByteSpace — Modern Online Learning & Creator Platform

<p align="center">
  <strong>A Next-Generation Digital Learning Marketplace & Knowledge Ecosystem</strong>
</p>

### 🌐 **LIVE DEMO**
# 🔗 [**https://byte-space-doin-tech.vercel.app/**](https://byte-space-doin-tech.vercel.app/)

[![Live Deployment](https://img.shields.io/badge/Live%20Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://byte-space-doin-tech.vercel.app/)
[![Next.js 16](https://img.shields.io/badge/Next.js%2016-Turbopack-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React%2019-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind%20CSS%204-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

---

</div>

## 📖 About ByteSpace

**ByteSpace** is a high-performance, pixel-accurate online course marketplace and digital learning ecosystem inspired by modern Figma design systems. It connects passionate creators, industry mentors, and ambitious lifelong learners through interactive masterclasses, curriculum roadmaps, and digital assets.

Built with cutting-edge web technologies including **Next.js 16 (Turbopack)**, **React 19**, **TypeScript**, and **Tailwind CSS 4**, ByteSpace delivers an ultrafast, fully responsive experience across all viewports from ultra-wide desktop monitors to mobile phones.

---

## ✨ Key Features & Pages

| Page | Route | Description & Highlights |
| :--- | :--- | :--- |
| **🏠 Home / Landing** | `/` | Hero section with live search and floating metric badges, partner showcase, category matrices, course discovery tabs, learner & creator value propositions, community testimonials, and creator CTA banner. |
| **🔍 Search & Catalog** | `/courses`, `/search` | Live query synchronization, category pills, responsive filter toolbars (Level, Category, Sort dropdowns), course grid layout, and interactive pagination. |
| **📘 Course Details** | `/courses/[slug]` | Comprehensive course hero with video preview modal, instructor attribution, key statistics, tabbed sub-navigation (`About`, `Lessons`, `Reviews`), curriculum overview, and sticky enrollment sidebar. |
| **🎓 Course Lessons** | `/courses/[slug]/lessons` | Full curriculum module accordion with collapsible units, free preview indicators, durations, and interactive learning progress tracking widget. |
| **⭐ Course Reviews** | `/courses/[slug]/reviews` | Overall course rating breakdown (5-star to 1-star distribution bars), student review cards, rating summaries, and reviewer feedback. |
| **👤 Creator Profile** | `/creators`, `/creators/[slug]` | Dedicated instructor profiles with bio, statistics pills (products & followers count), interactive follow/unfollow toggle, and published course showcase. |
| **🔐 Authentication** | `/login`, `/register` | Split-layout auth experience, password visibility toggle, accessible form validation, remember-me options, Google & Apple OAuth buttons, and seamless route switching. |
| **🚫 404 Not Found** | `/not-found` / 404 | Custom Figma-designed error experience with 3D floating assets, lime-gradient headline, and intuitive return-to-home actions for any invalid route. |

---

## 🛠️ Technology Stack

* **Framework**: [Next.js 16.3.8 (App Router & Turbopack)](https://nextjs.org/)
* **Library**: [React 19](https://react.dev/)
* **Language**: [TypeScript 5](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS 4.x](https://tailwindcss.com/)
* **UI Components**: [shadcn/ui](https://ui.shadcn.com/) & [Radix UI](https://www.radix-ui.com/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Fonts**: `Poppins` (Headings) & `Satoshi` (Body & UI)
* **Deployment**: [Vercel](https://vercel.com/)

---

## 🏗️ Project Architecture

```text
ByteSpace-New/
├── public/
│   └── images/              # Optimized Figma 3D assets, partner logos, & avatars
│       ├── 404/             # 3D floating shapes for error page
│       ├── courses/         # Course thumbnails & cover graphics
│       ├── hero/            # Hero student portrait, 3D ornaments, partner logos
│       ├── home/            # Learner showcase, creator showcase, CTA assets
│       └── testimonials/    # Community student avatars
├── src/
│   ├── app/                 # Next.js App Router routes & layouts
│   │   ├── (auth)/          # Grouped authentication routes (login, register)
│   │   ├── courses/         # Course catalog & dynamic [slug] routes (overview, lessons, reviews)
│   │   ├── creators/        # Creator directory & dynamic [slug] instructor pages
│   │   ├── search/          # Search catalog page
│   │   ├── layout.tsx       # Root layout & font configuration
│   │   ├── not-found.tsx    # Custom 404 catch-all error page
│   │   └── page.tsx         # Home landing page
│   ├── components/
│   │   ├── shared/          # Reusable shared components (Header, Footer, Logo, CourseCard, PartnerBar)
│   │   └── ui/              # shadcn/ui primitives (Button, Card, Input, etc.)
│   ├── data/
│   │   └── courses.ts       # Course catalog dataset, category taxonomies, & filter options
│   ├── features/            # Feature-driven modular architecture
│   │   ├── auth/            # Auth forms & visual showcase
│   │   ├── course-details/  # Course hero, tabs, overview, & enrollment sidebar
│   │   ├── course-lessons/  # Module accordion & learning progress tracker
│   │   ├── course-reviews/  # Rating summary cards & student reviews list
│   │   ├── creator-profile/ # Creator hero banner & product showcase
│   │   ├── home/            # Home sections & interactive floating widgets
│   │   └── search/          # Search filters, hero, & pagination controls
│   └── lib/
│       └── utils.ts         # Utility functions (clsx + tailwind-merge)
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## ⚡ Getting Started & Local Development

### 1. Prerequisites
Ensure you have **Node.js 18.18+** or higher installed on your system.

### 2. Clone the Repository
```bash
git clone https://github.com/MasfiqurNehal/ByteSpace-New.git
cd ByteSpace-New
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 5. Build for Production
```bash
# Typecheck
npm run typecheck

# Lint
npm run lint

# Production Build
npm run build

# Start Production Server
npm run start
```

---

## 👨‍💻 Author & Developer

<div align="center">

### **Md. Masfiqur Rahman Nehal**

[![Portfolio](https://img.shields.io/badge/Portfolio-masfiqurnehal.com-003BE2?style=for-the-badge&logo=google-chrome&logoColor=white)](https://www.masfiqurnehal.com/)
[![GitHub](https://img.shields.io/badge/GitHub-MasfiqurNehal-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/MasfiqurNehal)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Masfiqur--Nehal-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/masfiqur-nehal/)

* **Portfolio**: [https://www.masfiqurnehal.com/](https://www.masfiqurnehal.com/)
* **GitHub**: [https://github.com/MasfiqurNehal](https://github.com/MasfiqurNehal)
* **LinkedIn**: [https://www.linkedin.com/in/masfiqur-nehal/](https://www.linkedin.com/in/masfiqur-nehal/)

</div>

---

<div align="center">
  <sub>Built with ❤️ by Md. Masfiqur Rahman Nehal • Powered by Next.js & Vercel</sub>
</div>
