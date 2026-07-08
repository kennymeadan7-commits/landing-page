const navLinks = document.querySelectorAll('.nav-links a, .btn[href^="#"]');

function smoothScrollTo(event) {
  const targetId = event.currentTarget.getAttribute("href");
  if (!targetId || !targetId.startsWith("#")) return;

  const target = document.querySelector(targetId);
  if (!target) return;

  event.preventDefault();

  const header = document.querySelector(".site-header");
  const headerOffset = header ? header.offsetHeight : 0;
  const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset + 1;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth"
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", smoothScrollTo);
});
