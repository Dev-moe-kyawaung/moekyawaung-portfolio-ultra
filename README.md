# Moekyawaung Portfolio Ultra

Premium, quantum‑themed developer portfolio for **Moe Kyaw Aung**  
Senior Android & Full‑Stack Engineer | Kotlin · Compose · AI/ML · Cybersecurity

Live: [Vercel](https://moekyawaung-portfolio-ultra.vercel.app) · [GitHub Pages](https://Dev-moe-kyawaung.github.io/moekyawaung-portfolio-ultra/)

## Features

- Dark, futuristic aesthetic with particle field + matrix data stream
- Kinetic typography and smooth scroll animations
- Responsive, mobile‑first layout
- Sections:
  - Hero
  - About
  - Expertise (Android, Architecture, Backend, AI/ML, Security, Dev Tools)
  - Selected Projects
  - GitHub & Certifications
  - Contact

## Tech Stack

- React 18
- Vite
- Three.js + @react-three/fiber + @react-three/drei
- Framer Motion
- gh-pages (for GitHub Pages)

## Local Development

```bash
npm install
npm run dev
```

## Deploy

### Vercel

```bash
npm i -g vercel
vercel login
vercel
vercel --prod
```

### GitHub Pages

Ensure `vite.config.js` has the correct `base` path:

```js
base: '/moekyawaung-portfolio-ultra/',
```

Then:

```bash
npm run deploy
```

Enable GitHub Pages in repo Settings → Pages → source: `gh-pages`.

## Customization

- Update project data in `src/ProjectGallery.jsx`
- Edit contact links in `src/App.jsx` → `Contact` component
- Adjust colors in `src/index.css` via CSS variables (`--accent`, `--accent-2`, etc.)

## Author

**Moe Kyaw Aung**  
Senior Android Developer | Full‑Stack Engineer  
GitHub: [@Dev-moe-kyawaung](https://github.com/Dev-moe-kyawaung)

---
