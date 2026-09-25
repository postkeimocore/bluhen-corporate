import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const requiredFiles = [
  'index.html',
  'wireframe.html',
  'wireframe.css',
  'wireframe-data.js',
  'wireframe-app.js',
  '.nojekyll',
];

const requiredRoutes = [
  '/', '/work/', '/work/global-ir/', '/work/global-marketing/',
  '/cases/', '/knowledge/', '/about/', '/sdgs/', '/recruit/',
  '/news/', '/contact/'
];

const requiredTopLabels = [
  'Communication Design Company',
  'GLOBAL COMMUNICATION',
  'Global Branding & Marketing',
  'SELECTED CASES',
  'WHY BLÜHEN',
  'KNOWLEDGE',
  'SPECIALIZED BUSINESSES',
  'ABOUT BLÜHEN',
  'NEWS',
  'CONTACT'
];

const failures = [];
for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(root, file))) failures.push(`missing file: ${file}`);
}

if (fs.existsSync(path.join(root, 'index.html'))) {
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  for (const route of requiredRoutes) {
    if (!html.includes(route)) failures.push(`sitemap missing route: ${route}`);
  }
  if (!html.includes('Solutions')) failures.push('sitemap missing Solutions note');
  if (!html.includes('既存URL維持')) failures.push('sitemap missing retained URL labels');
  if (!html.includes('sitemap-grid')) failures.push('sitemap should use grouped grid layout');
}

if (fs.existsSync(path.join(root, 'wireframe-data.js'))) {
  const data = fs.readFileSync(path.join(root, 'wireframe-data.js'), 'utf8');
  for (const label of requiredTopLabels) {
    if (!data.includes(label)) failures.push(`wireframe missing TOP label: ${label}`);
  }
  if (!data.includes("mode:'service'")) failures.push('service pages must render as full wireframes');
  if (!data.includes("type:'solutions'")) failures.push('service pages missing Solutions section');
  if (!data.includes("type:'faq'")) failures.push('service pages missing FAQ section');
  if (!data.includes('英文IRについて相談する')) failures.push('wireframe missing IR contact CTA');
  if (!data.includes('海外展開について相談する')) failures.push('wireframe missing marketing contact CTA');
  if (!data.includes('グローバル展開のナレッジ')) failures.push('wireframe missing Knowledge section title');
  if (!data.includes('IR Strategy & Narrative')) failures.push('wireframe missing latest IR solution structure');
  if (!data.includes('Communication & Experience')) failures.push('wireframe missing latest branding solution structure');
  if (!data.includes('講演・登壇・セミナー')) failures.push('wireframe missing speaking section/contact option');
}

if (fs.existsSync(path.join(root, 'wireframe-app.js'))) {
  const app = fs.readFileSync(path.join(root, 'wireframe-app.js'), 'utf8');
  if (app.includes('nav-preview')) failures.push('dropdown previews must not be permanently visible');
  if (!app.includes('nav-dropdown')) failures.push('interactive dropdown markup missing');
  if (!app.includes('renderService')) failures.push('full service-page renderer missing');
}

if (fs.existsSync(path.join(root, 'wireframe.css'))) {
  const css = fs.readFileSync(path.join(root, 'wireframe.css'), 'utf8');
  if (!css.includes('.site-nav{margin-left:auto')) failures.push('site nav should be right-aligned next to language switcher');
  if (!css.includes('.nav-dropdown')) failures.push('dropdown styles missing');
  if (!css.includes('.solution-list')) failures.push('Business solutions need legible list styling');
  if (!css.includes('.about-structure')) failures.push('About structure needs explicit grouped styling');
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log('All Blühen wireframe validation checks passed.');
