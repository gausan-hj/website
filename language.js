
const languages = {
  en: {
    home: "Home",
    projects: "Projects",
    about: "About",
    contact: "Contact",
    welcome: "Welcome to YC Lee Architect",
    description: "We bring architectural dreams to life with precision and creativity.",
    project-description: "We primarily serve: Perak, Genting, Kedah, Johor, Kuala Lumpur, and also handle overseas projects.",
    about-title: "About Us",
    about-description: "YC Lee Architect is dedicated to delivering innovative and sustainable architectural solutions.",
  },
};

let currentLang = localStorage.getItem("lang") || "en";
applyLanguage(currentLang);

function applyLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (languages[lang] && languages[lang][key]) {
      el.textContent = languages[lang][key];
    }
  });
  localStorage.setItem("lang", lang);
}
