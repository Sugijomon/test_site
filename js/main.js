// ── NAV & FOOTER INJECTION ──
(function() {
  // Determine base path (for subpages)
  const depth = location.pathname.split('/').filter(Boolean).length;
  const base = depth > 0 ? '../'.repeat(depth) : '';

  // Active link detection
  const path = location.pathname.replace(/\/$/, '') || '/';

  const navHTML = `
<nav id="site-nav">
  <div class="nav-inner">
    <a href="${base}index.html" class="nav-logo">Digi<span>dactics</span></a>
    <ul class="nav-links">
      <li class="nav-dropdown">
        <a href="#">Solutions</a>
        <div class="nav-dropdown-menu">
          <a href="${base}shadow-ai-survey/index.html">Shadow AI Survey</a>
          <a href="${base}routeai/index.html">RouteAI</a>
          <a href="${base}aisa/index.html">AISA — AI Skills Accelerator</a>
          <a href="${base}hr-module/index.html">HR Module</a>
          <a href="${base}ready-kit/index.html">EU AI Act Ready Kit</a>
        </div>
      </li>
      <li><a href="${base}insights/index.html">Insights</a></li>
      <li><a href="${base}testimonials/index.html">Referenties</a></li>
      <li><a href="${base}over/index.html">Over</a></li>
    </ul>
    <div class="nav-cta">
      <a href="${base}over/index.html#contact" class="btn btn-primary btn-sm">Gesprek aanvragen</a>
    </div>
  </div>
</nav>`;

  const footerHTML = `
<footer id="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <a href="${base}index.html" class="footer-logo">Digi<span>dactics</span></a>
        <p class="footer-desc">AI governance en capability building voor zakelijke professionals. Systematisch. Uitlegbaar. Proportioneel.</p>
        <div class="mt-24">
          <p class="text-xs" style="color:rgba(255,255,255,0.35); margin-bottom:8px">Nieuwsbrief — elke twee weken inzichten zonder hype</p>
          <div class="newsletter-form">
            <input type="email" placeholder="uw@email.nl">
            <button type="button">Aanmelden</button>
          </div>
        </div>
      </div>
      <div>
        <h4>Solutions</h4>
        <ul class="footer-links">
          <li><a href="${base}shadow-ai-survey/index.html">Shadow AI Survey</a></li>
          <li><a href="${base}routeai/index.html">RouteAI</a></li>
          <li><a href="${base}aisa/index.html">AISA</a></li>
          <li><a href="${base}hr-module/index.html">HR Module</a></li>
          <li><a href="${base}ready-kit/index.html">EU AI Act Ready Kit</a></li>
        </ul>
      </div>
      <div>
        <h4>Informatie</h4>
        <ul class="footer-links">
          <li><a href="${base}insights/index.html">Insights</a></li>
          <li><a href="${base}testimonials/index.html">Referenties</a></li>
          <li><a href="${base}over/index.html">Over Digidactics</a></li>
          <li><a href="${base}over/index.html#contact">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4>Partnerships</h4>
        <ul class="footer-links">
          <li><a href="#">EDIH Noord-West</a></li>
          <li><a href="#">EDIH Zuid-Nederland</a></li>
          <li><a href="#">MKB Digitaal</a></li>
        </ul>
        <div class="mt-24">
          <a href="https://linkedin.com" class="btn btn-sm" style="background:rgba(255,255,255,0.08); color:rgba(255,255,255,0.7); font-size:12px;">LinkedIn →</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Digidactics — Rink Jansen</span>
      <span class="footer-kvk">KvK 62200 — Computer consultancy &nbsp;|&nbsp; 85591 — Zakelijke opleiding</span>
    </div>
  </div>
</footer>`;

  // Inject nav
  const navTarget = document.getElementById('nav-placeholder');
  if (navTarget) navTarget.outerHTML = navHTML;

  // Inject footer
  const footerTarget = document.getElementById('footer-placeholder');
  if (footerTarget) footerTarget.outerHTML = footerHTML;

  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Active nav link
  document.querySelectorAll('.nav-links a, .nav-dropdown-menu a').forEach(link => {
    if (link.href && location.href.includes(link.getAttribute('href')?.replace('../', '').replace('index.html', ''))) {
      link.classList.add('active');
    }
  });
})();
