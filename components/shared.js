/**
 * shared.js — Digidactics nav & footer component injector
 * Voeg toe aan elke pagina: <script src="/components/shared.js"></script>
 * Zorg dat je pagina <div id="nav-placeholder"></div> en
 * <div id="footer-placeholder"></div> bevat.
 */

const NAV_HTML = `
<header class="fixed top-0 left-0 right-0 z-50 px-4 md:px-0">
  <nav class="mt-6 max-w-4xl mx-auto bg-white/80 backdrop-blur-xl rounded-full border border-slate-200/20 shadow-[0px_20px_40px_rgba(24,28,30,0.07)] flex items-center justify-between px-6 py-3 w-full">
    
    <!-- Logo -->
    <a href="/" class="flex items-center gap-2 group">
      <span class="material-symbols-outlined text-[#00658b] group-hover:scale-110 transition-transform duration-200">hub</span>
      <span class="text-xl font-bold tracking-tighter text-[#181c1e] font-headline">Digidactics</span>
    </a>

    <!-- Desktop links -->
    <div class="hidden md:flex items-center gap-8">
      <a class="text-[#3e484f] font-medium hover:text-[#00658b] transition-colors duration-200 text-sm" href="/shadow-ai-scan.html">Shadow AI Scan</a>
      <a class="text-[#3e484f] font-medium hover:text-[#00658b] transition-colors duration-200 text-sm" href="/routeai.html">RouteAI</a>
      <a class="text-[#3e484f] font-medium hover:text-[#00658b] transition-colors duration-200 text-sm" href="/eu-ai-act-ready-kit.html">Ready Kit</a>
      <a class="text-[#3e484f] font-medium hover:text-[#00658b] transition-colors duration-200 text-sm" href="https://insights.digidactics.nl" target="_blank">Insights</a>
    </div>

    <!-- CTA + Hamburger -->
    <div class="flex items-center gap-3">
      <a href="#demo" class="bg-[#00658b] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#004c6a] hover:scale-105 active:scale-95 transition-all duration-200">
        Demo aanvragen
      </a>
      <!-- Mobile hamburger -->
      <button id="nav-toggle" class="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-full hover:bg-slate-100 transition-colors">
        <span class="w-5 h-0.5 bg-[#3e484f] transition-all duration-200" id="ham-1"></span>
        <span class="w-5 h-0.5 bg-[#3e484f] transition-all duration-200" id="ham-2"></span>
        <span class="w-5 h-0.5 bg-[#3e484f] transition-all duration-200" id="ham-3"></span>
      </button>
    </div>
  </nav>

  <!-- Mobile menu -->
  <div id="mobile-menu" class="hidden md:hidden max-w-4xl mx-auto mt-2 bg-white/95 backdrop-blur-xl rounded-[1.5rem] border border-slate-200/30 shadow-lg px-6 py-5 space-y-4">
    <a class="block text-[#3e484f] font-medium hover:text-[#00658b] transition-colors py-1" href="/shadow-ai-scan.html">Shadow AI Scan</a>
    <a class="block text-[#3e484f] font-medium hover:text-[#00658b] transition-colors py-1" href="/routeai.html">RouteAI</a>
    <a class="block text-[#3e484f] font-medium hover:text-[#00658b] transition-colors py-1" href="/eu-ai-act-ready-kit.html">EU AI Act Ready Kit</a>
    <a class="block text-[#3e484f] font-medium hover:text-[#00658b] transition-colors py-1" href="https://insights.digidactics.nl" target="_blank">Insights</a>
    <div class="pt-2 border-t border-slate-100">
      <a href="#demo" class="block text-center bg-[#00658b] text-white px-5 py-3 rounded-full text-sm font-semibold">Demo aanvragen</a>
    </div>
  </div>
</header>
`;

const FOOTER_HTML = `
<footer class="relative bg-[#001e2b] text-white pt-20 pb-8 px-6 overflow-hidden">
  
  <!-- Achtergrond glow -->
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#00658b]/20 blur-[120px] pointer-events-none"></div>

  <div class="max-w-6xl mx-auto relative z-10">

    <!-- Top rij: brand + kolommen -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
      
      <!-- Brand kolom -->
      <div class="md:col-span-4 space-y-5">
        <div class="flex items-center gap-2">
          <span class="material-symbols-outlined text-[#00a1da]">hub</span>
          <span class="font-headline font-extrabold text-xl tracking-tight">Digidactics</span>
        </div>
        <p class="text-sm text-white/60 leading-relaxed max-w-xs">
          Wij maken AI-gebruik veilig, inzichtelijk en klaar voor de toekomst — zonder innovatie te remmen.
        </p>
        <!-- Social icons -->
        <div class="flex gap-3 pt-2">
          <a href="https://linkedin.com" target="_blank" class="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#00658b]/60 hover:text-white transition-all duration-200">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="mailto:rink@digidactics.nl" class="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#00658b]/60 hover:text-white transition-all duration-200">
            <span class="material-symbols-outlined text-[18px]">mail</span>
          </a>
        </div>
      </div>

      <!-- Producten kolom -->
      <div class="md:col-span-3 md:col-start-6">
        <h5 class="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-5">Producten</h5>
        <ul class="space-y-3">
          <li><a href="/shadow-ai-scan.html" class="text-sm text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-2 group"><span class="w-1 h-1 rounded-full bg-[#00a1da] group-hover:scale-150 transition-transform"></span>Shadow AI Scan</a></li>
          <li><a href="/routeai.html" class="text-sm text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-2 group"><span class="w-1 h-1 rounded-full bg-[#00a1da] group-hover:scale-150 transition-transform"></span>RouteAI Platform</a></li>
          <li><a href="/eu-ai-act-ready-kit.html" class="text-sm text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-2 group"><span class="w-1 h-1 rounded-full bg-[#00a1da] group-hover:scale-150 transition-transform"></span>EU AI Act Ready Kit</a></li>
          <li><a href="https://insights.digidactics.nl" target="_blank" class="text-sm text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-2 group"><span class="w-1 h-1 rounded-full bg-[#00a1da] group-hover:scale-150 transition-transform"></span>Insights Blog</a></li>
        </ul>
      </div>

      <!-- Info kolom -->
      <div class="md:col-span-3 md:col-start-10">
        <h5 class="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-5">Informatie</h5>
        <ul class="space-y-3">
          <li><a href="/over-ons.html" class="text-sm text-white/70 hover:text-white transition-colors duration-200">Over Digidactics</a></li>
          <li><a href="#" class="text-sm text-white/70 hover:text-white transition-colors duration-200">Privacybeleid</a></li>
          <li><a href="#" class="text-sm text-white/70 hover:text-white transition-colors duration-200">Algemene Voorwaarden</a></li>
          <li><a href="mailto:rink@digidactics.nl" class="text-sm text-white/70 hover:text-white transition-colors duration-200">Contact</a></li>
        </ul>
      </div>

    </div>

    <!-- Bottom balk -->
    <div class="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <p class="text-xs text-white/30 font-medium">
        &copy; 2026 Digidactics. Alle rechten voorbehouden.
      </p>
      <div class="flex items-center gap-2 text-xs text-white/30">
        <span class="material-symbols-outlined text-[14px] text-[#00a1da]/60">verified_user</span>
        EU AI Act Ready · AVG-bewust ontworpen
      </div>
    </div>

  </div>
</footer>
`;

// ── Injecteer nav ──────────────────────────────────────────────
const navPlaceholder = document.getElementById('nav-placeholder');
if (navPlaceholder) {
  navPlaceholder.innerHTML = NAV_HTML;

  // Hamburger toggle
  const toggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Markeer actieve pagina in nav
  const currentPath = window.location.pathname;
  document.querySelectorAll('#nav-placeholder nav a').forEach(link => {
    if (link.getAttribute('href') === currentPath || 
        currentPath.includes(link.getAttribute('href').replace('.html', ''))) {
      link.classList.add('text-[#00658b]', 'font-bold');
      link.classList.remove('text-[#3e484f]');
    }
  });
}

// ── Injecteer footer ───────────────────────────────────────────
const footerPlaceholder = document.getElementById('footer-placeholder');
if (footerPlaceholder) {
  footerPlaceholder.innerHTML = FOOTER_HTML;
}
