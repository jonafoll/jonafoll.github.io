// --- DICTIONARY FOR TRANSLATIONS ---
const translations = {
    no: {
        aboutTitle: "OM MEG",
        aboutParagraph: "Jeg er en utvikler med sterk lidenskap for å bygge robuste og effektive løsninger. Min kompetanse spenner over både front-end og back-end, og jeg har en spesiell interesse for samspillet mellom avansert teknologi og god brukeropplevelse. Jeg trives med å dykke ned i komplekse utfordringer for å skape funksjonelle og verdiskapende produkter.",
        projectsTitle: "PROSJEKTER",
        project1Title: "MONK System",
        project1Desc: "Et kiosk-system for monitorering og datauthenting utviklet for Oslo Universitetssykehus. Systemet ble laget for å automatisere uthenting, konvertering og håndtering av pasientdata.",
        project2Title: "ISFiT2025 App",
        project2Desc: "En app utviklet for de internasjonale deltakerne på ISFiT-festivalen i Trondheim. Appen viser program, attraksjoner og viktig informasjon for de besøkende.",
        viewOnGithub: "Se på GitHub"
    },
    en: {
        aboutTitle: "ABOUT ME",
        aboutParagraph: "I'm a passionate developer with a focus on creating clean and efficient solutions. I have experience in both front-end and back-end development, with a particular interest in bridging the gap between complex data systems and an intuitive user experience. I enjoy tackling complex problems and turning ideas into reality.",
        projectsTitle: "PROJECTS",
        project1Title: "MONK System",
        project1Desc: "A Monitoring and Data Extraction Kiosk system developed for Oslo University Hospital. The system was made to automate the extraction, conversion, and management of patient data.",
        project2Title: "ISFiT2025 App",
        project2Desc: "An App developed for the international participants of the ISFiT festival in Trondheim, showing the schedule, attractions, and important information for visitors.",
        viewOnGithub: "View on GitHub"
    }
};

// --- GLOBAL ELEMENTS ---
const body = document.body;

// --- THEME TOGGLE LOGIC ---
const themeToggle = document.getElementById('theme-toggle');

const applySavedTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
    }
};

const toggleTheme = () => {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
};

themeToggle.addEventListener('click', toggleTheme);

// --- LANGUAGE TOGGLE LOGIC ---
const langToggle = document.getElementById('lang-toggle');

const setLanguage = (lang) => {
    // Update all elements with a data-translate-key
    document.querySelectorAll('[data-translate-key]').forEach(element => {
        const key = element.dataset.translateKey;
        element.textContent = translations[lang][key];
    });
    // Update body class for flag visibility
    body.classList.toggle('lang-en', lang === 'en');
    // Save preference
    localStorage.setItem('language', lang);
};

const applySavedLanguage = () => {
    const savedLang = localStorage.getItem('language') || 'no'; // Default to Norwegian
    setLanguage(savedLang);
};

const toggleLanguage = () => {
    const currentLang = localStorage.getItem('language') || 'no';
    const newLang = currentLang === 'no' ? 'en' : 'no';
    setLanguage(newLang);
};

langToggle.addEventListener('click', toggleLanguage);


// --- INITIALIZE ON PAGE LOAD ---
document.addEventListener('DOMContentLoaded', () => {
    applySavedTheme();
    applySavedLanguage();
});