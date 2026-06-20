# Soma Bhakta — Portfolio (React)

A fast, accessible portfolio built with **React + Vite** and **React Router**, styled with a clean editorial design system. It deploys to **GitHub Pages automatically** via GitHub Actions.

## Tech

- React 18 + Vite 5
- React Router (HashRouter — deep links & refreshes work on GitHub Pages with no 404 hacks)
- One CSS design system (`src/index.css`), no UI framework
- Content lives in `src/data/cases.js`, so adding a case study is just data

## Project structure

```
.
├── index.html                 # Vite entry
├── vite.config.js             # base: "./" so it works at any Pages path
├── .github/workflows/deploy.yml
├── public/.nojekyll
└── src/
    ├── main.jsx               # mounts <HashRouter>
    ├── App.jsx                # routes + scroll-to-top
    ├── index.css              # design tokens + components
    ├── components/            # Header, Footer, Layout, Stats
    ├── data/                  # site.js (nav/contact), cases.js (case content)
    └── pages/                 # Home, Leadership, CaseStudies, CaseStudy, Contact
```

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the built site
```

## Deploy to GitHub Pages (automated)

This repo ships a GitHub Actions workflow that builds and deploys on every push to `main`.

1. **Create a repo and push:**

   ```bash
   cd "path/to/this/folder"
   git init
   git add .
   git commit -m "React portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```

2. **Turn on Pages:** in the repo, go to **Settings → Pages → Build and deployment**, and set **Source** to **GitHub Actions**.

3. Done. Every push to `main` rebuilds and republishes. The live URL appears in **Settings → Pages** and in the Actions run summary — typically:
   - User/org site (`<username>.github.io` repo): `https://<username>.github.io/`
   - Project site (any other repo name): `https://<username>.github.io/<repo>/`

> Because routing uses `HashRouter` and Vite `base` is `"./"`, the site works at either URL with no extra config.

### Custom domain (optional)

**Settings → Pages → Custom domain** → enter your domain, then add a DNS `CNAME` record pointing to `<your-username>.github.io`.

## Editing content

- **Case studies:** edit `src/data/cases.js` — each entry renders its own page at `/#/case-studies/<slug>` and appears on the home and case-studies lists automatically.
- **Nav, résumé link, contact details:** `src/data/site.js`.
- **Colors / type / spacing:** the `:root` tokens at the top of `src/index.css`.

## Accessibility

Built toward WCAG 2.1 AA: skip link, semantic landmarks, visible focus states, AA color contrast, descriptive link labels, reduced-motion support, and a keyboard-operable mobile menu.
