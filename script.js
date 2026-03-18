/* ══════════════════════════════════════════
   SPA Page Router
══════════════════════════════════════════ */
function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');
  document.querySelectorAll('.nav-link').forEach(a=>a.classList.remove('active'));
  const activeLink=document.querySelector('.nav-link[onclick*="\''+id+'\'"]');
  if(activeLink)activeLink.classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
  // trigger scroll reveal for new page
  setTimeout(()=>revealAll(),100);
}

/* ══════════════════════════════════════════
   Mobile Menu
══════════════════════════════════════════ */
function toggleMenu(){
  const m=document.getElementById('mobile-menu');
  const h=document.getElementById('hamburger');
  const open=m.classList.contains('open');
  m.classList.toggle('open');
  h.classList.toggle('open');
}

/* ══════════════════════════════════════════
   Language System — 3 languages
══════════════════════════════════════════ */
let currentLang='en';
function setLang(lang){
  currentLang=lang;
  document.documentElement.lang=lang;

  document.querySelectorAll('[data-'+lang+']').forEach(el=>{
    const val=el.getAttribute('data-'+lang);
    if(!val)return;
    if(el.tagName==='INPUT'||el.tagName==='TEXTAREA'){
      el.placeholder=val;
    }else if(el.tagName==='OPTION'){
      el.textContent=val;
    }else{
      el.innerHTML=val;
    }
  });

  // nav lang buttons
  document.querySelectorAll('.lang-opt').forEach(b=>b.classList.remove('on'));
  document.querySelector('.lang-opt[onclick="setLang(\''+lang+'\')"]')?.classList.add('on');

  // mobile lang buttons
  document.querySelectorAll('.mob-lang-btn').forEach(b=>b.classList.remove('on'));
  document.querySelector('.mob-lang-btn[onclick="setLang(\''+lang+'\')"]')?.classList.add('on');

  // select options
  document.querySelectorAll('select option').forEach(opt=>{
    const v=opt.getAttribute('data-'+lang);
    if(v)opt.textContent=v;
  });
}

/* ══════════════════════════════════════════
   Scroll Reveal
══════════════════════════════════════════ */
const revealObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add('visible');revealObs.unobserve(e.target);}
  });
},{threshold:0.07,rootMargin:'0px 0px -30px 0px'});

function revealAll(){
  document.querySelectorAll('.sr:not(.visible)').forEach(el=>revealObs.observe(el));
}
revealAll();

/* ══════════════════════════════════════════
   Nav scroll effect
══════════════════════════════════════════ */
window.addEventListener('scroll',()=>{
  const nav=document.getElementById('nav');
  if(window.scrollY>20){
    nav.style.background='rgba(4,5,13,0.95)';
  }else{
    nav.style.background='rgba(4,5,13,0.85)';
  }
},{passive:true});