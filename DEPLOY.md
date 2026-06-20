# Deploy this site to GitHub Pages

The project is already a git repo with one commit on `main`. You just need to push it
to your GitHub account and turn on Pages. Pick **one** of the two paths below.

---

## Path A — GitHub CLI (fastest, one command to create + push)

Requires the GitHub CLI. If you don't have it:

```bash
brew install gh
gh auth login          # choose GitHub.com → HTTPS → log in via browser
```

Then, from this folder:

```bash
cd "Soma's Portfolio"
gh repo create portfolio --public --source=. --push
```

That creates the repo, adds the remote, and pushes `main` in one step.
(Use any name you like instead of `portfolio`.)

---

## Path B — Plain git (create the repo on github.com first)

1. Go to https://github.com/new and create an **empty** repo
   (do NOT add a README, .gitignore, or license — keep it empty).

2. From this folder, connect it and push:

   ```bash
   cd "Soma's Portfolio"
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```

---

## Turn on Pages (both paths)

1. In the repo on github.com: **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.

That's it. The included workflow (`.github/workflows/deploy.yml`) builds and publishes
on every push to `main`. Your live URL shows up in **Settings → Pages** and in the
**Actions** run summary — usually:

- Project repo: `https://<your-username>.github.io/<repo>/`
- User/org repo named `<your-username>.github.io`: `https://<your-username>.github.io/`

The site uses `HashRouter` + relative asset paths, so it works at either URL with no
extra configuration.

---

## Everyday updates

```bash
# edit files, then:
git add -A
git commit -m "Update content"
git push
```

Each push to `main` automatically rebuilds and redeploys.

## Run locally first (optional)

```bash
npm install      # installs macOS binaries (do this on your own machine)
npm run dev      # http://localhost:5173
```
