/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector("#nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
    // accessibility: indicate menu is expanded
    navToggle.setAttribute("aria-expanded", "true");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
    navToggle.setAttribute("aria-expanded", "false");
  });
}

/* Close menu when a nav link is clicked (mobile) */
const navLinks = document.querySelectorAll("#nav-menu ul li a");
navLinks.forEach((n) =>
  n.addEventListener("click", () => {
    if (navMenu.classList.contains("show-menu")) {
      navMenu.classList.remove("show-menu");
      if (navToggle) navToggle.setAttribute("aria-expanded", "false");
    }
  })
);

const sr = ScrollReveal({
  distance: "90px",
  duration: 3000,
});

sr.reveal(`.hero-text`, { origin: "top", delay: 400 });
sr.reveal(`.hero-image`, { origin: "bottom", delay: 600 });
sr.reveal(`.card`, { origin: "left", delay: 600 });
sr.reveal(`.card--black`, { origin: "rigth", delay: 600 });
sr.reveal(`.card--green`, { origin: "left", delay: 600 });
