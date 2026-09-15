# Blühen Corporate Wireframe Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a static, meeting-ready sitemap and TOP-page wireframe for the Blühen corporate-site renewal, publishable through GitHub Pages.

**Architecture:** Use a no-build static site modeled on the existing PATHOS/AUX meeting artifacts. `index.html` renders the sitemap; `wireframe.html` loads data from `wireframe-data.js` and renders selectable wireframe views with `wireframe-app.js`; `wireframe.css` contains the shared grayscale presentation system. A small Node validation script checks required routes, sections, and Pages configuration.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, Node.js validation script, GitHub Pages Actions.

**Spec:** `docs/superpowers/specs/2026-09-15-bluhen-corporate-wireframe-design.md`

## Global Constraints

- Static files only; no framework or build step.
- Main artifact is an explanatory information-architecture wireframe, not final UI design.
- Keep existing URL slugs `/work/`, `/about/`, `/news/`, `/sdgs/`, `/contact/` wherever practical.
- Initial Solutions remain sections within Global IR / Global Marketing pages, not standalone URLs.
- microCMS models planned: `cases`, `knowledge`, `news`.
- English version is structural only; client supplies translations if production EN is commissioned.
- Do not present unconfirmed client names, public metrics, or publication permissions as facts.
- Use working copy from the latest client materials for core corporate/business messages.

---

### Task 1: Add validation harness

**Files:**
- Create: `tests/validate.mjs`

**Interfaces:**
- Consumes: future static files in repository root.
- Produces: command `node tests/validate.mjs` that exits non-zero when required structure is missing.

- [ ] **Step 1: Write the failing validation script**

The script must assert that `index.html`, `wireframe.html`, `wireframe.css`, `wireframe-data.js`, `wireframe-app.js`, `.nojekyll`, and `.github/workflows/pages.yml` exist. It must also assert required sitemap routes and required TOP section labels are present.

- [ ] **Step 2: Run it to verify RED**

Run: `node tests/validate.mjs`
Expected: FAIL because production files do not yet exist.

### Task 2: Build sitemap artifact

**Files:**
- Create: `index.html`

**Interfaces:**
- Produces: clickable sitemap with links into `wireframe.html?page=...`.

- [ ] **Step 1: Implement the sitemap**

Include nodes for TOP, Business, Global IR, Global Marketing, Cases + CMS detail, Knowledge + CMS detail, About, SDGs, Recruit, News + CMS detail, Contact, and Legal/Privacy. Distinguish retained URL, new page, CMS, form, and future expansion. Include note that Solution detail pages are future expansion while Solutions launch as sections within each business page.

- [ ] **Step 2: Run validation**

Run: `node tests/validate.mjs`
Expected: still FAIL because wireframe files are not yet present, but sitemap route assertions pass.

### Task 3: Build wireframe viewer and TOP wireframe

**Files:**
- Create: `wireframe.html`
- Create: `wireframe.css`
- Create: `wireframe-data.js`
- Create: `wireframe-app.js`

**Interfaces:**
- `window.BLUHEN_WIREFRAME.pages`: object keyed by `top`, `global-ir`, `global-marketing`.
- `wireframe-app.js` reads the page query parameter and renders the corresponding page into `#browser`.

- [ ] **Step 1: Implement wireframe shell**

Add toolbar, sitemap link, strategy-note toggle, sidebar page selector, browser frame, and script/style references.

- [ ] **Step 2: Implement wireframe data**

TOP section order must be Header/FV, Business, Selected Cases / Proven Experience, Why Blühen, Knowledge, Other Businesses, About Blühen, News, Contact, Footer. Include Global IR and Global Marketing outline views for estimation discussion.

- [ ] **Step 3: Implement renderer and interactions**

Render page navigation, browser URL, global nav with Business/About dropdown panels, section modules, and structure notes. Support `?page=top`, `?page=global-ir`, `?page=global-marketing`.

- [ ] **Step 4: Implement responsive grayscale styling**

Match PATHOS/AUX meeting artifacts: dark sticky toolbar, neutral browser frame, grayscale content modules, readable desktop layout, basic mobile fallback.

- [ ] **Step 5: Run validation**

Run: `node tests/validate.mjs`
Expected: FAIL only on Pages deployment files if not yet created.

### Task 4: Add GitHub Pages configuration

**Files:**
- Create: `.nojekyll`
- Create: `.github/workflows/pages.yml`

**Interfaces:**
- GitHub Actions workflow deploys repository root as a Pages artifact on pushes to `main` and manual dispatch.

- [ ] **Step 1: Add `.nojekyll`**

Create an empty file so Pages serves files directly.

- [ ] **Step 2: Add Pages workflow**

Use `actions/configure-pages`, `actions/upload-pages-artifact`, and `actions/deploy-pages`, with Pages permissions and `main` push trigger.

- [ ] **Step 3: Run validation**

Run: `node tests/validate.mjs`
Expected: PASS.

### Task 5: Final verification

**Files:**
- Verify all created files.

- [ ] **Step 1: Syntax-check JavaScript**

Run: `node --check wireframe-data.js && node --check wireframe-app.js && node --check tests/validate.mjs`
Expected: PASS with no output.

- [ ] **Step 2: Run full validation**

Run: `node tests/validate.mjs`
Expected: `All Blühen wireframe validation checks passed.`

- [ ] **Step 3: Inspect repository content from GitHub**

Confirm all expected files are present on `build/meeting-wireframe` and the sitemap/wireframe files contain the agreed content and no unconfirmed metrics presented as facts.

- [ ] **Step 4: Move verified implementation to `main`**

After verification, update `main` to the verified branch commit so the user only needs to enable/confirm GitHub Pages in repository settings if required.
