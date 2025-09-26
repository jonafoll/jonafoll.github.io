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
        viewOnGithub: "Se på GitHub",
        cvLinkText: "CV",
        // Add the path to the Norwegian CV
        cvPath: "./CV-Jonathan-Folland-NO.pdf" 
    },
    en: {
        aboutTitle: "ABOUT ME",
        aboutParagraph: "I'm a developer with a strong passion for building robust and efficient solutions. My expertise spans both front-end and back-end, and I have a special interest in the interplay between advanced technology and great user experience. I enjoy diving into complex challenges to create functional and value-adding products.",
        projectsTitle: "PROJECTS",
        project1Title: "MONK System",
        project1Desc: "A kiosk system for monitoring and data extraction developed for Oslo University Hospital. The system was made to automate the extraction, conversion, and management of patient data.",
        project2Title: "ISFiT2025 App",
        project2Desc: "An app developed for the international participants of the ISFiT festival in Trondheim. The app shows the schedule, attractions, and important information for visitors.",
        viewOnGithub: "View on GitHub",
        cvLinkText: "CV",
        // Add the path to the English CV
        cvPath: "./CV-Jonathan-Folland-EN.pdf" 
    }
};

// --- GLOBAL ELEMENTS ---
const body = document.body;
const cvLink = document.getElementById('cv-link'); // Get the CV link element

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
    // Update all text elements
    document.querySelectorAll('[data-translate-key]').forEach(element => {
        const key = element.dataset.translateKey;
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // *** NEW: Update the CV link's href attribute ***
    if (cvLink) {
        cvLink.href = translations[lang].cvPath;
    }

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