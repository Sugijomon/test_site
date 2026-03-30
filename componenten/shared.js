// shared.js

// 1. Definieer de Header Component
class SharedHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-2 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-full mt-6 mx-4 md:mx-auto max-w-4xl shadow-2xl shadow-sky-900/10">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-sky-900" data-icon="grid_view">grid_view</span>
          <span class="text-xl font-black text-sky-900 tracking-tight font-headline">CuratorKit</span>
        </div>
        
        <nav class="hidden md:flex gap-8 items-center">
          
          <div class="relative group py-4">
            <button class="flex items-center gap-1 text-sky-900 font-bold font-headline hover:text-sky-700 transition-colors">
              Solutions
              <span class="material-symbols-outlined text-sm transition-transform duration-200 group-hover:rotate-180">arrow_drop_down</span>
            </button>
            
            <div class="absolute top-[80%] left-0 w-64 bg-slate-900 text-slate-300 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-slate-700 overflow-hidden flex flex-col py-2 mt-2">
              <a href="#" class="px-5 py-3 hover:text-white hover:bg-slate-800 transition-colors text-sm font-medium">Shadow AI Survey</a>
              <a href="#" class="px-5 py-3 hover:text-white hover:bg-slate-800 transition-colors text-sm font-medium">RouteAI</a>
              <a href="#" class="px-5 py-3 hover:text-white hover:bg-slate-800 transition-colors text-sm font-medium">AISA — AI Skills Accelerator</a>
              <a href="#" class="px-5 py-3 hover:text-white hover:bg-slate-800 transition-colors text-sm font-medium">HR Module</a>
              <a href="#" class="px-5 py-3 hover:text-white hover:bg-slate-800 transition-colors text-sm font-medium">EU AI Act Ready Kit</a>
            </div>
          </div>

          <a class="text-slate-500 hover:text-sky-600 transition-colors font-medium" href="#">Insights</a>
          <a class="text-slate-500 hover:text-sky-600 transition-colors font-medium" href="#">Over</a>
          <a class="text-slate-500 hover:text-sky-600 transition-colors font-medium" href="#">Contact</a>
        </nav>
        
        <div class="flex items-center gap-2">
          <button class="hidden md:block bg-primary text-on-primary px-6 py-2 rounded-full font-bold scale-95 active:scale-90 transition-transform duration-200">
            Try Free
          </button>
          
          <button id="mobile-menu-btn" class="md:hidden flex items-center justify-center p-2 text-sky-900 hover:bg-sky-900/10 rounded-full transition-colors cursor-pointer" aria-label="Toggle menu">
            <span class="material-symbols-outlined" id="menu-icon">menu</span>
          </button>
        </div>

        <div id="mobile-menu" class="hidden absolute top-[120%] left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 flex-col gap-2 md:hidden origin-top transition-all overflow-y-auto max-h-[80vh]">
          
          <div class="flex flex-col gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <span class="text-sky-900 font-bold font-headline text-lg">Solutions</span>
            <div class="flex flex-col gap-3 pl-4 border-l-2 border-slate-200 dark:border-slate-700 ml-2">
              <a href="#" class="text-slate-600 dark:text-slate-400 hover:text-sky-600 font-medium">Shadow AI Survey</a>
              <a href="#" class="text-slate-600 dark:text-slate-400 hover:text-sky-600 font-medium">RouteAI</a>
              <a href="#" class="text-slate-600 dark:text-slate-400 hover:text-sky-600 font-medium">AISA — AI Skills Accelerator</a>
              <a href="#" class="text-slate-600 dark:text-slate-400 hover:text-sky-600 font-medium">HR Module</a>
              <a href="#" class="text-slate-600 dark:text-slate-400 hover:text-sky-600 font-medium">EU AI Act Ready Kit</a>
            </div>
          </div>

          <a class="text-slate-600 dark:text-slate-400 hover:text-sky-600 font-medium text-lg border-b border-slate-100 dark:border-slate-800 py-3" href="#">Insights</a>
          <a class="text-slate-600 dark:text-slate-400 hover:text-sky-600 font-medium text-lg border-b border-slate-100 dark:border-slate-800 py-3" href="#">Over</a>
          <a class="text-slate-600 dark:text-slate-400 hover:text-sky-600 font-medium text-lg border-b border-slate-100 dark:border-slate-800 py-3" href="#">Contact</a>
          
          <button class="w-full bg-primary text-on-primary px-6 py-4 rounded-full font-bold mt-4 hover:bg-primary-container transition-colors active:scale-95">
            Try Free
          </button>
        </div>
      </header>
    `;

    // JavaScript logica voor het hamburger menu
    const menuBtn = this.querySelector('#mobile-menu-btn');
    const mobileMenu = this.querySelector('#mobile-menu');
    const menuIcon = this.querySelector('#menu-icon');

    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('flex');
      
      if (mobileMenu.classList.contains('hidden')) {
        menuIcon.textContent = 'menu';
      } else {
        menuIcon.textContent = 'close';
      }
    });
  }
}
customElements.define('shared-header', SharedHeader);

// 2. Definieer de Footer Component
class SharedFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="w-full bg-[#f1f4f6] dark:bg-[#1a202c]">
        <div class="max-w-7xl mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-4 border-t border-slate-200 dark:border-slate-700">
            
            <div class="py-8 md:pr-8 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-700">
              <img src="https://insights.digidactics.nl/content/images/2026/03/Logo-without-bg.png" alt="Digidactics Logo" class="h-8 mb-6">
              <p class="text-slate-500 max-w-xs">Wij transformeren regelgeving in strategisch voordeel.</p>
            </div>

            <div class="py-8 md:px-8 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-700">
              <h5 class="font-bold text-primary mb-6">Producten</h5>
              <ul class="space-y-2 text-slate-500">
                <li><a class="hover:underline decoration-[#b9025f] decoration-2 underline-offset-4" href="#">Shadow AI Scan</a></li>
                <li><a class="hover:underline decoration-[#b9025f] decoration-2 underline-offset-4" href="#">RouteAI</a></li>
                <li><a class="hover:underline decoration-[#b9025f] decoration-2 underline-offset-4" href="#">AI Skills Accelerator</a></li>
              </ul>
            </div>

            <div class="py-8 md:px-8 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-700">
              <h5 class="font-bold text-primary mb-6">Bedrijf</h5>
              <ul class="space-y-2 text-slate-500">
                <li><a class="hover:underline decoration-[#b9025f] decoration-2 underline-offset-4" href="#">Over ons</a></li>
                <li><a class="hover:underline decoration-[#b9025f] decoration-2 underline-offset-4" href="#">Contact</a></li>
              </ul>
            </div>

            <div class="py-8 md:pl-8">
              <h5 class="font-bold text-primary mb-6">Juridisch</h5>
              <ul class="space-y-2 text-slate-500">
                <li><a class="hover:underline decoration-[#b9025f] decoration-2 underline-offset-4" href="#">Privacy Policy</a></li>
                <li><a class="hover:underline decoration-[#b9025f] decoration-2 underline-offset-4" href="#">Terms of Service</a></li>
                <li><a class="hover:underline decoration-[#b9025f] decoration-2 underline-offset-4" href="#">Cookie Instellingen</a></li>
              </ul>
            </div>
          </div>

          <div class="max-w-7xl mx-auto pt-4 pb-4 border-t border-slate-200 text-slate-400 text-sm">
              © 2026 Digidactics EU. Alle rechten voorbehouden.
          </div>
        </div>
      </footer>
    `;
  }
}
customElements.define('shared-footer', SharedFooter);