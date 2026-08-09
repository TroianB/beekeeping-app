const AURIB_LOGO_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 520" role="img" aria-label="AuriB logo">
  <defs>
    <linearGradient id="auribGold" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="#fde047"/>
      <stop offset="0.52" stop-color="#facc15"/>
      <stop offset="1" stop-color="#f59e0b"/>
    </linearGradient>
    <filter id="auribShadow" x="-25%" y="-25%" width="150%" height="150%">
      <feDropShadow dx="0" dy="9" stdDeviation="8" flood-color="#000000" flood-opacity="0.18"/>
    </filter>
  </defs>

  <rect x="0" y="0" width="520" height="520" rx="42" fill="#ffffff"/>

  <g transform="translate(0 8)" filter="url(#auribShadow)">
    <path d="M260 54 366 116v124l-106 61-106-61V116Z" fill="none" stroke="url(#auribGold)" stroke-width="18" stroke-linejoin="round"/>
    <path d="M236 170C181 130 126 139 111 171c-14 32 15 59 68 51 30-5 53-22 75-43" fill="none" stroke="url(#auribGold)" stroke-width="19" stroke-linecap="round"/>
    <path d="M284 170c55-40 110-31 125 1 14 32-15 59-68 51-30-5-53-22-75-43" fill="none" stroke="url(#auribGold)" stroke-width="19" stroke-linecap="round"/>

    <ellipse cx="260" cy="207" rx="44" ry="66" fill="#111111"/>
    <path d="M223 190c24-20 52-20 75 0" stroke="#ffffff" stroke-width="11" stroke-linecap="round" fill="none"/>
    <path d="M222 216c25-18 54-18 79 0" stroke="url(#auribGold)" stroke-width="20" stroke-linecap="round" fill="none"/>
    <path d="M226 255c23-15 47-15 70 0" stroke="url(#auribGold)" stroke-width="20" stroke-linecap="round" fill="none"/>
    <circle cx="260" cy="138" r="31" fill="#111111"/>
    <path d="M241 116c-8-29-29-40-42-43" stroke="#111111" stroke-width="11" stroke-linecap="round" fill="none"/>
    <path d="M279 116c8-29 29-40 42-43" stroke="#111111" stroke-width="11" stroke-linecap="round" fill="none"/>
    <path d="M260 271l-10 34h20Z" fill="#111111"/>
  </g>

  <g font-family="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-weight="900" letter-spacing="-8">
    <text x="78" y="435" font-size="104" fill="#111111">Auri</text>
    <text x="370" y="435" font-size="104" fill="url(#auribGold)">B</text>
    <polygon points="344,326 359,335 359,352 344,361 329,352 329,335" fill="url(#auribGold)"/>
  </g>
</svg>`;

const AURIB_LOGO_SRC = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(AURIB_LOGO_SVG)}`;

function addAuriBBrandStyles() {
  if (document.getElementById("aurib-brand-styles")) return;

  const style = document.createElement("style");
  style.id = "aurib-brand-styles";
  style.textContent = `
    #root > .mx-auto {
      padding-top: 0.5rem !important;
    }

    #root > .mx-auto > div.mb-4.flex {
      display: flex !important;
      flex-direction: column !important;
      align-items: flex-start !important;
      justify-content: flex-start !important;
      gap: 0.65rem !important;
      margin-bottom: 1rem !important;
      min-height: 10.4rem !important;
      position: relative !important;
      padding-right: 0 !important;
    }

    #auribBrand {
      order: 1 !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      width: 9.4rem !important;
      min-width: 9.4rem !important;
      min-height: 9.4rem !important;
      padding: 0.35rem !important;
      border: 2px solid rgba(250, 204, 21, 0.95) !important;
      border-radius: 1.1rem !important;
      background: #ffffff !important;
      box-shadow: 0 10px 28px rgba(0, 0, 0, 0.22) !important;
      margin: 0 !important;
      overflow: hidden !important;
    }

    #auribBrand svg {
      display: block !important;
      width: 100% !important;
      height: auto !important;
      border-radius: 0.78rem !important;
      background: #ffffff !important;
    }

    body:not(.light-mode) #auribBrand,
    body.dark-mode #auribBrand,
    body.light-mode #auribBrand,
    body:not(.light-mode) #auribBrand svg,
    body.dark-mode #auribBrand svg,
    body.light-mode #auribBrand svg {
      background: #ffffff !important;
    }

    #root > .mx-auto > div.mb-4.flex > div:nth-child(2) {
      order: 2 !important;
      display: flex !important;
      flex-wrap: wrap !important;
      align-items: center !important;
      justify-content: flex-start !important;
      gap: 0.5rem !important;
      margin: 0 !important;
    }

    #root > .mx-auto > div.mb-4.flex > div:last-child {
      order: 3 !important;
      position: fixed !important;
      top: 0.75rem !important;
      right: 3.65rem !important;
      z-index: 9998 !important;
      display: flex !important;
      align-items: center !important;
      justify-content: flex-end !important;
      flex-wrap: nowrap !important;
      gap: 0.45rem !important;
      margin: 0 !important;
    }

    #root > .mx-auto > div.mb-4.flex > div:last-child button,
    #bkImportCsvButton {
      white-space: nowrap !important;
      position: relative !important;
      z-index: 9998 !important;
    }

    #themeToggle {
      top: 0.75rem !important;
      right: 0.75rem !important;
      z-index: 9999 !important;
    }

    @media (max-width: 760px) {
      #root > .mx-auto { padding-top: 0.45rem !important; }
      #root > .mx-auto > div.mb-4.flex { min-height: 8.7rem !important; gap: 0.5rem !important; }
      #auribBrand { width: 7.25rem !important; min-width: 7.25rem !important; min-height: 7.25rem !important; padding: 0.3rem !important; border-radius: 0.95rem !important; }
      #root > .mx-auto > div.mb-4.flex > div:last-child { top: 0.5rem !important; right: 3.1rem !important; gap: 0.3rem !important; }
      #root > .mx-auto > div.mb-4.flex > div:last-child button, #bkImportCsvButton { padding: 0.45rem 0.55rem !important; font-size: 0.72rem !important; }
      #themeToggle { top: 0.5rem !important; right: 0.5rem !important; }
    }

    @media (max-width: 430px) {
      #root > .mx-auto > div.mb-4.flex { min-height: 8.15rem !important; }
      #auribBrand { width: 6.35rem !important; min-width: 6.35rem !important; min-height: 6.35rem !important; padding: 0.26rem !important; border-radius: 0.85rem !important; }
      #root > .mx-auto > div.mb-4.flex > div:last-child button, #bkImportCsvButton { padding: 0.42rem 0.48rem !important; font-size: 0.68rem !important; }
    }
  `;
  document.head.appendChild(style);
}

function setAuriBPageIdentity() {
  document.title = "AuriB";

  let icon = document.querySelector('link[rel="icon"]');
  if (!icon) {
    icon = document.createElement("link");
    icon.rel = "icon";
    document.head.appendChild(icon);
  }
  icon.href = AURIB_LOGO_SRC;
}

function addAuriBBrand() {
  const header = document.querySelector("#root > .mx-auto > div.mb-4.flex");
  if (!header) return;

  let brand = document.getElementById("auribBrand");
  if (!brand) {
    brand = document.createElement("div");
    brand.id = "auribBrand";
    header.prepend(brand);
  } else if (brand.parentElement !== header) {
    header.prepend(brand);
  }

  if (!brand.querySelector("svg")) {
    brand.innerHTML = AURIB_LOGO_SVG;
  }
}

function renderAuriBBrand() {
  addAuriBBrandStyles();
  setAuriBPageIdentity();
  addAuriBBrand();
}

renderAuriBBrand();

const auriBObserver = new MutationObserver(renderAuriBBrand);
auriBObserver.observe(document.body, { childList: true, subtree: true });

[50, 150, 400, 900, 1600].forEach((delay) => window.setTimeout(renderAuriBBrand, delay));
