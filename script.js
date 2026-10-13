
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#nav");
const languageButton = document.querySelector("#language-toggle");

let currentLanguage = "en";

// Mobile navigation
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");

  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
  menuButton.textContent = isOpen ? "✕" : "☰";
});

// Close the menu after selecting a section
nav.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    menuButton.textContent = "☰";
  });
});

// Switch between English and French
languageButton.addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "fr" : "en";

  document.documentElement.lang = currentLanguage;

  document.querySelectorAll("[data-en][data-fr]").forEach((element) => {
    element.innerHTML = element.dataset[currentLanguage];
  });

  languageButton.textContent = currentLanguage === "en" ? "FR" : "EN";
  languageButton.setAttribute(
    "aria-label",
    currentLanguage === "en" ? "Passer en français" : "Switch to English"
  );

  document.title = currentLanguage === "en"
    ? "Zahreddine Boukahel — Personal Portfolio"
    : "Zahreddine Boukahel — Portfolio personnel";
});

// Automatic copyright year
document.querySelector("#year").textContent = new Date().getFullYear();
