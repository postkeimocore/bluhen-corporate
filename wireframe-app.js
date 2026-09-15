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
      <nav class="site-nav"><span class="nav-item has-drop">Business <span class="dropmark">▼</span></span><span class="nav-item">Cases</span><span class="nav-item">Knowledge</span><span class="nav-item has-drop">About <span class="dropmark">▼</span></span><span class="nav-item">News</span></nav>
      <div class="site-actions"><span class="lang">JP / EN</span><a class="contact-btn" href="#">Contact</a></div>
    </header>
    <div class="nav-preview">
      <div class="drop-panel"><strong>Business dropdown</strong><div class="drop-grid"><div class="drop-link"><b>Global IR</b>企業価値を、世界へ。</div><div class="drop-link"><b>Global Marketing</b>商品・サービスを、世界へ。</div><div class="drop-link wide"><b>Other Businesses</b>人材・採用 / PATHOS / AI・業務 / 地域</div></div></div>
      <div class="drop-panel"><strong>About dropdown</strong><div class="drop-grid"><div class="drop-link wide"><b>About Blühen</b>Mission / Vision / Story / Organization / Company</div><div class="drop-link">Sustainability</div><div class="drop-link">Recruit</div></div></div>
    </div>`;
  }

  function note(text) {
    return text ? `<div class="wire-meta"><b>構成意図</b>${escapeHtml(text)}</div>` : '';
  }

  function renderHero(section) {
    return `<section class="section hero"><div class="hero-grid"><div><div class="eyebrow">${escapeHtml(section.eyebrow)}</div><h1>${withBreaks(section.title)}</h1><p class="lead">${escapeHtml(section.lead)}</p><p class="subcopy">${escapeHtml(section.body)}</p><div class="cta-row">${section.ctas.map((label, index) => `<a class="btn ${index === 0 ? 'primary' : ''}" href="#">${escapeHtml(label)}</a>`).join('')}</div>${note(section.note)}</div><div class="visual">${withBreaks(section.visual)}</div></div></section>`;
  }

  function renderBusiness(section) {
    return `<section class="section"><div class="eyebrow">${escapeHtml(section.eyebrow)}</div><h2>${withBreaks(section.title)}</h2><div class="grid-2 module">${section.cards.map((card) => `<a class="card" href="${card.href}" style="text-decoration:none"><strong>${escapeHtml(card.title)}</strong><p>${escapeHtml(card.copy)}</p><div>${card.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}</div><p style="margin-top:14px;font-weight:700;color:#222">詳しく見る →</p></a>`).join('')}</div>${note(section.note)}</section>`;
  }

  function renderCases(section) {
    return `<section class="section"><div class="eyebrow">${escapeHtml(section.eyebrow)}</div><h2>${withBreaks(section.title)}</h2><div class="proof-strip">${section.proofs.map((proof) => `<div class="proof"><b>${escapeHtml(proof[0])}</b><span>${escapeHtml(proof[1])}</span></div>`).join('')}</div><div class="pending">${escapeHtml(section.pending)}</div><div class="grid-2 module">${section.cases.map((item) => `<div class="case-card"><div class="case-cat">${escapeHtml(item.cat)}</div><h3>${escapeHtml(item.title)}</h3><div class="case-kv"><b>課題</b><span>${escapeHtml(item.challenge)}</span><b>支援</b><span>${escapeHtml(item.scope)}</span><b>成果</b><span>${escapeHtml(item.result)}</span></div></div>`).join('')}</div><div class="cta-row module"><a class="btn" href="#">すべての実績を見る →</a></div>${note(section.note)}</section>`;
  }

  function renderCapabilities(section) {
    const [a, b, c, d] = section.items;
    return `<section class="section"><div class="eyebrow">${escapeHtml(section.eyebrow)}</div><h2>${withBreaks(section.title)}</h2><div class="capability-system module"><span class="connect-line v top"></span><span class="connect-line v bottom"></span><span class="connect-line h left"></span><span class="connect-line h right"></span><div class="cap a"><b>${escapeHtml(a[0])}</b><span>${escapeHtml(a[1])}</span></div><div class="cap b"><b>${escapeHtml(b[0])}</b><span>${escapeHtml(b[1])}</span></div><div class="cap c"><b>${escapeHtml(c[0])}</b><span>${escapeHtml(c[1])}</span></div><div class="cap d"><b>${escapeHtml(d[0])}</b><span>${escapeHtml(d[1])}</span></div><div class="capability-center">BLÜHEN<br>CAPABILITIES</div></div>${note(section.note)}</section>`;
  }

  function renderKnowledge(section) {
    return `<section class="section"><div class="eyebrow">${escapeHtml(section.eyebrow)} <span class="cms-badge">microCMS</span></div><h2>${escapeHtml(section.title)}</h2><div class="grid-3 module">${section.cards.map((card) => `<div class="card"><span class="tag">${escapeHtml(card[0])}</span><strong>${escapeHtml(card[1])}</strong><p>${escapeHtml(card[2])}</p></div>`).join('')}</div><div class="cta-row module"><a class="btn" href="#">知見をすべて見る →</a></div>${note(section.note)}</section>`;
  }

  function renderOther(section) {
    return `<section class="section"><div class="eyebrow">${escapeHtml(section.eyebrow)}</div><h2>${escapeHtml(section.title)}</h2><div class="other-row module">${section.items.map((item) => `<div class="other-chip">${escapeHtml(item)}</div>`).join('')}</div>${note(section.note)}</section>`;
  }

  function renderAbout(section) {
    return `<section class="section"><div class="eyebrow">${escapeHtml(section.eyebrow)}</div><h2>${escapeHtml(section.title)}</h2><p class="lead">${escapeHtml(section.lead)}</p><div>${section.items.map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join('')}</div><div class="cta-row module"><a class="btn" href="#">Blühenについて →</a></div>${note(section.note)}</section>`;
  }

  function renderNews(section) {
    return `<section class="section"><div class="eyebrow">${escapeHtml(section.eyebrow)} <span class="cms-badge">microCMS</span></div><h2>${escapeHtml(section.title)}</h2><div class="news-list module">${section.rows.map((row) => `<div class="news-row"><span>${escapeHtml(row[0])}</span><span>${escapeHtml(row[1])}</span><span>${escapeHtml(row[2])}</span></div>`).join('')}</div>${note(section.note)}</section>`;
  }

  function renderContact(section) {
    return `<section class="section"><div class="eyebrow">${escapeHtml(section.eyebrow)}</div><h2>${withBreaks(section.title)}</h2><div class="contact-grid module">${section.cards.map((card) => `<div class="contact-card"><strong>${escapeHtml(card[0])}</strong><p>${escapeHtml(card[1])}</p><a class="btn primary" href="#">相談する →</a></div>`).join('')}</div><div class="cta-row module"><a class="btn" href="#">${escapeHtml(section.other)} →</a></div>${note(section.note)}</section>`;
  }

  function renderSection(section) {
    const renderers = { hero: renderHero, business: renderBusiness, cases: renderCases, capabilities: renderCapabilities, knowledge: renderKnowledge, other: renderOther, about: renderAbout, news: renderNews, contact: renderContact };
    return renderers[section.type](section);
  }

  function footer() {
    return `<footer class="site-footer"><div class="footer-grid"><div><div class="footer-logo">BLÜHEN</div><p>Corporate Site Renewal / IA Wireframe</p></div><div class="footer-col"><strong>Business</strong><a>Global IR</a><a>Global Marketing</a><a>Other Businesses</a></div><div class="footer-col"><strong>Company</strong><a>About</a><a>Sustainability</a><a>Recruit</a></div><div class="footer-col"><strong>Contents</strong><a>Cases</a><a>Knowledge</a><a>News</a><a>Contact</a></div></div></footer>`;
  }

  function renderTop(page) {
    return `${chrome(page.route)}${header()}<div class="page-meta"><span class="route-badge">${escapeHtml(page.route)}</span><span>目的：${escapeHtml(page.purpose)}</span></div><div class="page">${page.sections.map(renderSection).join('')}${footer()}</div>`;
  }

  function renderOutline(page) {
    return `${chrome(page.route)}${header()}<div class="page-meta"><span class="route-badge">${escapeHtml(page.route)}</span><span>目的：${escapeHtml(page.purpose)}</span></div><div class="page"><section class="section hero"><div class="eyebrow">LOWER PAGE STRUCTURE</div><h1>${escapeHtml(page.title)}</h1><p class="lead">見積・情報設計確認用のセクション構造。現段階では下層の最終UIまでは制作しない。</p><div class="outline-list module">${page.outline.map((item) => `<div class="outline-item"><div><b>${escapeHtml(item[0])}</b><p>${escapeHtml(item[1])}</p></div></div>`).join('')}</div>${note(page.note)}</section>${footer()}</div>`;
  }

  function render() {
    const key = activeKey();
    const page = model.pages[key];
    renderSidebar(key);
    browser.innerHTML = page.mode === 'full' ? renderTop(page) : renderOutline(page);
    document.body.classList.toggle('show-meta', metaToggle.classList.contains('active'));
  }

  metaToggle.addEventListener('click', () => {
    metaToggle.classList.toggle('active');
    document.body.classList.toggle('show-meta', metaToggle.classList.contains('active'));
    metaToggle.textContent = metaToggle.classList.contains('active') ? '構成メモを隠す' : '構成メモを表示';
  });

  sideToggle.addEventListener('click', () => {
    layout.classList.toggle('side-hidden');
    sideToggle.textContent = layout.classList.contains('side-hidden') ? 'ナビを表示' : 'ナビを隠す';
  });

  render();
})();
