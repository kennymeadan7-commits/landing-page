# landing-page

Page d'accueil moderne et minimaliste construite avec HTML5, CSS3 (Flexbox) et JavaScript moderne.

## Contenu

- `index.html` — structure de la page (navigation, Hero, Services, Contact, footer).
- `style.css` — styles, mise en page Flexbox, responsive et **variables CSS** pour les couleurs.
- `script.js` — menu mobile, smooth scroll et validation du formulaire.

## Fonctionnalités

- Barre de navigation **fixe** avec liens ancrés vers les sections.
- Section **Hero** : titre, sous-titre et bouton d'appel à l'action.
- Section **Services** : 3 cartes horizontales sur ordinateur, empilées verticalement sur mobile.
- Section **Contact** : formulaire simple avec validation.
- **Smooth scroll** sur les liens de navigation.
- **Variables CSS** (`:root`) pour modifier facilement les couleurs.

## Personnalisation des couleurs

Modifiez les variables au début de `style.css` :

```css
:root {
    --color-primary: #2563eb;
    --color-primary-dark: #1d4ed8;
    --color-text: #1f2937;
    /* ... */
}
```

## Utilisation

Ouvrez simplement `index.html` dans un navigateur.
