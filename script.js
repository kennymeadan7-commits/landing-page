const navLinks = document.querySelectorAll('.menu a[href^="#"]');
const topbar = document.querySelector(".topbar");
const observedSections = document.querySelectorAll("main section[id]");

function smoothScrollTo(event) {
  const targetId = event.currentTarget.getAttribute("href");
  if (!targetId || !targetId.startsWith("#")) return;

  const target = document.querySelector(targetId);
  if (!target) return;

  event.preventDefault();

  const topbarOffset = topbar ? topbar.offsetHeight : 0;
  const targetPosition = target.getBoundingClientRect().top + window.scrollY - topbarOffset - 8;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth"
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", smoothScrollTo);
});

function updateTopbarState() {
  if (!topbar) return;
  topbar.classList.toggle("scrolled", window.scrollY > 8);
}

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const currentId = entry.target.id;
    navLinks.forEach((link) => {
      const isCurrent = link.getAttribute("href") === `#${currentId}`;
      link.classList.toggle("active", isCurrent);
    });
  });
}, {
  rootMargin: "-35% 0px -55% 0px",
  threshold: 0.01
});

observedSections.forEach((section) => {
  sectionObserver.observe(section);
});

window.addEventListener("scroll", updateTopbarState, { passive: true });
updateTopbarState();
