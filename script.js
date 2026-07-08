const form = document.querySelector("#result-form");
const panel = document.querySelector("#result-panel");
const tableInput = document.querySelector("#numero");

function showMissing() {
  panel.className = "result result-empty";
  panel.innerHTML = `
    <p class="result-icon" aria-hidden="true">!</p>
    <p class="result-title">Résultat non trouvé</p>
    <p class="result-text">Vérifiez le numéro de table puis réessayez.</p>
  `;
}

function showFound(tableNumber) {
  panel.className = "result result-found";
  panel.innerHTML = `
    <p class="result-icon" aria-hidden="true">&#10003;</p>
    <p class="result-title">Résultat disponible</p>
    <p class="result-text">Numéro de table : <strong>${tableNumber}</strong></p>
  `;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = tableInput.value.trim();

  if (!value) {
    showMissing();
    return;
  }

  // Démonstration visuelle: tout numéro commençant par "54" est considéré trouvé.
  if (value.startsWith("54")) {
    showFound(value);
    return;
  }

  showMissing();
});

form.addEventListener("reset", () => {
  window.setTimeout(() => {
    panel.className = "result result-empty";
    panel.innerHTML = `
      <p class="result-icon" aria-hidden="true">!</p>
      <p class="result-title">Aucun résultat</p>
      <p class="result-text">Saisissez un numéro de table puis lancez la recherche.</p>
    `;
  }, 0);
});
