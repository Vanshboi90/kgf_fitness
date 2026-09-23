# 🏋️ KGF Fitness — Kinetic Luxury Web Experience

<div align="center">

  ![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=for-the-badge&logo=next.js&logoColor=white)
  ![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
  ![Three.js](https://img.shields.io/badge/Three.js-r182-black?style=for-the-badge&logo=threedotjs&logoColor=white)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

  <p align="center">
    <strong>Dighi's Premier 5,000 Sq Ft Fitness Destination.</strong><br />
    An immersive, open-source web application featuring interactive 3D WebGL visuals, kinetic scroll choreography, and high-performance modern web design.
  </p>

  <p align="center">
    <a href="#-key-features">Key Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-project-structure">Project Structure</a> •
    <a href="#-customization">Customization</a> •
    <a href="#-contributing">Contributing</a>
  </p>
</div>

---

## 📖 Overview

**KGF Fitness (Kinetic Fitness)** is a cutting-edge web application built for Dighi's most spacious gym (5,000 sq ft of kinetic luxury). Designed with an aesthetic-first philosophy, this project blends **WebGL 3D graphics**, **GSAP timeline animations**, and **Lenis smooth scrolling** into a seamless, interactive storytelling experience.

As users navigate through the site, a 3D dumbbell dynamically translates, rotates, and transitions between chrome and gold materials in synchrony with scroll depth, guiding visitors through gym zones, amenities, membership packages, and direct location information.

---

## ✨ Key Features

- **🎮 Interactive 3D WebGL Canvas**:
  - Procedurally modeled 3D dumbbell rendered via **Three.js** and **React Three Fiber**.
  - Realistic environment reflections, directional lighting, and floating physics (`@react-three/drei`).
  - Scroll-linked kinetic trajectory driven by **GSAP ScrollTrigger**.
  - Adaptive material transitions (Chrome $\leftrightarrow$ Champion Gold).
- **🌊 Kinetic Inertial Scrolling**:
  - Powered by **Lenis** for silky-smooth momentum scrolling across all desktop and mobile devices.
- **⚡ Hero Section with Cinematic Reveals**:
  - Staggered GSAP text reveals, live availability status beacon, and fast-action CTAs.
- **🏛️ "The Space" Bento Grid**:
  - Highlighting the 5,000 sq ft facility at Rajnandini Towers, Dighi.
  - Interactive Google Maps navigation card and early-bird discount counter.
- **🥊 Dynamic Training Zones**:
  - Showcases CrossFit & Abs, Zumba & Yoga, Cardio Zone, and Heavy Free-Weight Lifting.
  - Luxury amenities deck: Steam Bath, Diet Café (Nutrition + BMI Machine), Trekking Community, and Game Zone.
- **💳 Multi-Tier Membership Configurator**:
  - Interactive duration switcher (Monthly, Quarterly, Half-Yearly, Annual).
  - Clear feature breakdown checklists and "Most Popular" highlighted tier.
- **💬 Testimonials Carousel**:
  - Member transformation stories and authentic reviews.
- **📍 Location & Contact Hub**:
  - Integrated location details, operating hours, direct Google Maps link, phone, and social media connectivity.
- **📱 Responsive & Optimized**:
  - Clamped Device Pixel Ratio (DPR) for smooth 60fps performance on mobile, tablet, and high-DPI displays.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[Next.js 16](https://nextjs.org/)** | React Framework with App Router, server-first architecture & font optimization |
| **[React 19](https://react.dev/)** | Modern component rendering and hooks |
| **[TypeScript](https://www.typescriptlang.org/)** | Strong static typing and developer ergonomics |
| **[Three.js](https://threejs.org/)** | WebGL 3D rendering engine |
| **[@react-three/fiber](https://r3f.docs.pmnd.rs/)** | Declarative React wrapper for Three.js |
| **[@react-three/drei](https://github.com/pmndrs/drei)** | Useful helpers and abstractions for React Three Fiber |
| **[GSAP 3](https://greensock.com/gsap/)** | Professional-grade timeline animations & ScrollTrigger |
| **[Lenis](https://lenis.darkroom.engineering/)** | High-performance smooth kinetic scroll |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | Next-generation utility-first styling with custom theme palette |
| **[Swiper](https://swiperjs.com/)** | Touch-enabled sliders and interactive carousels |

---

## 📁 Project Structure

```text
kgf_fitness/
├── app/
│   ├── globals.css          # Tailwind CSS v4 styles & custom color definitions
│   ├── layout.tsx           # Root layout with Oswald/Inter fonts & Lenis provider
│   ├── page.tsx             # Main landing page assembling 3D canvas and sections
│   └── icon.ico             # Brand favicon
├── components/
│   ├── 3d/
│   │   ├── Dumbbell.tsx     # 3D Dumbbell mesh, materials, and GSAP scroll choreography
│   │   └── Scene.tsx        # React Three Fiber Canvas with lights, environment, and Float
│   └── sections/
│       ├── Navigation.tsx   # Glassmorphic header with smooth-scrolling nav anchors
│       ├── Hero.tsx         # Bold kinetic hero section with text animations
│       ├── TheSpace.tsx     # 5,000 sq ft bento grid layout
│       ├── TrainingZones.tsx# Interactive workout zones and amenity cards
│       ├── Membership.tsx   # Tiered pricing plans with duration toggles
│       ├── Testimonials.tsx # Client reviews & member experiences
│       ├── FoundersOffer.tsx# Limited promotional membership callout
│       ├── LocationSection.tsx # Venue details, timings, and map integration
│       └── Footer.tsx       # Comprehensive footer with links and branding
├── public/
│   ├── logo.avif            # High-resolution gym branding logo
│   └── ...                  # SVGs and static media assets
├── package.json             # Scripts and dependency specifications
├── tsconfig.json            # TypeScript configuration
└── next.config.ts           # Next.js configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** `v18.18+` or `v20+` (recommended: latest LTS)
- **npm** (comes with Node), **pnpm**, or **yarn**
- **Git**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Vanshboi90/kgf_fitness.git
   cd kgf_fitness
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **View in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the live interactive experience.

---

## ⚙️ Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the Next.js development server on `http://localhost:3000` |
| `npm run build` | Compiles and builds the application for production deployment |
| `npm run start` | Boots the production server after building |
| `npm run lint` | Runs ESLint to check for code quality and syntax issues |

---

## 🎨 Theme & Color Palette

KGF Fitness uses a tailored dark luxury color palette defined for high contrast and kinetic feel:

| Name | Hex / Value | Usage |
| :--- | :--- | :--- |
| **Void Navy** | `#0B0F19` | Deep primary background color |
| **Kinetic Teal** | `#2DD4BF` | Vibrant cyan/teal accent for highlights and primary CTAs |
| **Champion Gold**| `#FBBF24` | Metallic gold accent for premium badges & tier cards |
| **Slate Grey** | `#94A3B8` | Neutral secondary text and subtle borders |

---

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn, inspire, and create! Any contributions you make are **greatly appreciated**.

1. **Fork the Project**
2. **Create your Feature Branch**:
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your Changes**:
   ```bash
   git commit -m "Add some AmazingFeature"
   ```
4. **Push to the Branch**:
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

---

## 📍 Location & Contact

- **Facility**: KGF Fitness (Kinetic Fitness)
- **Address**: 2nd Floor, Above HDFC Bank, Opp. Pizza Hut, Dighi, Pune, Maharashtra, India
- **Area**: 5,000 Sq Ft
- **Repository**: [https://github.com/Vanshboi90/kgf_fitness](https://github.com/Vanshboi90/kgf_fitness)

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.
