const AURIB_LOGO_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 620" role="img" aria-label="AuriB logo">
  <defs>
    <linearGradient id="auribGold" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#ffe066"/>
      <stop offset="0.45" stop-color="#facc15"/>
      <stop offset="1" stop-color="#f59e0b"/>
    </linearGradient>
    <filter id="auribGlow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#facc15" flood-opacity="0.55"/>
      <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#000000" flood-opacity="0.45"/>
    </filter>
  </defs>

  <rect width="620" height="620" fill="transparent"/>

  <g transform="translate(0 0)" filter="url(#auribGlow)">
    <path d="M310 42 466 132v182L310 404 154 314V132Z" fill="none" stroke="url(#auribGold)" stroke-width="25" stroke-linejoin="round"/>
    <path d="M272 212C193 152 115 168 93 216c-21 47 22 87 98 73 43-8 77-32 109-65" fill="none" stroke="url(#auribGold)" stroke-width="28" stroke-linecap="round"/>
    <path d="M348 212c79-60 157-44 179 4 21 47-22 87-98 73-43-8-77-32-109-65" fill="none" stroke="url(#auribGold)" stroke-width="28" stroke-linecap="round"/>

    <circle cx="310" cy="168" r="42" fill="#050505"/>
    <path d="M286 136c-10-40-40-55-58-59" stroke="#050505" stroke-width="16" stroke-linecap="round" fill="none"/>
    <path d="M334 136c10-40 40-55 58-59" stroke="#050505" stroke-width="16" stroke-linecap="round" fill="none"/>

    <ellipse cx="310" cy="270" rx="62" ry="92" fill="#050505"/>
    <path d="M252 238c38-29 78-29 116 0" stroke="url(#auribGold)" stroke-width="32" stroke-linecap="round" fill="none"/>
    <path d="M255 306c35-25 75-25 110 0" stroke="url(#auribGold)" stroke-width="32" stroke-linecap="round" fill="none"/>
    <path d="M310 358l-15 56h30Z" fill="#050505"/>
  </g>

  <g font-family="Inter, Arial, Helvetica, sans-serif" font-weight="900" letter-spacing="-8">
    <text x="48" y="540" font-size="132" fill="#050505">Auri</text>
    <text x="438" y="540" font-size="132" fill="url(#auribGold)">B</text>
    <polygon points="404,420 423,431 423,453 404,464 385,453 385,431" fill="url(#auribGold)"/>
  </g>
</svg>`;

const AURIB_ICON_SRC = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(AURIB_LOGO_SVG)}`;

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
      min-height: 10rem !important;
      position: relative !important;
      padding-right: 0 !important;
    }

    #auribBrand {
      order: 1 !important;
      width: 9.6rem !important;
      min-width: 9.6rem !important;
      height: 9.6rem !important;
      margin: 0 !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      overflow: visible !important;
    }

    #auribBrand svg {
      display: block !important;
      width: 100% !important;
      height: 100% !important;
      overflow: visible !important;
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
      #root > .mx-auto > div.mb-4.flex {
        min-height: 8.5rem !important;
        gap: 0.5rem !important;
      }

      #auribBrand {
        width: 7.4rem !important;
        min-width: 7.4rem !important;
        height: 7.4rem !important;
      }

      #root > .mx-auto > div.mb-4.flex > div:last-child {
        top: 0.5rem !important;
        right: 3.1rem !important;
        gap: 0.3rem !important;
      }

      #root > .mx-auto > div.mb-4.flex > div:last-child button,
      #bkImportCsvButton {
        padding: 0.45rem 0.55rem !important;
        font-size: 0.72rem !important;
      }

      #themeToggle {
        top: 0.5rem !important;
        right: 0.5rem !important;
      }
    }

    @media (max-width: 430px) {
      #root > .mx-auto > div.mb-4.flex {
        min-height: 7.9rem !important;
      }

      #auribBrand {
        width: 6.5rem !important;
        min-width: 6.5rem !important;
        height: 6.5rem !important;
      }

      #root > .mx-auto > div.mb-4.flex > div:last-child button,
      #bkImportCsvButton {
        padding: 0.42rem 0.48rem !important;
        font-size: 0.68rem !important;
      }
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
  icon.href = AURIB_ICON_SRC;
}

function addAuriBBrand() {
  const header = document.querySelector("#root > .mx-auto > div.mb-4.flex");
  if (!header) return;

  let brand = document.getElementById("auribBrand");
  if (!brand) {
    brand = document.createElement("div");
    brand.id = "auribBrand";
    header.prepend(brand);
  }

  brand.innerHTML = AURIB_LOGO_SVG;
}

addAuriBBrandStyles();
setAuriBPageIdentity();

const auriBObserver = new MutationObserver(() => {
  addAuriBBrand();
  setAuriBPageIdentity();
});
auriBObserver.observe(document.body, { childList: true, subtree: true });

window.setTimeout(addAuriBBrand, 0);
window.setTimeout(addAuriBBrand, 250);
window.setTimeout(addAuriBBrand, 800);
