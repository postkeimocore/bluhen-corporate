(() => {
  const model = window.BLUHEN_WIREFRAME;
  const browser = document.getElementById('browser');
  const pageNav = document.getElementById('pageNav');
  const layout = document.getElementById('layout');
  const metaToggle = document.getElementById('metaToggle');
  const sideToggle = document.getElementById('sideToggle');

  const escapeHtml = (value = '') => String(value).replace(/[&<>]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[char]));
  const withBreaks = (value = '') => escapeHtml(value).replace(/\n/g, '<br>');
  const hrefFor = (key) => `wireframe.html?page=${encodeURIComponent(key)}`;

  function activeKey() {
    const key = new URLSearchParams(location.search).get('page') || 'top';
    return model.pages[key] ? key : 'top';
  }

  function renderSidebar(active) {
    pageNav.innerHTML = Object.entries(model.pages).map(([key, page]) => `
      <a class="page-link ${key === active ? 'active' : ''}" href="${hrefFor(key)}">
        ${escapeHtml(page.nav)}<small>${escapeHtml(page.route)}</small>
      </a>`).join('');
  }

  function chrome(route) {
    return `<div class="browser-chrome"><span class="dot"></span><span class="dot"></span><span class="dot"></span><div class="address">https://bluhen.example${escapeHtml(route)}</div></div>`;
  }

  function header() {
    return `<header class="site-header">
      <div class="logo">BLÜHEN</div>
      <nav class="site-nav" aria-label="Main navigation">
        <div class="nav-item has-drop">
          <button class="nav-trigger" type="button">Business <span class="dropmark">▼</span></button>
          <div class="nav-dropdown business-dropdown">
            <div class="dropdown-label">BUSINESS</div>
            <div class="drop-grid">
              <a class="drop-link" href="${hrefFor('global-ir')}"><b>Global IR</b><span>企業価値を、世界へ。</span></a>
              <a class="drop-link" href="${hrefFor('global-marketing')}"><b>Global Marketing</b><span>商品・サービスを、世界へ。</span></a>
              <div class="drop-link wide"><b>Other Businesses</b><span>人材・採用 / PATHOS / AI・業務 / 地域</span></div>
            </div>
          </div>
        </div>
        <span class="nav-item">Cases</span>
        <span class="nav-item">Knowledge</span>
        <div class="nav-item has-drop">
          <button class="nav-trigger" type="button">About <span class="dropmark">▼</span></button>
          <div class="nav-dropdown about-dropdown">
            <div class="dropdown-label">ABOUT</div>
            <div class="drop-grid single">
              <div class="drop-link wide"><b>About Blühen</b><span>Mission / Vision / Story / Organization / Company</span></div>
              <div class="drop-link"><b>Sustainability</b></div>
              <div class="drop-link"><b>Recruit</b></div>
            </div>
          </div>
        </div>
        <span class="nav-item">News</span>
      </nav>
      <div class="site-actions"><span class="lang">JP / EN</span><a class="contact-btn" href="#">Contact</a></div>
    </header>`;
  }

  function note(text) {
    return text ? `<div class="wire-meta"><b>構成意図</b>${escapeHtml(text)}</div>` : '';
  }

  function eyebrow(value) {
    return value ? `<div class="eyebrow">${escapeHtml(value)}</div>` : '';
  }

  function paragraph(className, value) {
    return value ? `<p class="${className}">${escapeHtml(value)}</p>` : '';
  }

  function renderHero(section) {
    return `<section class="section hero"><div class="hero-grid"><div>${eyebrow(section.eyebrow)}<h1>${withBreaks(section.title)}</h1>${paragraph('lead', section.lead)}${paragraph('subcopy', section.body)}<div class="cta-row">${section.ctas.map((label, index) => `<a class="btn ${index === 0 ? 'primary' : ''}" href="#">${escapeHtml(label)}</a>`).join('')}</div>${note(section.note)}</div>${section.visual ? `<div class="visual">${withBreaks(section.visual)}</div>` : ''}</div></section>`;
  }

  function renderBusiness(section) {
    return `<section class="section">${eyebrow(section.eyebrow)}<h2>${withBreaks(section.title)}</h2><div class="grid-2 module">${section.cards.map((card) => `<a class="card business-card" href="${card.href}" style="text-decoration:none"><div class="business-head"><strong>${escapeHtml(card.title)}</strong><span>${escapeHtml(card.copy)}</span></div><div class="solution-label">主なSolutions</div><ul class="solution-list">${card.solutions.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul><p class="card-link">詳しく見る →</p></a>`).join('')}</div>${note(section.note)}</section>`;
  }

  function renderCases(section) {
    return `<section class="section">${eyebrow(section.eyebrow)}<h2>${withBreaks(section.title)}</h2><div class="proof-strip">${section.proofs.map((proof) => `<div class="proof"><b>${escapeHtml(proof[0])}</b><span>${escapeHtml(proof[1])}</span></div>`).join('')}</div>${section.pending ? `<div class="pending">${escapeHtml(section.pending)}</div>` : ''}<div class="grid-2 module">${section.cases.map((item) => `<div class="case-card"><div class="case-cat">${escapeHtml(item.cat)}</div><h3>${escapeHtml(item.title)}</h3><div class="case-kv"><b>課題</b><span>${escapeHtml(item.challenge)}</span><b>支援</b><span>${escapeHtml(item.scope)}</span><b>成果</b><span>${escapeHtml(item.result)}</span></div></div>`).join('')}</div><div class="cta-row module"><a class="btn" href="#">すべての実績を見る →</a></div>${note(section.note)}</section>`;
  }

  function renderCapabilities(section) {
    const [a, b, c, d] = section.items;
    return `<section class="section">${eyebrow(section.eyebrow)}<h2>${withBreaks(section.title)}</h2><div class="capability-system module"><span class="connect-line v top"></span><span class="connect-line v bottom"></span><span class="connect-line h left"></span><span class="connect-line h right"></span><div class="cap a"><b>${escapeHtml(a[0])}</b><span>${escapeHtml(a[1])}</span></div><div class="cap b"><b>${escapeHtml(b[0])}</b><span>${escapeHtml(b[1])}</span></div><div class="cap c"><b>${escapeHtml(c[0])}</b><span>${escapeHtml(c[1])}</span></div><div class="cap d"><b>${escapeHtml(d[0])}</b><span>${escapeHtml(d[1])}</span></div><div class="capability-center">BLÜHEN<br>CAPABILITIES</div></div>${note(section.note)}</section>`;
  }

  function renderKnowledge(section) {
    return `<section class="section">${eyebrow(section.eyebrow)}<h2>${escapeHtml(section.title)}</h2><div class="grid-3 module">${section.cards.map((card) => `<div class="card"><span class="tag">${escapeHtml(card[0])}</span><strong>${escapeHtml(card[1])}</strong><p>${escapeHtml(card[2])}</p></div>`).join('')}</div><div class="cta-row module"><a class="btn" href="#">ナレッジをすべて見る →</a></div>${note(section.note)}</section>`;
  }

  function renderOther(section) {
    return `<section class="section">${eyebrow(section.eyebrow)}<h2>${escapeHtml(section.title)}</h2><div class="other-row module">${section.items.map((item) => `<div class="other-chip">${escapeHtml(item)}</div>`).join('')}</div>${note(section.note)}</section>`;
  }

  function renderAbout(section) {
    return `<section class="section">${eyebrow(section.eyebrow)}<h2>${escapeHtml(section.title)}</h2>${paragraph('lead', section.lead)}<div class="about-structure module">${section.groups.map((group) => `<div class="about-group"><span>${escapeHtml(group[0])}</span><strong>${escapeHtml(group[1])}</strong></div>`).join('')}</div><div class="cta-row module"><a class="btn" href="#">Blühenについて →</a></div>${note(section.note)}</section>`;
  }

  function renderNews(section) {
    return `<section class="section">${eyebrow(section.eyebrow)}<h2>${escapeHtml(section.title)}</h2><div class="news-list module">${section.rows.map((row) => `<div class="news-row"><span>${escapeHtml(row[0])}</span><span>${escapeHtml(row[1])}</span><span>${escapeHtml(row[2])}</span></div>`).join('')}</div>${note(section.note)}</section>`;
  }

  function renderContact(section) {
    return `<section class="section">${eyebrow(section.eyebrow)}<h2>${withBreaks(section.title)}</h2><div class="contact-grid module">${section.cards.map((card) => `<div class="contact-card"><strong>${escapeHtml(card[0])}</strong><p>${escapeHtml(card[1])}</p><a class="btn primary" href="#">相談する →</a></div>`).join('')}</div>${note(section.note)}</section>`;
  }

  function renderServiceHero(section) {
    return `<section class="section hero service-hero"><div class="hero-grid"><div>${eyebrow(section.eyebrow)}<h1>${withBreaks(section.title)}</h1>${paragraph('lead', section.lead)}${paragraph('subcopy', section.body)}<div class="cta-row">${section.ctas.map((label, index) => `<a class="btn ${index === 0 ? 'primary' : ''}" href="#">${escapeHtml(label)}</a>`).join('')}</div>${note(section.note)}</div>${section.visual ? `<div class="visual service-visual">${withBreaks(section.visual)}</div>` : ''}</div></section>`;
  }

  function renderPain(section) {
    return `<section class="section">${eyebrow(section.eyebrow)}<h2>${escapeHtml(section.title)}</h2><div class="grid-3 module">${section.cards.map((card, index) => `<div class="card pain-card"><span class="step-no">0${index + 1}</span><strong>${escapeHtml(card[0])}</strong><p>${escapeHtml(card[1])}</p></div>`).join('')}</div>${note(section.note)}</section>`;
  }

  function renderSolutions(section) {
    return `<section class="section solutions-section">${eyebrow(section.eyebrow)}<h2>${escapeHtml(section.title)}</h2>${paragraph('lead', section.intro)}<div class="solution-cards module">${section.cards.map((card, index) => `<div class="solution-card"><span class="solution-no">${String(index + 1).padStart(2,'0')}</span><div><strong>${escapeHtml(card[0])}</strong><p>${escapeHtml(card[1])}</p><span class="future-link">将来、必要に応じて個別ページ化 →</span></div></div>`).join('')}</div>${note(section.note)}</section>`;
  }

  function renderProcess(section) {
    return `<section class="section">${eyebrow(section.eyebrow)}<h2>${escapeHtml(section.title)}</h2><div class="process-flow module">${section.steps.map((step) => `<div class="process-step"><span>${escapeHtml(step[0])}</span><strong>${escapeHtml(step[1])}</strong><p>${escapeHtml(step[2])}</p></div>`).join('')}</div>${section.pending ? `<div class="pending module">${escapeHtml(section.pending)}</div>` : ''}${note(section.note)}</section>`;
  }

  function renderProof(section) {
    return `<section class="section">${eyebrow(section.eyebrow)}<h2>${escapeHtml(section.title)}</h2><div class="proof-strip">${section.proofs.map((proof) => `<div class="proof"><b>${escapeHtml(proof[0])}</b><span>${escapeHtml(proof[1])}</span></div>`).join('')}</div>${section.pending ? `<div class="pending">${escapeHtml(section.pending)}</div>` : ''}${note(section.note)}</section>`;
  }

  function renderServiceCase(section) {
    return `<section class="section">${eyebrow(section.eyebrow)}<h2>${escapeHtml(section.title)}</h2><div class="featured-case module"><div><span class="case-cat">${escapeHtml(section.cat)}</span><h3>${escapeHtml(section.caseTitle)}</h3></div><div class="case-kv large"><b>課題</b><span>${escapeHtml(section.challenge)}</span><b>支援</b><span>${escapeHtml(section.scope)}</span><b>成果</b><span>${escapeHtml(section.result)}</span></div><a class="btn" href="#">事例詳細を見る →</a></div>${note(section.note)}</section>`;
  }

  function renderFaq(section) {
    return `<section class="section">${eyebrow(section.eyebrow)}<h2>${escapeHtml(section.title)}</h2><div class="faq-list module">${section.items.map((item) => `<details class="faq-item"><summary>${escapeHtml(item[0])}</summary><p>${escapeHtml(item[1])}</p></details>`).join('')}</div>${note(section.note)}</section>`;
  }

  function renderCapabilityCards(section) {
    return `<section class="section">${eyebrow(section.eyebrow)}<h2>${escapeHtml(section.title)}</h2><div class="grid-4 module">${section.cards.map((card) => `<div class="card capability-card"><strong>${escapeHtml(card[0])}</strong><p>${escapeHtml(card[1])}</p></div>`).join('')}</div>${note(section.note)}</section>`;
  }

  function renderServiceContact(section) {
    return `<section class="section service-contact">${eyebrow(section.eyebrow)}<h2>${withBreaks(section.title)}</h2>${paragraph('lead', section.body)}<a class="btn primary" href="#">${escapeHtml(section.cta)} →</a>${note(section.note)}</section>`;
  }

  function renderSection(section) {
    const renderers = {
      hero: renderHero,
      business: renderBusiness,
      cases: renderCases,
      capabilities: renderCapabilities,
      knowledge: renderKnowledge,
      other: renderOther,
      about: renderAbout,
      news: renderNews,
      contact: renderContact,
      serviceHero: renderServiceHero,
      pain: renderPain,
      solutions: renderSolutions,
      process: renderProcess,
      proof: renderProof,
      serviceCase: renderServiceCase,
      faq: renderFaq,
      capabilityCards: renderCapabilityCards,
      serviceContact: renderServiceContact
    };
    return renderers[section.type](section);
  }

  function footer() {
    return `<footer class="site-footer"><div class="footer-grid"><div><div class="footer-logo">BLÜHEN</div></div><div class="footer-col"><strong>Business</strong><a>Global IR</a><a>Global Marketing</a><a>Other Businesses</a></div><div class="footer-col"><strong>Company</strong><a>About</a><a>Sustainability</a><a>Recruit</a></div><div class="footer-col"><strong>Contents</strong><a>Cases</a><a>Knowledge</a><a>News</a><a>Contact</a></div></div></footer>`;
  }

  function renderTop(page) {
    return `${chrome(page.route)}${header()}<div class="page-meta"><span class="route-badge">${escapeHtml(page.route)}</span><span>目的：${escapeHtml(page.purpose)}</span></div><div class="page">${page.sections.map(renderSection).join('')}${footer()}</div>`;
  }

  function renderService(page) {
    return `${chrome(page.route)}${header()}<div class="page-meta"><span class="route-badge">${escapeHtml(page.route)}</span><span>目的：${escapeHtml(page.purpose)}</span></div><div class="page service-page">${page.sections.map(renderSection).join('')}${footer()}</div>`;
  }

  function render() {
    const key = activeKey();
    const page = model.pages[key];
    renderSidebar(key);
    browser.innerHTML = page.mode === 'service' ? renderService(page) : renderTop(page);
    document.body.classList.toggle('show-meta', metaToggle.classList.contains('active'));
  }

  metaToggle.addEventListener('click', () => {
    metaToggle.classList.toggle('active');
    document.body.classList.toggle('show-meta', metaToggle.classList.contains('active'));
    metaToggle.textContent = metaToggle.classList.contains('active') ? '構成意図を隠す' : '構成意図を表示';
  });

  sideToggle.addEventListener('click', () => {
    layout.classList.toggle('side-hidden');
    sideToggle.textContent = layout.classList.contains('side-hidden') ? 'ナビを表示' : 'ナビを隠す';
  });

  render();
})();
