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
  '.github/workflows/pages.yml',
];

const requiredRoutes = [
  '/', '/work/', '/work/global-ir/', '/work/global-marketing/',
  '/cases/', '/knowledge/', '/about/', '/sdgs/', '/recruit/',
  '/news/', '/contact/'
];

const requiredTopLabels = [
  'Global IR × Global Marketing',
  'BUSINESS',
  'SELECTED CASES',
  'WHAT POWERS BLÜHEN',
  'KNOWLEDGE',
  'OTHER BUSINESSES',
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
  if (!html.includes('Solutions')) failures.push('sitemap missing Solutions future-expansion note');
  if (!html.includes('既存URL維持')) failures.push('sitemap missing retained URL legend/label');
}

if (fs.existsSync(path.join(root, 'wireframe-data.js'))) {
  const data = fs.readFileSync(path.join(root, 'wireframe-data.js'), 'utf8');
  for (const label of requiredTopLabels) {
    if (!data.includes(label)) failures.push(`wireframe missing TOP label: ${label}`);
  }
  if (!data.includes('Global IRについて相談する')) failures.push('wireframe missing IR contact CTA');
  if (!data.includes('海外展開について相談する')) failures.push('wireframe missing marketing contact CTA');
  if (!data.includes('確認要')) failures.push('wireframe missing confirmation-required markers');
}

if (fs.existsSync(path.join(root, '.github/workflows/pages.yml'))) {
  const yml = fs.readFileSync(path.join(root, '.github/workflows/pages.yml'), 'utf8');
  for (const action of ['actions/configure-pages', 'actions/upload-pages-artifact', 'actions/deploy-pages']) {
    if (!yml.includes(action)) failures.push(`pages workflow missing ${action}`);
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log('All Blühen wireframe validation checks passed.');
