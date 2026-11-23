document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  function closeMenu(){ if (!toggle || !menu) return; menu.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); toggle.setAttribute('aria-label','Open menu'); }
  if(toggle && menu){
    toggle.addEventListener('click',()=>{ const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close menu':'Open menu'); });
    menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
    document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
    document.addEventListener('click',e=>{if(!menu.contains(e.target)&&!toggle.contains(e.target))closeMenu()});
    window.addEventListener('resize',()=>{if(window.innerWidth>850)closeMenu()});
  }
  document.querySelectorAll('#year').forEach(el=>el.textContent=new Date().getFullYear());
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!reduced && 'IntersectionObserver' in window){
    const io = new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:0.1,rootMargin:'0px 0px -25px 0px'});
    document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  } else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));
  // A project GitHub Pages site follows username.github.io/repository/.
  // Generate the matching GitHub profile link when hosted on GitHub Pages.
  if(location.hostname.endsWith('.github.io')){
    const username=location.hostname.slice(0,-'.github.io'.length);
    document.querySelectorAll('.contact-github').forEach(a=>a.href='https://github.com/'+encodeURIComponent(username));
  }
});
