
function toggleMenu() {
  const nav = document.querySelector(".nav-bar");
  nav.classList.toggle("active");
}
function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  updateLanguage();
}
function updateLanguage() {
  const lang = localStorage.getItem("lang") || "en";
  document.querySelectorAll("[data-lang]").forEach(el => {
    el.style.display = el.getAttribute("data-lang") === lang ? "block" : "none";
  });
}
function filterLanguages(value) {
  document.querySelectorAll(".lang-list div").forEach(div => {
    div.style.display = div.innerText.toLowerCase().includes(value.toLowerCase()) ? "block" : "none";
  });
  document.querySelector(".lang-list").style.display = "block";
}
window.onload = updateLanguage;
