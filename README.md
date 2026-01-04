# Mascotiva Landing Page

Complete Astro landing page for Mascotiva - a veterinary SaaS platform for clinics in Latin America.

## 🚀 Project Structure

```
/
├── public/
│   ├── logos/
│   │   └── README.md (Place logo.svg and logo-white.svg here)
│   ├── images/
│   │   └── README.md (Place mockup images here)
│   ├── favicon.svg
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── Benefits.astro
│   │   ├── BenefitCard.astro
│   │   ├── Button.astro
│   │   ├── Container.astro
│   │   ├── Features.astro
│   │   ├── FeatureCard.astro
│   │   ├── FinalCTA.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── HowItWorks.astro
│   │   ├── Navbar.astro
│   │   ├── SocialProof.astro
│   │   ├── StepCard.astro
│   │   ├── Trust.astro
│   │   └── TrustItem.astro
│   ├── data/
│   │   └── siteConfig.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```

## 🎨 Brand Colors

- Primary: `#0E2A3B`
- Accent: `#1FB6B2`
- Accent Hover: `#159A97`
- Text: `#24323C`
- UI Light: `#E6ECEF`
- UI Muted: `#8A9BA8`

## 📋 Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Add Images

Place the following files in their respective directories:

**Logos** (`public/logos/`):
- `logo.svg` - Main logo for light backgrounds
- `logo-white.svg` - White logo for dark backgrounds

**Images** (`public/images/`):
- `hero-dashboard.png` - Hero section dashboard mockup
- `feature-agenda.png` - Smart calendar feature
- `feature-ficha.png` - Clinical records feature
- `feature-vacunas.png` - Vaccination control feature
- `icon-demo.svg` - Demo step icon
- `icon-config.svg` - Configuration step icon
- `icon-launch.svg` - Launch step icon

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to view the landing page.

## 🏗️ Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## ✨ Features

- ✅ Fully responsive design (mobile-first)
- ✅ TypeScript support
- ✅ Tailwind CSS with custom brand theme
- ✅ SEO optimized with meta tags and Open Graph
- ✅ Accessible (WCAG AA compliant)
- ✅ Performance optimized (lazy loading, preload critical assets)
- ✅ Clean, professional design aesthetic
- ✅ All copy in Spanish (Latin American)
- ✅ Mobile hamburger menu with smooth animations
- ✅ Smooth scroll navigation
- ✅ Image placeholders for missing assets

## 📱 Sections

1. **Navbar** - Sticky navigation with mobile menu
2. **Hero** - Main value proposition with dual CTAs
3. **Social Proof** - Trust badges
4. **Features** - 6-card feature grid
5. **Benefits** - 4-column benefits showcase
6. **How It Works** - 3-step process
7. **Trust** - Security and support highlights
8. **Final CTA** - Conversion-focused call-to-action
9. **Footer** - Multi-column footer with contact info

## 🎯 Next Steps

1. Add actual logo files to `public/logos/`
2. Add mockup images to `public/images/`
3. Update the demo form action (currently placeholder `#demo`)
4. Configure analytics (Google Analytics, etc.)
5. Set up form handling (contact/demo requests)
6. Add additional pages (Términos, Privacidad)
7. Configure domain and deployment

## 📝 Notes

- All components use `.astro` format for optimal performance
- TypeScript is configured with strict mode
- Tailwind CSS is configured with custom spacing, colors, and shadows
- No client-side JavaScript except for mobile menu toggle
- Images use placeholders until actual assets are provided

## 🆘 Support

For questions or issues, contact: hola@mascotiva.cl

---

Built with [Astro](https://astro.build) 🚀
