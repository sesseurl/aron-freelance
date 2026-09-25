const menu = document.querySelector('.menu');
const nav = document.querySelector('#navigation');
function closeMenu(){ nav.classList.remove('open'); menu.setAttribute('aria-expanded','false'); menu.setAttribute('aria-label','Abrir menu'); menu.querySelector('span').textContent='＋'; }
menu.addEventListener('click',()=>{ const expanded=menu.getAttribute('aria-expanded')!=='true'; nav.classList.toggle('open',expanded); menu.setAttribute('aria-expanded',String(expanded)); menu.setAttribute('aria-label',expanded?'Fechar menu':'Abrir menu'); menu.querySelector('span').textContent=expanded?'−':'＋'; });
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape' && menu.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus();}});
document.addEventListener('click',event=>{if(!event.target.closest('header')) closeMenu();});
window.matchMedia('(min-width: 801px)').addEventListener('change',event=>{if(event.matches) closeMenu();});
