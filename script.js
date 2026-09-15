const projectData={
 intellitest:{type:'AI × QA',title:'IntelliTest AI',body:'AI-powered web testing and automation platform. Generates test cases, test plans and functional checklists; extracts XPath/CSS selectors; creates Playwright scripts; detects broken links, UI issues and console errors; and produces structured bug reports.',tags:['Flask','Playwright','SQLite/PostgreSQL','OpenAI API'],url:'https://github.com/SanFlash/AI_Code_Analyser-Teacher'},
 satylens:{type:'PRODUCT',title:'SatyLens',body:'Manifest V3 browser product for screenshots and screen recording with annotation tools, offline gallery and sharing workflows, backed by FastAPI/Supabase and automated browser/backend testing.',tags:['Chrome MV3','FastAPI','Supabase','Pytest'],url:'https://github.com/SanFlash/SatyLens'},
 recruitsync:{type:'AUTOMATION',title:'RecruitSync AI',body:'Recruitment automation pipeline covering scraping, cleaning, storage, explainable candidate matching, change detection, human review and Excel export.',tags:['Python','Playwright','Flask','Pandas'],url:'https://github.com/SanFlash/recruitsync-ai'},
 cricapp:{type:'REAL-TIME APP',title:'Cric-App',body:'Full-stack cricket management and analytics platform with live scoring, player/squad management, performance, form and rating engines, win prediction, XI recommendations, tournaments and AI insights.',tags:['FastAPI','SQLAlchemy','WebSockets'],url:'https://github.com/SanFlash/cric-app'},
 droidtestx:{type:'MOBILE QA',title:'DroidTestX',body:'Mobile E2E automation framework covering realistic login, product, cart, checkout, shipping, payment and order-review workflows using Appium, Pytest, UiAutomator2 and POM.',tags:['Python','Appium','Pytest','UiAutomator2','POM'],url:'https://github.com/SanFlash/DroidTestX-Appium-Automation'},
 codesight:{type:'DEV TOOL',title:'AI Code Analyzer',body:'Flask developer utility for Python syntax and lint diagnostics, complexity and maintainability metrics, with optional AI suggestions and proposed corrections.',tags:['Flask','Python','AI','Code Analysis'],url:'https://github.com/SanFlash/AI_Code_Analyser-Teacher'}
};

const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const nav=$('#topNav'), toggle=$('#navToggle');
toggle?.addEventListener('click',()=>nav.classList.toggle('menu-open'));
$$('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('menu-open')));

const glow=$('#cursorGlow');
window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';});

const orb=$('#orb'), scene=$('#orbScene'), caption=$('#orbCaption');
scene?.addEventListener('pointermove',e=>{const r=scene.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;orb.style.transform=`rotateX(${y*-18}deg) rotateY(${x*22}deg) translateZ(18px)`;caption.textContent='Interactive QA core · '+Math.round((x+.5)*100)+'% signal';});
scene?.addEventListener('pointerleave',()=>{orb.style.transform='';caption.textContent='Move your cursor around';});

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
$$('.reveal').forEach(el=>observer.observe(el));

$$('.magnetic').forEach(btn=>btn.addEventListener('pointermove',e=>{const r=btn.getBoundingClientRect();btn.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.12}px,${(e.clientY-r.top-r.height/2)*.12}px)`;}));
$$('.magnetic').forEach(btn=>btn.addEventListener('pointerleave',()=>btn.style.transform=''));

function openProject(key){const p=projectData[key];if(!p)return;$('#modalType').textContent=p.type;$('#modalTitle').textContent=p.title;$('#modalBody').textContent=p.body;$('#modalTags').innerHTML=p.tags.map(t=>`<span>${t}</span>`).join('');$('#modalLink').href=p.url;$('#projectModal').classList.add('open');$('#projectModal').setAttribute('aria-hidden','false');document.body.style.overflow='hidden';}
function closeProject(){$('#projectModal').classList.remove('open');$('#projectModal').setAttribute('aria-hidden','true');document.body.style.overflow='';}
$$('.project-card').forEach(card=>card.addEventListener('click',()=>openProject(card.dataset.project)));
$('#modalClose')?.addEventListener('click',closeProject);$('.modal-backdrop')?.addEventListener('click',closeProject);document.addEventListener('keydown',e=>e.key==='Escape'&&closeProject());

const filterMap={Playwright:['Playwright'],Pytest:['Pytest'],Appium:['Appium'],Python:['Python'],JavaScript:['JavaScript'],API:['API'],SQL:['SQL'],AI:['AI'],FastAPI:['FastAPI']};
$$('#skillCloud .skill').forEach(btn=>btn.addEventListener('click',()=>{const f=btn.dataset.filter;$$('#skillCloud .skill').forEach(x=>x.classList.remove('active'));btn.classList.add('active');$$('.project-card').forEach(card=>{if(f==='all'){card.classList.remove('hidden-card');return}const tags=[...card.querySelectorAll('.tags span')].map(x=>x.textContent.toLowerCase());const wanted=(filterMap[f]||[f]).map(x=>x.toLowerCase());card.classList.toggle('hidden-card',!wanted.some(w=>tags.some(t=>t.includes(w))));});}));

document.title='Satyendra Kumar Namdeo — QA Automation × AI';
