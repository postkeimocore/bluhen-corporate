# Blühen Corporate Sitemap + Top Wireframe Design

## Purpose

Create a meeting-ready static prototype in `postkeimocore/bluhen-corporate` that explains the proposed corporate-site information architecture and the TOP-page wireframe. It should follow the presentation patterns already used in the AUX USA and PATHOS repositories rather than behave like a final branded website.

The prototype is for strategy alignment and estimation. It must make page hierarchy, existing-URL inheritance, CMS areas, navigation logic, and the TOP-page content order visible enough to discuss in a client meeting.

## Reference implementation pattern

Use the existing projects as interaction/presentation references:

- PATHOS: compact sitemap visualization, grayscale wireframe, browser-frame presentation, page/structure notes.
- AUX USA: meeting-oriented sitemap nodes, clickable sitemap-to-wireframe flow, left-side wireframe navigation, clearer presentation controls.

The Blühen prototype should combine PATHOS's clarity with AUX USA's meeting usability, without copying AUX's visual-design exploration or photography-direction depth.

## Deliverables

### 1. `index.html` — Sitemap

Show the proposed site architecture as a node map with URL slugs, page names, and page-type cues.

Required structure:

- `/` — TOP
- `/work/` — Business / 事業紹介
  - `/work/global-ir/` — Global IR
  - `/work/global-marketing/` — Global Marketing
- `/cases/` — Case Studies / 実績・事例
  - `/cases/{slug}/` — case detail template (CMS)
- `/knowledge/` — Knowledge / 知見
  - `/knowledge/{slug}/` — article detail template (CMS)
- `/about/` — About Blühen
- `/sdgs/` — Sustainability / SDGs
- `/recruit/` — Recruit
- `/news/` — News
  - existing detail URLs are retained where possible; otherwise use 1:1 redirects during migration
- `/contact/` — Contact
- legal/privacy page(s) — preserve existing path where practical

The sitemap must visually distinguish:

- existing URL retained
- new page
- CMS collection/detail
- form/contact
- optional/future expansion

The map must explicitly communicate that Solutions exist within Global IR and Global Marketing in the initial release but are page sections, not separate child URLs at launch. Future standalone Solution pages can be added under each business when search demand or commercial need justifies them.

Include a short role summary below the map explaining:

- Business pages = understand services / commercial evaluation
- Cases = proof of execution
- Knowledge = education / organic discovery / expertise
- About = corporate understanding / trust
- Contact = conversion

Sitemap nodes that correspond to a wireframe view should open `wireframe.html` with the appropriate page parameter. In the initial prototype, TOP is the fully drawn wireframe; business pages may show lightweight structure notes rather than full wires.

### 2. `wireframe.html` — TOP wireframe viewer

Meeting-use viewer modeled on PATHOS/AUX:

- sticky dark toolbar
- link back to sitemap
- toggle for structure/strategy notes
- left navigation for available wireframe views
- centered browser-frame preview
- grayscale / neutral wireframe styling
- clearly labeled as an information-architecture wireframe, not final UI

The TOP wireframe must include these sections in this order:

1. Header / Global navigation
2. FV
3. Business
4. Selected Cases / Proven Experience
5. Why Blühen
6. Knowledge
7. Other Businesses
8. About Blühen
9. News
10. Contact
11. Footer

## Global navigation design

Use a SmartHR-like information-architecture pattern: few top-level labels, dropdowns that expose context, not a copied visual design.

Desktop navigation:

- Business ▼
- Cases
- Knowledge
- About ▼
- News
- JP / EN (only as a structural placeholder)
- Contact CTA

Business dropdown should show:

- Global IR — 「企業価値を、世界へ。」
- Global Marketing — 「商品・サービスを、世界へ。」
- Other Businesses — compact link/summary

About dropdown should show:

- About Blühen
- Sustainability
- Recruit

## TOP wireframe content requirements

### Header / FV

Primary purpose: within the first screen, make it clear that Blühen is a BtoB company supporting Japanese companies' global expansion.

Use the current client-defined message as the working copy rather than inventing a new core brand slogan:

- main: 「日本企業の価値を世界へ届けるため、グローバル展開を支援します。」
- support: `Global IR × Global Marketing`

Include two CTA placeholders:

- 事業を見る
- 相談する

Visual area should be an abstract placeholder indicating typography / motion / information-flow expression. Do not use stock-photo assumptions or require new photography.

### Business

Present two principal business cards with equal corporate status but clear content differences:

- Global IR — 「企業価値を、世界へ。」
- Global Marketing — 「商品・サービスを、世界へ。」

Each card should show representative Solution categories as a compact list, but not link to standalone Solution pages in this prototype.

Global IR examples:

- IR Translation
- English Review & Editing
- Executive Communication
- IR Language Management
- Global IR Communication

Global Marketing examples should follow the latest company material rather than older Agentic Commerce assumptions:

- Market Strategy
- Branding & Localization
- Marketing / Content
- Cross-border EC / sales-base support
- Sales & Distribution

### Selected Cases / Proven Experience

Purpose: prove capability immediately after business explanation.

Show:

- a compact proof strip for publishable experience / industry / engagement scope
- two representative case cards as the default layout: one Global IR and one Global Marketing

Each card should support:

- client/industry descriptor
- challenge
- support scope
- outcome

If names or figures cannot be published, anonymous descriptors are acceptable. Mark the content as pending confirmation where source materials do not confirm web-publication permission.

### Why Blühen

Show the four client-defined capabilities as a combined system, not four unrelated feature cards:

- Global Sense
- Language
- Technology
- Orchestration

Main message:

- 「言葉とテクノロジーで人をつなぎ、事業を動かす。」

The wireframe should visually imply combination/connection among the four capabilities.

### Knowledge

Purpose: future organic discovery, education, and proof of expertise.

Show category split:

- Global IR
- Global Marketing

Show three article cards maximum on TOP.

The page should be treated as conditional in navigation if launch content is insufficient. CMS architecture remains planned even if the nav item is hidden at launch.

### Other Businesses

Keep compact and subordinate to the two main businesses.

Show categories such as:

- 人材・採用
- PATHOS (external service site)
- AI・業務
- 地域

The wireframe must visually communicate “also operates” rather than equal status with the principal businesses.

### About Blühen

Use the existing mission as an entry point:

- 「可能性を、活躍へ。」

Summarize that this area leads to mission, vision, story, organization, CEO message, history, and company profile, all within one `/about/` page rather than splitting About and Company.

### News

Compact three-row news list only.

### Contact

Provide conversion choices:

- Global IRについて相談する
- 海外展開について相談する
- その他のお問い合わせ

## Business-page structure notes

The viewer should expose lightweight structure notes for the two key business pages so the meeting can validate estimation scope without drawing full lower-page wires.

### Global IR suggested section order

- FV
- target challenges
- Solutions
- IR quality design / workflow
- process
- experience / proof
- related Cases
- FAQ
- CTA

### Global Marketing suggested section order

- FV
- target challenges
- overseas-expansion process
- Solutions
- support system / strengths
- related Cases
- FAQ
- CTA

## URL migration principle

Preserve existing slugs wherever the new content can reasonably inherit the current page role. In particular, keep `/work/`, `/about/`, `/news/`, `/sdgs/`, and `/contact/` rather than renaming them for cosmetic consistency.

For any unavoidable URL change:

- maintain a source-to-destination migration map
- use 1:1 permanent redirects
- do not redirect unrelated legacy pages wholesale to TOP
- preserve existing individual news URLs where practical; otherwise map them individually
- final production migration must also include canonical URLs, XML sitemap refresh, and Search Console submission

The prototype only visualizes the principle; it does not implement production redirects.

## CMS assumptions

Production CMS is microCMS.

Planned CMS models:

- `cases`
- `knowledge`
- `news`

The wireframe should mark these areas as CMS-managed.

English version, if included in production, is implementation-only on our side: the client supplies English copy. The prototype does not need a fully translated EN site.

## Visual / interaction style

This is an explanatory artifact, not final creative direction.

Use:

- grayscale / neutral palette
- high-contrast structure
- Japanese system fonts
- restrained spacing system
- browser-window frame
- small annotations for strategic intent
- responsive behavior sufficient for desktop meeting use and basic mobile viewing

Do not spend scope on:

- production-brand motion
- photography generation
- final corporate color tuning
- final copywriting beyond working-copy placement
- lower-page visual design

## Repository/file structure

Create a lightweight static site:

- `index.html` — sitemap
- `wireframe.html` — wireframe shell/viewer
- `wireframe.css` — shared wireframe styling
- `wireframe-data.js` — page/section content and structural notes
- `wireframe-app.js` — viewer/navigation/render logic
- `.nojekyll` — GitHub Pages compatibility
- `.github/workflows/pages.yml` — deploy static repository to GitHub Pages

No framework or build step is required.

## Acceptance criteria

The deliverable is complete when:

1. `index.html` clearly explains the proposed site hierarchy, URL retention policy, CMS pages, and future Solution expansion.
2. Clicking TOP from the sitemap opens the TOP wireframe.
3. `wireframe.html` renders the full TOP structure in the agreed section order.
4. The global navigation and dropdown structure are visible in the wireframe.
5. Strategic notes can be shown/hidden.
6. Global IR and Global Marketing page structures can be reviewed from the viewer even if only as section-outline views.
7. The prototype works as static files with no build system.
8. A GitHub Pages deployment workflow is included and targets the repository's default branch output.
9. No source-derived claim is shown as a confirmed public fact when publication permission or exact metric is not established; such items are labeled as confirmation-required working content.
