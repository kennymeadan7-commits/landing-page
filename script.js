const topbar = document.querySelector(".topbar");
const menu = document.querySelector("#menu");
const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelectorAll('.menu a[href^="#"]');
const sections = document.querySelectorAll("main section[id]");

function closeMenu() {
  if (!menu || !menuToggle) return;
  menu.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    const offset = topbar ? topbar.offsetHeight : 0;
    const top = target.getBoundingClientRect().top + window.scrollY - offset - 6;
    window.scrollTo({ top, behavior: "smooth" });
    closeMenu();
  });
});

function updateTopbar() {
  if (!topbar) return;
  topbar.classList.toggle("scrolled", window.scrollY > 8);
}
window.addEventListener("scroll", updateTopbar, { passive: true });
updateTopbar();

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const id = entry.target.id;
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
    });
  });
}, { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 });

sections.forEach((section) => sectionObserver.observe(section));

const revealTargets = document.querySelectorAll(
  ".feature-card, .news-card, .subject, .section-head, .contact-form, .contact-info"
);
revealTargets.forEach((el) => el.classList.add("reveal"));

const revealObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    obs.unobserve(entry.target);
  });
}, { threshold: 0.12 });

revealTargets.forEach((el) => revealObserver.observe(el));

const form = document.querySelector("#contact-form");
const note = document.querySelector("#form-note");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !message || !emailOk) {
      note.textContent = "Veuillez renseigner correctement tous les champs.";
      note.className = "form-note err";
      return;
    }

    note.textContent = "Merci ! Votre demande a bien été envoyée.";
    note.className = "form-note ok";
    form.reset();
  });
}
