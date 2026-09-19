const menuBtn=document.getElementById("menuBtn"),nav=document.getElementById("nav");
menuBtn.addEventListener("click",()=>{nav.classList.toggle("open");menuBtn.textContent=nav.classList.contains("open")?"✕":"☰"});
document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menuBtn.textContent="☰"}));

const themeBtn=document.getElementById("themeBtn");
themeBtn.addEventListener("click",()=>{document.body.classList.toggle("light");themeBtn.textContent=document.body.classList.contains("light")?"☾":"☼";localStorage.setItem("portfolio-theme",document.body.classList.contains("light")?"light":"dark")});
if(localStorage.getItem("portfolio-theme")==="light"){document.body.classList.add("light");themeBtn.textContent="☾"}

document.getElementById("year").textContent=new Date().getFullYear();

window.addEventListener("scroll",()=>{
 const h=document.documentElement, p=(h.scrollTop/(h.scrollHeight-h.clientHeight))*100;
 document.getElementById("progress").style.width=p+"%";
});

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
