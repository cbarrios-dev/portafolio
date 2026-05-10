import './style.css'

const i18n = {
  es: {
    'hero.greeting': 'Hola, soy',
    'hero.desc': '+10 años de experiencia en desarrollo de aplicaciones web empresariales. Especialista en <strong>ASP.NET (C#)</strong> backend + <strong>Angular / React</strong> frontend.',
    'hero.btnProjects': 'Ver Proyectos',
    'hero.btnContact': 'Contáctame',
    'hero.titles': ['FullStack Developer', '.NET / Angular Specialist', 'Arquitecto de Software'],
    'stats.exp': 'Años de Experiencia',
    'stats.projects': 'Proyectos Completados',
    'stats.tech': 'Tecnologías',
    'stats.companies': 'Empresas',
    'about.title': 'Sobre Mí',
    'about.p1': 'Desarrollador de Software Full Stack con más de <strong>10 años de experiencia</strong> en el desarrollo de aplicaciones web empresariales utilizando <strong>ASP.NET (C#)</strong> en backend y <strong>Angular / React</strong> en frontend.',
    'about.p2': 'Especializado en creación y consumo de APIs REST, integración con SQL Server y MySQL, y desarrollo de soluciones escalables para sectores financieros y corporativos. Experiencia en pruebas unitarias, buenas prácticas de desarrollo y metodologías ágiles (Scrum).',
    'about.p3': 'Actualmente trabajando como <strong>FullStack Developer</strong>, construyendo productos digitales de alto impacto. Egresado de la Fundación Universitaria Tecnológico Comfenalco.',
    'skills.title': 'Habilidades y Herramientas',
    'skills.categories': {
      Frontend: 'Frontend',
      Backend: 'Backend',
      'Bases de Datos': 'Bases de Datos',
      Testing: 'Testing',
      'DevOps & Tools': 'DevOps & Tools',
      Arquitectura: 'Arquitectura',
    },
    'projects.title': 'Proyectos Destacados',
    'experience.title': 'Experiencia',
    'contact.title': 'Ponte en Contacto',
    'contact.text': '¿Tienes un proyecto en mente o simplemente quieres conectar? Estoy abierto a nuevas oportunidades. ¡No dudes en escribirme!',
    'contact.btn': 'Contáctame',
    'nav.about': 'Sobre Mí',
    'nav.skills': 'Skills',
    'nav.projects': 'Proyectos',
    'nav.experience': 'Experiencia',
    'nav.contact': 'Contacto',
    'lang': 'EN',
  },
  en: {
    'hero.greeting': "Hi, I'm",
    'hero.desc': '+10 years of experience in enterprise web application development. Specialist in <strong>ASP.NET (C#)</strong> backend + <strong>Angular / React</strong> frontend.',
    'hero.btnProjects': 'View Projects',
    'hero.btnContact': 'Contact Me',
    'hero.titles': ['FullStack Developer', '.NET / Angular Specialist', 'Software Architect'],
    'stats.exp': 'Years of Experience',
    'stats.projects': 'Completed Projects',
    'stats.tech': 'Technologies',
    'stats.companies': 'Companies',
    'about.title': 'About Me',
    'about.p1': 'Full Stack Software Developer with more than <strong>10 years of experience</strong> in enterprise web application development using <strong>ASP.NET (C#)</strong> backend and <strong>Angular / React</strong> frontend.',
    'about.p2': 'Specialized in REST API design and consumption, SQL Server and MySQL integration, and scalable solutions for financial and corporate sectors. Experience in unit testing, development best practices, and Agile methodologies (Scrum).',
    'about.p3': 'Currently working as a <strong>FullStack Developer</strong>, building high-impact digital products. Graduate of Fundación Universitaria Tecnológico Comfenalco.',
    'skills.title': 'Skills & Tools',
    'skills.categories': {
      Frontend: 'Frontend',
      Backend: 'Backend',
      'Bases de Datos': 'Databases',
      Testing: 'Testing',
      'DevOps & Tools': 'DevOps & Tools',
      Arquitectura: 'Architecture',
    },
    'projects.title': 'Featured Projects',
    'experience.title': 'Experience',
    'contact.title': 'Get In Touch',
    'contact.text': "Have a project in mind or just want to connect? I'm open to new opportunities. Don't hesitate to reach out!",
    'contact.btn': 'Contact Me',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'lang': 'ES',
  },
}

const skillCategories = [
  {
    name: 'Frontend',
    items: [
      { n: 'Angular', i: '🅰️' },
      { n: 'React', i: '⚛️' },
      { n: 'TypeScript', i: '📘' },
      { n: 'JavaScript', i: '⚡' },
      { n: 'HTML5', i: '🌐' },
      { n: 'CSS3', i: '🎨' },
      { n: 'Angular Material', i: '🎨' },
      { n: 'RxJS', i: '🔄' },
      { n: 'NgRx', i: '🗃️' },
    ],
  },
  {
    name: 'Backend',
    items: [
      { n: '.NET / C#', i: '🔷' },
      { n: 'ASP.NET Core', i: '⚙️' },
      { n: 'Node.js', i: '🟢' },
      { n: 'REST APIs', i: '🔗' },
      { n: 'Entity Framework Core', i: '📦' },
    ],
  },
  {
    name: 'Bases de Datos',
    items: [
      { n: 'SQL Server', i: '🗄️' },
      { n: 'PostgreSQL', i: '🐘' },
      { n: 'MySQL', i: '🐬' },
      { n: 'Modelado de Datos', i: '📐' },
      { n: 'Optimización SQL', i: '⚡' },
    ],
  },
  {
    name: 'Testing',
    items: [
      { n: 'xUnit / NUnit', i: '🧪' },
      { n: 'Jasmine', i: '🌼' },
    ],
  },
  {
    name: 'DevOps & Tools',
    items: [
      { n: 'Azure DevOps', i: '☁️' },
      { n: 'Git', i: '🔀' },
      { n: 'CI/CD', i: '🔄' },
      { n: 'Jira', i: '📋' },
    ],
  },
  {
    name: 'Arquitectura',
    items: [
      { n: 'Arquitectura en Capas', i: '🏗️' },
      { n: 'MVC', i: '📐' },
      { n: 'SOLID', i: '💎' },
      { n: 'Clean Code', i: '✨' },
      { n: 'Scrum', i: '🔄' },
    ],
  },
]

const projectsData = {
  es: [
    { title: 'Microservicios .NET', desc: 'Microservicios en .NET para plataforma empresarial, mejorando escalabilidad y mantenibilidad del sistema.', tags: ['.NET', 'C#', 'MySQL', 'Angular'] },
    { title: 'Componentes UI Modulares', desc: 'Biblioteca de componentes reutilizables en Angular para sistemas logísticos, reduciendo tiempo de desarrollo.', tags: ['Angular', 'TypeScript', 'HTML/CSS'] },
    { title: 'APIs REST Facturación', desc: 'APIs REST en .NET Framework para facturación electrónica con procedimientos almacenados optimizados.', tags: ['.NET', 'C#', 'MSSQL', 'REST'] },
    { title: 'Refactorización Legacy', desc: 'Refactorización de código legado aplicando principios SOLID y Clean Code para reducir incidentes.', tags: ['.NET Core', 'SOLID', 'Clean Code'] },
  ],
  en: [
    { title: '.NET Microservices', desc: 'Microservices in .NET for enterprise platform, improving scalability and maintainability.', tags: ['.NET', 'C#', 'MySQL', 'Angular'] },
    { title: 'Modular UI Components', desc: 'Reusable Angular component library for logistics systems, reducing development time.', tags: ['Angular', 'TypeScript', 'HTML/CSS'] },
    { title: 'Invoicing REST APIs', desc: 'REST APIs in .NET Framework for electronic invoicing with optimized stored procedures.', tags: ['.NET', 'C#', 'MSSQL', 'REST'] },
    { title: 'Legacy Refactoring', desc: 'Legacy code refactoring applying SOLID and Clean Code principles to reduce incidents.', tags: ['.NET Core', 'SOLID', 'Clean Code'] },
  ],
}

const experienceData = {
  es: [
    { role: 'Senior FullStack Developer', company: 'Capgemini', date: 'mar. 2022 — dic. 2025 · 3a 10m', desc: 'Microservicios en .NET, modelos y procedimientos almacenados en MySQL, componentes reutilizables en Angular (30% menos tiempo de desarrollo).', location: 'Medellín, Antioquia, Colombia' },
    { role: 'Analista de Sistemas Senior', company: 'Nexos Software', date: 'ago. 2021 — mar. 2022 · 8m', desc: 'Componentes UI modulares en Angular, principios SOLID y Clean Code en .NET Core, soporte y refactorización de código legado.', location: 'Medellín, Antioquia, Colombia' },
    { role: 'Analista de Sistemas Senior / SSR', company: 'Asesoftware', date: 'may. 2019 — ago. 2021 · 2a 4m', desc: 'APIs REST en .NET (C#), procedimientos almacenados optimizados en MSSQL con mejoras de hasta 25% en rendimiento.', location: 'Bogotá, Colombia' },
    { role: 'Ingeniero Desarrollador de Software', company: 'Facture S.A.S.', date: 'dic. 2016 — abr. 2019 · 2a 5m', desc: 'APIs REST en .NET Framework para facturación electrónica, interfaces en Angular, soporte funcional y técnico.', location: 'Bolívar, Colombia' },
    { role: 'Programador', company: 'General Ledger ERP', date: 'nov. 2014 — oct. 2016 · 2a', desc: 'Desarrollo y mantenimiento de sistemas ERP.', location: 'Bolívar, Colombia' },
  ],
  en: [
    { role: 'Senior FullStack Developer', company: 'Capgemini', date: 'Mar 2022 — Dec 2025 · 3y 10m', desc: 'Microservices in .NET, MySQL models and stored procedures, reusable Angular components (30% less dev time).', location: 'Medellín, Antioquia, Colombia' },
    { role: 'Senior Systems Analyst', company: 'Nexos Software', date: 'Aug 2021 — Mar 2022 · 8m', desc: 'Modular Angular UI components, SOLID and Clean Code in .NET Core, legacy code support and refactoring.', location: 'Medellín, Antioquia, Colombia' },
    { role: 'Senior / SSR Systems Analyst', company: 'Asesoftware', date: 'May 2019 — Aug 2021 · 2y 4m', desc: 'REST APIs in .NET (C#), optimized MSSQL stored procedures with up to 25% performance improvements.', location: 'Bogotá, Colombia' },
    { role: 'Software Development Engineer', company: 'Facture S.A.S.', date: 'Dec 2016 — Apr 2019 · 2y 5m', desc: 'REST APIs in .NET Framework for e-invoicing, Angular interfaces, functional and technical support.', location: 'Bolívar, Colombia' },
    { role: 'Programmer', company: 'General Ledger ERP', date: 'Nov 2014 — Oct 2016 · 2y', desc: 'ERP system development and maintenance.', location: 'Bolívar, Colombia' },
  ],
}

let currentLang = 'es'
const typewriterEl = document.getElementById('heroTypewriter')
const langToggle = document.getElementById('langToggle')

function renderSkills(lang) {
  const container = document.getElementById('skillsGrid')
  if (!container) return
  const cats = i18n[lang]['skills.categories']
  container.innerHTML = skillCategories
    .map(
      (cat) => `
    <div class="skill-category" data-reveal>
      <h3 class="skill-category-title">${cats[cat.name]}</h3>
      <div class="skill-category-grid">
        ${cat.items.map((s) => `
          <div class="skill-card">
            <span class="skill-icon">${s.i}</span>
            <span class="skill-name">${s.n}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `
    )
    .join('')
}

function renderProjects(lang) {
  const container = document.getElementById('projectsGrid')
  if (!container) return
  const projects = projectsData[lang]
  container.innerHTML = projects
    .map(
      (p) => `
    <div class="project-card" data-reveal>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="project-tags">
        ${p.tags.map((t) => `<span class="project-tag">${t}</span>`).join('')}
      </div>
    </div>
  `
    )
    .join('')
}

function renderExperience(lang) {
  const container = document.getElementById('timeline')
  if (!container) return
  const exp = experienceData[lang]
  container.innerHTML = exp
    .map(
      (e) => `
    <div class="timeline-item" data-reveal>
      <h3>${e.role}</h3>
      <div class="company">${e.company}</div>
      <div class="date">${e.date}</div>
      ${e.location ? `<div class="location">${e.location}</div>` : ''}
      <p>${e.desc}</p>
    </div>
  `
    )
    .join('')
}

function updateStaticText(lang) {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n
    if (i18n[lang][key]) {
      el.innerHTML = i18n[lang][key]
    }
  })
}

let titles = []
let titleIndex = 0
let typewriterRunning = false

function setTypewriter(lang) {
  if (!typewriterEl) return
  titles = i18n[lang]['hero.titles']
  titleIndex = 0
  typewriter(typewriterEl, titles[0], () => {
    setTimeout(cycleTitle, 2000)
  })
}

function cycleTitle() {
  if (!typewriterEl || titles.length <= 1) return
  titleIndex = (titleIndex + 1) % titles.length
  typewriter(typewriterEl, titles[titleIndex], () => {
    setTimeout(cycleTitle, 2000)
  })
}

function applyLanguage(lang) {
  currentLang = lang
  updateStaticText(lang)
  renderSkills(lang)
  renderProjects(lang)
  renderExperience(lang)
  setTypewriter(lang)
  if (langToggle) langToggle.textContent = i18n[lang].lang
  document.documentElement.lang = lang
  document.title = lang === 'es'
    ? 'Carlos Barrios — FullStack Developer .NET / Angular & React'
    : 'Carlos Barrios — FullStack Developer .NET / Angular & React'

  document.querySelectorAll('[data-reveal]').forEach((el) => {
    el.classList.remove('revealed')
    revealObserver.observe(el)
  })
}

langToggle?.addEventListener('click', () => {
  const next = currentLang === 'es' ? 'en' : 'es'
  applyLanguage(next)
})

// --- Render initial ---
renderSkills('es')
renderProjects('es')
renderExperience('es')

// --- Year ---
document.getElementById('year').textContent = new Date().getFullYear()

// --- Hamburger menu ---
const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')

hamburger?.addEventListener('click', () => {
  navLinks?.classList.toggle('open')
  hamburger?.classList.toggle('active')
})

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks?.classList.remove('open')
    hamburger?.classList.remove('active')
  })
})

// --- Typewriter Effect ---
function typewriter(element, text, callback, speed = 55) {
  let i = 0
  element.innerHTML = ''
  const cursor = document.createElement('span')
  cursor.className = 'cursor'

  function type() {
    if (i < text.length) {
      element.textContent = text.slice(0, i + 1)
      element.appendChild(cursor)
      i++
      setTimeout(type, speed + Math.random() * 40)
    } else if (callback) {
      setTimeout(callback, 500)
    }
  }
  type()
}

setTypewriter('es')

// --- Count-up Animation ---
function animateCounter(el) {
  const target = parseInt(el.dataset.target)
  if (!target) return
  let current = 0
  const duration = 1600
  const startTime = performance.now()

  function update(now) {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    current = Math.floor(eased * target)
    el.textContent = current
    if (progress < 1) requestAnimationFrame(update)
    else el.textContent = target
  }
  requestAnimationFrame(update)
}

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const num = entry.target.querySelector('.stat-number')
        if (num && !num.dataset.counted) {
          num.dataset.counted = 'true'
          animateCounter(num)
        }
        counterObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.3 }
)

document.querySelectorAll('.stat-card').forEach((card) => counterObserver.observe(card))

// --- Scroll Reveal ---
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed')
        revealObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
)

document.querySelectorAll('[data-reveal]').forEach((el) => revealObserver.observe(el))

// --- Navbar scroll effect ---
const header = document.querySelector('.header')

window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 50)
})

// --- Scroll Progress Bar ---
const scrollProgress = document.getElementById('scrollProgress')

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
  if (scrollProgress) {
    scrollProgress.style.width = progress + '%'
  }
})

// --- Scroll Spy (active nav link) ---
const navAnchors = document.querySelectorAll('[data-nav]')
const sections = []

navAnchors.forEach((a) => {
  const href = a.getAttribute('href')
  if (href && href.startsWith('#')) {
    const el = document.querySelector(href)
    if (el) sections.push({ el, link: a })
  }
})

function updateActiveNav() {
  const scrollY = window.scrollY + 120
  let current = navAnchors[0]

  sections.forEach(({ el, link }) => {
    const top = el.offsetTop
    const bottom = top + el.offsetHeight
    if (scrollY >= top && scrollY < bottom) {
      current = link
    }
  })

  navAnchors.forEach((a) => a.classList.toggle('active', a === current))
}

window.addEventListener('scroll', updateActiveNav)
updateActiveNav()

// --- Hero Parallax (huge text) ---
const heroHugeText = document.getElementById('heroHugeText')

window.addEventListener('scroll', () => {
  if (!heroHugeText) return
  const rect = heroHugeText.closest('.hero').getBoundingClientRect()
  const progress = 1 - (rect.top + rect.height) / (window.innerHeight + rect.height)
  const translateY = progress * 40
  const opacity = 1 - progress * 0.4
  heroHugeText.style.transform = `translateY(${5 + translateY}%)`
  heroHugeText.style.opacity = Math.max(0.01, opacity * 0.015)
})
