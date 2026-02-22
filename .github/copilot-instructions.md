# Copilot Instructions for MarveeyLabs

## Project Overview

**MarveeyLabs** (branded as MGL Tech Hub) is a personal brand and services website for Marveey Goodlife — a web developer, graphic designer, and tech educator. The site showcases offered services and enables client outreach and course/training registration.

## Repository Structure

```
MarveeyLabs/
├── index.html            # Homepage (hero, services overview, testimonials, FAQ)
├── script.js             # Navigation toggle (mobile hamburger menu)
├── style.css             # Primary stylesheet (colors, layout, responsive design)
├── README.md             # Project notes and phased development plan
├── favicon_io/           # Favicon assets (ico, png, webmanifest)
├── Assets/logo/          # Logo image files (.bmp)
├── Css/
│   ├── all.min.css       # Bundled Font Awesome CSS (do NOT edit)
│   └── form.css          # Styles specific to the registration/contact form
├── Js/
│   └── form.js           # Client-side form validation logic
├── pages/
│   ├── about.html        # About page (brand story, mission)
│   ├── services.html     # Services detail page
│   ├── courses.html      # Training/courses page
│   └── contact.html      # Contact form + WhatsApp button
├── images/               # Content images (hero, profile photos)
└── fonts/                # Custom font files (Lato, Montserrat — .ttf)
```

## Tech Stack

- **HTML5** — All page structure; uses semantic tags (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<address>`)
- **CSS3** — Vanilla CSS; uses Flexbox and Grid for layout, custom properties, media queries for responsiveness
- **JavaScript (ES6+, strict mode)** — Vanilla JS, no frameworks or build tools
- **Font Awesome 5** — Icons loaded via CDN and also from `Css/all.min.css` as fallback
- **Google Fonts** — Roboto, Open Sans (via `<link>` in HTML heads)

There is **no build system, no package manager, no test runner, and no CI/CD pipeline** in this repository.

## Design System

- **Primary color:** Deep navy blue `#0B0146`
- **Accent color:** Bright red `#EB2C39`
- **Fonts:** Lato (Light, Regular), Montserrat (Bold, ExtraBold), Roboto, Open Sans
- **Button classes:** `.btn` (primary CTA), `.secondaryBtn` (secondary action)
- **Section wrapper class:** `.section-container`
- **Card class:** `.serviceCard`
- Navigation uses `.nav-center`, `.nav-header`, `.nav-toggle`, `.links`, `.show-links`, `.social-icons`

## Navigation Pattern

Every HTML page shares the same `<header>` and `<footer>` structure. Navigation links use absolute paths (`/index.html`, `/pages/about.html`, etc.). When adding a new page under `pages/`, replicate the nav/footer block from an existing page (e.g. `about.html`).

The mobile nav toggle is handled in `script.js` — it adds/removes the class `show-links` on the `.links` `<ul>`. **Every page that uses a nav toggle must include `<script src="/script.js"></script>`** (or the correct relative path) before `</html>`.

## Form Validation Pattern

`Js/form.js` handles form submission for the registration/contact form. The pattern is:

1. Attach a `submit` event listener to `#myform`, call `e.preventDefault()`.
2. Get each input value with `.trim()`, and get the corresponding error element (`#<field>Error`).
3. Clear all error messages at the top of validation.
4. Validate each required field; if invalid, set `errorElement.textContent` and `return`.
5. On success, display a green success message in `#error-message`.

When adding new form fields, follow this same pattern: create a matching `<span id="<field>Error">` in the HTML, and add a validation block in `form.js`.

## How to Run / Preview Locally

This is a **static website** — open `index.html` directly in a browser, or use a simple local server:

```bash
# Option 1: Python (no install needed on most systems)
python3 -m http.server 8080
# Then open http://localhost:8080

# Option 2: Node.js (if installed)
npx serve .
# Then open the URL shown in the terminal
```

There is no build step, compilation, or dependency installation required.

## No Automated Tests or Linting

There are **no test files, no linters, and no CI workflows** in this repository. All validation is manual:

- Preview pages in a browser to verify layout and responsiveness.
- Check the browser console for JavaScript errors.
- Resize the window or use DevTools device emulation to verify mobile responsiveness.
- Submit the form with and without required fields to verify validation messages appear correctly.

## Common Tasks & Guidelines

### Adding a New Page
1. Copy the structure of an existing page (`pages/about.html` is the simplest template).
2. Update the `<title>` tag and page-specific content.
3. Ensure the nav links are consistent (all use absolute paths like `/pages/newpage.html`).
4. Link the appropriate stylesheets (`style.css`, and `Css/form.css` if the page has a form).
5. Add a `<script src="/script.js"></script>` tag before `</html>`.

### Editing Styles
- Global styles live in `style.css`.
- Form-specific styles live in `Css/form.css`.
- Do **not** edit `Css/all.min.css` — it is a third-party Font Awesome bundle.
- Maintain the existing color scheme (`#0B0146` navy, `#EB2C39` red) and font choices for brand consistency.

### Editing JavaScript
- `script.js` — only handles the nav toggle; keep it minimal.
- `Js/form.js` — handles form validation; follow the existing pattern (see above).
- Both files use `"use strict"` at the top — maintain this.

### Adding Images
- Place new images in the `images/` directory.
- Always include a descriptive `alt` attribute on `<img>` tags for accessibility and SEO.

## Known Issues / Errors Encountered

- **`courses.html` is missing** — The nav links to `/pages/courses.html`, but the file does not yet exist. When creating it, follow the same structure as the other pages under `pages/`.
- **Font Awesome loaded twice** — `index.html` loads Font Awesome from both the CDN and `Css/all.min.css`. This is intentional as a local fallback for offline use; do not remove either link.
- **`valid` variable in `form.js` is declared outside the event listener** — Setting `valid = false` does not persist correctly across submissions because it is never reset to `true` at the start of each submission. When modifying the form validator, reset `valid = true` at the top of the submit handler, or use a local variable instead.
- **No `<body>` tag in `index.html`** — The `<header>` element appears directly after `<head>` without a wrapping `<body>` tag. Browsers handle this gracefully via implicit body insertion, but it is non-standard HTML5. Future updates should add an explicit `<body>` tag for standards compliance; new pages being created should include one.
- **Absolute paths for nav links** — Links like `/index.html` work when served from the root of a web server but may break if the files are opened directly from the file system (file:// protocol). Use a local server (see above) when testing navigation.
