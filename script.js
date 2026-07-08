const navLinks = document.querySelectorAll('.menu a[href^="#"]');

function smoothScrollTo(event) {
  const targetId = event.currentTarget.getAttribute("href");
  if (!targetId || !targetId.startsWith("#")) return;

  const target = document.querySelector(targetId);
  if (!target) return;

  event.preventDefault();

  const topbar = document.querySelector(".topbar");
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
