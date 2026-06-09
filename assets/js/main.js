/* MardRisk AI — Shared JS */

// ─── LANGUAGE ROUTING ───────────────────────────────────────────────
const LANGS = ['en', 'am', 'ru'];
const LANG_LABELS = { en: 'EN', am: 'ՀՅ', ru: 'RU' };

function detectLang() {
  const pathLang = window.location.pathname.split('/').find(part => LANGS.includes(part));
  return pathLang || localStorage.getItem('mardriskai_lang') || 'en';
}
function setLang(lang) {
  localStorage.setItem('mardriskai_lang', lang);
}
function getCurrentPage() {
  const path = window.location.pathname;
  if (/\/about\/?$/.test(path) || path.includes('/about/')) return 'about';
  if (/\/privacy\/?$/.test(path) || path.includes('/privacy/')) return 'privacy';
  if (/\/terms\/?$/.test(path) || path.includes('/terms/')) return 'terms';
  if (/\/contact-us\/?$/.test(path) || path.includes('/contact-us/')) return 'contact-us';
  if (/\/faq\/?$/.test(path) || path.includes('/faq/')) return 'faq';
  if (/\/course\/?$/.test(path) || path.includes('/course/')) return 'course';
  if (/\/pay\/?$/.test(path) || path.includes('/pay/')) return 'pay';
  if (/\/usecase\/?$/.test(path) || path.includes('/usecase/')) return 'usecase';
  if (/\/pricing\/?$/.test(path) || path.includes('/pricing/')) return 'pricing';
  if (/\/security\/?$/.test(path) || path.includes('/security/')) return 'security';
  if (/\/changelog\/?$/.test(path) || path.includes('/changelog/')) return 'changelog';
  if (/\/forbusiness\/?$/.test(path) || path.includes('/forbusiness/')) return 'forbusiness';
  if (/\/careers\/?$/.test(path) || path.includes('/careers/')) return 'careers';
  if (/\/api\/?$/.test(path) || path.includes('/api/')) return 'api';
  return 'index';
}
function switchLang(lang) {
  setLang(lang);
  const page = getCurrentPage();
  const cleanPath = page === 'index' ? '/' + lang : '/' + lang + '/' + page;
  window.location.href = cleanPath + window.location.search + window.location.hash;
}
function initLangButtons() {
  const current = detectLang();
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const l = btn.dataset.lang;
    btn.classList.toggle('active', l === current);
    btn.addEventListener('click', () => switchLang(l));
  });
}

// ─── LOADER ─────────────────────────────────────────────────────────
function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;
  const percent = loader.querySelector('.loader-percent');
  const tagline = loader.querySelector('.loader-tagline');
  if (tagline) {
    const text = tagline.dataset.text || tagline.textContent.trim();
    tagline.dataset.text = text;
    tagline.textContent = '';
    tagline.classList.add('typing');

    let i = 0;
    const type = () => {
      tagline.textContent = text.slice(0, i);
      i += 1;
      if (i <= text.length) {
        setTimeout(type, 42);
      } else {
        tagline.classList.remove('typing');
        tagline.classList.add('typed');
      }
    };
    setTimeout(type, 450);
  }

  let n = 0;
  const iv = setInterval(() => {
    n = Math.min(100, n + Math.floor(Math.random() * 8) + 2);
    if (percent) percent.textContent = n + '%';
    if (n >= 100) {
      clearInterval(iv);
      setTimeout(() => {
        loader.classList.add('hidden');
        document.body.style.overflow = '';
      }, 400);
    }
  }, 40);
}

// ─── CURSOR ──────────────────────────────────────────────────────────
function initCursor() {
  const cursor = document.createElement('div');
  cursor.className = 'cursor';
  const ring = document.createElement('div');
  ring.className = 'cursor-ring';
  document.body.appendChild(cursor);
  document.body.appendChild(ring);

  let mx = 0, my = 0;
  let rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.left = mx - 5 + 'px';
    cursor.style.top = my - 5 + 'px';
  });

  function animRing() {
    rx += (mx - rx - 20) * 0.12;
    ry += (my - ry - 20) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animRing);
  }
  animRing();

  document.querySelectorAll('a, button, .feature-card, .price-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(2)';
      ring.style.transform = 'translate(-15px,-15px) scale(1.5)';
      ring.style.borderColor = 'rgba(201,168,76,0.8)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
      ring.style.transform = 'translate(-15px,-15px) scale(1)';
      ring.style.borderColor = 'rgba(201,168,76,0.5)';
    });
  });
}

// ─── NAV SCROLL ──────────────────────────────────────────────────────
function initNav() {
  const nav = document.querySelector('nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ─── MOBILE MENU ─────────────────────────────────────────────────────
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.mobile-menu');
  const close = document.querySelector('.mobile-close');
  if (!hamburger || !menu) return;
  hamburger.addEventListener('click', () => menu.classList.add('open'));
  if (close) close.addEventListener('click', () => menu.classList.remove('open'));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
}

// ─── SCROLL REVEAL ───────────────────────────────────────────────────
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}

// ─── PARTICLES ───────────────────────────────────────────────────────
function initParticles() {
  const container = document.querySelector('.hero-particles');
  if (!container) return;
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      animation-duration: ${6 + Math.random() * 12}s;
      animation-delay: ${Math.random() * 8}s;
      opacity: 0;
      width: ${1 + Math.random() * 2}px;
      height: ${1 + Math.random() * 2}px;
    `;
    container.appendChild(p);
  }
}

// ─── COUNTER ANIMATION ───────────────────────────────────────────────
function animateCounter(el, target, suffix = '') {
  const duration = 1800;
  const start = performance.now();
  const isFloat = target % 1 !== 0;
  
  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const val = target * ease;
    el.textContent = (isFloat ? val.toFixed(1) : Math.floor(val)) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        animateCounter(el, target, suffix);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(el => obs.observe(el));
}

// ─── MARQUEE CLONE ────────────────────────────────────────────────────
function initMarquee() {
  const track = document.querySelector('.marquee-track');
  if (!track) return;
  const clone = track.cloneNode(true);
  track.parentElement.appendChild(clone);
}

// ─── INIT ─────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('loader')) {
    document.body.style.overflow = 'hidden';
  }
  initLoader();
  initCursor();
  initNav();
  initMobileMenu();
  initReveal();
  initParticles();
  initCounters();
  initMarquee();
  initLangButtons();
});
