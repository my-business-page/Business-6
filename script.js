document.documentElement.classList.add('js-ready');
document.addEventListener('DOMContentLoaded',()=>{
 const loader=document.querySelector('.loader');
 setTimeout(()=>loader&&loader.classList.add('done'),500);
 document.querySelectorAll('.reveal').forEach((el,i)=>setTimeout(()=>el.classList.add('visible'),Math.min(i*70,500)));
 const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.site-nav');
 toggle?.addEventListener('click',()=>nav?.classList.toggle('open'));
 nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
 const year=document.getElementById('year'); if(year)year.textContent=new Date().getFullYear();
 window.addEventListener('scroll',()=>document.body.classList.toggle('scrolled',scrollY>40),{passive:true});
});