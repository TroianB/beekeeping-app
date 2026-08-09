const THEME_KEY = "bk.theme";

function addThemeStyles() {
  if (document.getElementById("bk-theme-styles")) return;

  const style = document.createElement("style");
  style.id = "bk-theme-styles";
  style.textContent = `
    #themeToggle {
      position: fixed;
      top: 0.75rem;
      right: 0.75rem;
      z-index: 9999;
      border: 1px solid rgba(250, 204, 21, 0.55);
      border-radius: 999px;
      background: #facc15;
      color: #000;
      padding: 0.55rem 0.9rem;
      font-size: 0.82rem;
      font-weight: 800;
      box-shadow: 0 10px 24px rgba(0, 0, 0, 0.32);
      cursor: pointer;
    }

    #themeToggle:hover {
      background: #fde047;
    }

    body.light-mode,
    body.light-mode.bg-neutral-950 {
      background: #f8fafc !important;
      color: #111827 !important;
    }

    body.light-mode #root > div {
      color: #111827 !important;
    }

    body.light-mode .bg-neutral-950 {
      background-color: #f8fafc !important;
    }

    body.light-mode .bg-black\/30,
    body.light-mode .bg-black\/40,
    body.light-mode .bg-black\/50,
    body.light-mode .bg-black\/60 {
      background-color: rgba(255, 255, 255, 0.86) !important;
    }

    body.light-mode [class*="border-yellow-500"] {
      border-color: rgba(202, 138, 4, 0.36) !important;
    }

    body.light-mode [class*="text-yellow-"] {
      color: #3f2a00 !important;
    }

    body.light-mode .text-white {
      color: #111827 !important;
    }

    body.light-mode input,
    body.light-mode textarea,
    body.light-mode select {
      background: #ffffff !important;
      color: #111827 !important;
    }

    body.light-mode input::placeholder,
    body.light-mode textarea::placeholder {
      color: #6b7280 !important;
    }

    body.light-mode #root input[placeholder="Search apiaries..."] + div > div > div.grid:nth-child(odd) {
      background: rgba(250, 204, 21, 0.24) !important;
    }

    body.light-mode #root input[placeholder="Search apiaries..."] + div > div > div.grid:nth-child(even) {
      background: rgba(255, 255, 255, 0.94) !important;
    }

    body.light-mode #root input[placeholder="Search apiaries..."] + div > div > div.grid:hover {
      background: rgba(250, 204, 21, 0.38) !important;
    }

    body.light-mode #themeToggle {
      background: #111827;
      color: #ffffff;
      border-color: #111827;
    }

    body.light-mode #themeToggle:hover {
      background: #374151;
    }

    @media (max-width: 640px) {
      #themeToggle {
        top: 0.5rem;
        right: 0.5rem;
        padding: 0.45rem 0.7rem;
        font-size: 0.72rem;
      }
    }
  `;
  document.head.appendChild(style);
}

function applyTheme(theme) {
  const isLight = theme === "light";
  document.body.classList.toggle("light-mode", isLight);
  document.body.classList.toggle("dark-mode", !isLight);

  const button = document.getElementById("themeToggle");
  if (button) {
    button.textContent = isLight ? "Dark Mode" : "Light Mode";
    button.setAttribute("aria-pressed", String(isLight));
  }
}

function addThemeButton() {
  if (document.getElementById("themeToggle")) return;

  const button = document.createElement("button");
  button.id = "themeToggle";
  button.type = "button";
  button.setAttribute("aria-label", "Switch between dark and light mode");
  document.body.prepend(button);

  button.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("light-mode") ? "dark" : "light";
    localStorage.setItem(THEME_KEY, nextTheme);
    applyTheme(nextTheme);
  });
}

addThemeStyles();
addThemeButton();
applyTheme(localStorage.getItem(THEME_KEY) || "dark");
