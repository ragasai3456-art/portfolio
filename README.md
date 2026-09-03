# A Raga Sai - Full-Stack Developer Portfolio

A production-grade, responsive developer portfolio engineered with React 19, TypeScript, and Vite, styled using Tailwind CSS and the "Professional Polish" design theme.

All data points (academic records, CGPA, internships, projects, certifications, Credly URLs) adhere strictly to verified source documents without exaggeration or fabrication.

---

## Features

- **Professional Polish Aesthetic**: Near-black matte canvas (`#0F1012`), subtle geometric border lines (`#2D2F36`), clean typography, uppercase tracking metadata, and subtle cyan/emerald accents.
- **Source-of-Truth Integrity**: Includes an interactive **Content Audit** accessible directly from the navbar and footer.
- **Interactive Project Showcase**:
  - **Weather Web App**: Filterable card, link to live deployment on GitHub Pages, and simulated atmospheric metrics sandbox.
  - **ATM Banking System**: Card and PIN authentication flow with React Hooks state simulation and Java Servlet architecture notes.
  - **Student Database System**: 3NF relational schema explorer and live SQL query selector.
- **Career & Internships Timeline**:
  - Full-Stack Web Development at Prodigy InfoTech (Java Servlets & MySQL)
  - Data Analytics at ApexPlanet Software (8-week program in Python Pandas & Matplotlib)
  - ServiceNow Virtual Internship (SmartBridge / ServiceNow Administration Fundamentals)
  - Cloud Computing Virtual Internship (AICTE / AWS Academy EC2 & Lambda)
- **Verified Certifications**:
  - AWS Academy Graduate – Data Engineering (Credly: z1uPFcA2)
  - AWS Academy Graduate – Cloud Foundations (Credly: 6C3kcqLY)
  - Cisco Networking Basics (Issued Mar 18, 2025)
  - Google Data Analytics Professional Certificate
  - ServiceNow Administration Fundamentals
- **Dedicated Academic Section**:
  - GITAM B.Tech Computer Engineering (8.78 CGPA)
  - Sri Chaitanya Junior College MPC (927 / 1000)
- **Extracurricular & Volunteering**:
  - GStudio Photography Club (GITAM)
  - College Technical Symposium & Homecoming Event Coordination
- **Resume Modal & Print Support**:
  - Dedicated on-screen CV viewer with instant print (`window.print()`) and download bindings.
- **Light & Dark Theme**:
  - Accessible theme toggle with persistent `localStorage` preference.

---

## Tech Stack

- **Framework**: React 19 (Hooks, Functional Components)
- **Language**: TypeScript 5.8
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Build Tool**: Vite 6

---

## Installation & Running Locally

```bash
# 1. Clone repository
git clone https://github.com/ragasai3456-art/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

---

## Environment Variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

| Variable | Description |
| :--- | :--- |
| `VITE_CONTACT_ENDPOINT` | Optional webhook or API endpoint (Formspree, Basin, or custom backend) |
| `VITE_ANALYTICS_ID` | Optional analytics measurement ID |
| `VITE_GITHUB_USERNAME` | GitHub username (`ragasai3456-art`) |

---

## Production Build

```bash
npm run build
npm run preview
```

---

## Deployment Instructions

### Vercel
1. Connect your GitHub repository to [Vercel](https://vercel.com).
2. Framework Preset: **Vite**.
3. Build Command: `npm run build`.
4. Output Directory: `dist`.
5. Deploy.

### Netlify
1. Drag and drop `dist/` or link GitHub repository.
2. Build Command: `npm run build`.
3. Publish directory: `dist`.

---

## How to Update Content

All profile and portfolio data is decoupled into typed configuration files under `src/data/`:

- `src/data/profile.ts`: Contact coordinates, bio, title, resume path.
- `src/data/projects.ts`: Project details, architecture notes, links.
- `src/data/experience.ts`: Roles, durations, responsibilities, and technologies.
- `src/data/education.ts`: Degrees, institutions, CGPA/marks.
- `src/data/certifications.ts`: Badges, providers, Credly verification links.
- `src/data/skills.ts`: Categorized skill items and proficiency levels.
- `src/data/volunteering.ts`: Club roles and event volunteering.
- `src/data/journey.ts`: Visual milestone steps.
