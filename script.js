"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".navbar__links a");
    const contactForm = document.getElementById("contactForm");
    const formFeedback = document.getElementById("formFeedback");
    const yearSpan = document.getElementById("year");

    // Année dynamique dans le pied de page
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Menu mobile : ouverture / fermeture
    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            const isOpen = navMenu.classList.toggle("is-open");
            navToggle.setAttribute("aria-expanded", String(isOpen));
        });

        // Ferme le menu après un clic sur un lien (mobile)
        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("is-open");
                navToggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    /*
     * Smooth scroll géré aussi en JS pour compenser la hauteur de la barre fixe
     * (en complément de `scroll-behavior: smooth` défini en CSS).
     */
    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href");
            if (!targetId || !targetId.startsWith("#")) return;

            const target = document.querySelector(targetId);
            if (!target) return;

            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
            history.replaceState(null, "", targetId);
        });
    });

    // Validation simple du formulaire de contact
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const name = contactForm.name.value.trim();
            const email = contactForm.email.value.trim();
            const message = contactForm.message.value.trim();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!name || !email || !message) {
                showFeedback("Merci de remplir tous les champs.", true);
                return;
            }

            if (!emailPattern.test(email)) {
                showFeedback("Merci de saisir une adresse email valide.", true);
                return;
            }

            // Démonstration : aucun envoi réel n'est effectué.
            showFeedback("Merci ! Votre message a bien été envoyé.", false);
            contactForm.reset();
        });
    }

    function showFeedback(text, isError) {
        if (!formFeedback) return;
        formFeedback.textContent = text;
        formFeedback.style.color = isError
            ? "#dc2626"
            : "var(--color-primary-dark)";
    }
});
