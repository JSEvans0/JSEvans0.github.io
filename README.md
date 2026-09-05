# JSEvans0.github.io

My data analytics portfolio, live at **https://jsevans0.github.io/**.

---

## How to add a new project (the short version)

1. **Copy** `projects/TEMPLATE.html` → `projects/your-project-name.html`
   (lowercase, dashes instead of spaces).
2. **Fill it in.** Everything you need to replace is marked with `>>> like this <<<`.
3. **Register it** by adding one entry to the `PROJECTS` list in `data/projects.js`:

   ```js
   {
     title: "Your Project Name",
     blurb: "One or two sentences for the card.",
     tags: ["Python", "pandas"],
     page: "projects/your-project-name.html",
     repo: "https://github.com/JSEvans0/your-repo",
     demo: "https://optional-live-app-url/",   // delete this line if there isn't one
     result: "The single most interesting number or finding.",
     featured: false,                          // true = show it in Top 3 on the Home page
     year: "2026"
   }
   ```
4. **Commit and push.** GitHub Pages redeploys in a minute or two.

To change the **Top 3**, set `featured: true` on the three projects you want and
`featured: false` on the one they replace. Nothing else needs editing — the Home
page and the Projects page both build their cards from that one list.

To add a **small lab or practice notebook** that doesn't need its own page, add a
line to the `COURSEWORK` list at the bottom of `data/projects.js` instead.

---

## File layout

```
index.html            Home page — intro, Top 3 projects, about, contact
projects.html         All projects + the coursework link list
style.css             All styling for the whole site
script.js             Builds the project cards, runs the mobile menu
data/projects.js      >>> THE FILE YOU EDIT <<< — the project list
projects/
  TEMPLATE.html       Copy this to start a new project page
  *.html              One page per project
assets/               Images, charts, resume PDF
.nojekyll             Tells GitHub Pages to serve these files as-is
```

## Editing tips

- **Colours, fonts, spacing** all live in the `:root` block at the top of
  `style.css`. Change a value there and it updates across every page.
- **Dark mode** is automatic — it follows the visitor's system setting. The dark
  palette is the `@media (prefers-color-scheme: dark)` block right below `:root`.
- **The header and footer** are copied into each page rather than shared, since
  this is a plain static site. If you change a nav link, change it in
  `index.html`, `projects.html`, `projects/TEMPLATE.html`, and each project page.
- **Images** go in `assets/`. Reference them as `assets/name.png` from the root
  pages and `../assets/name.png` from a project page. Always write a real `alt`
  description.

## Previewing changes locally

Double-clicking `index.html` works fine. If you'd rather serve it properly:

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## Private files

`.gitignore` keeps your career-context notes, working resume, and the full-size
original photo out of the repo. **Anything committed here is published** at
jsevans0.github.io and readable by anyone who guesses the filename — so don't add
anything to `assets/` that you wouldn't hand to a stranger.

The site uses `assets/jesse-evans.jpg`, a 640×640 crop of the original (126 KB
instead of 8.2 MB). If you swap the photo, keep it square and around that size.

## Still to do

- [ ] Add a resume PDF to `assets/` and uncomment the button in `index.html`.
- [ ] Decide whether to keep the layoff sentence in the Experience section
      (marked `TODO` in `index.html`).
- [ ] Confirm the Airline Streamlit app still wakes up — it's linked from the
      #1 project.
- [ ] Deploy the Starbucks Streamlit app and add its live link.
