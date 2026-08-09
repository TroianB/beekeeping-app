const AURIB_LOGO_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 520" role="img" aria-label="AuriB logo">
  <defs>
    <linearGradient id="gold" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="#fde047"/>
      <stop offset="0.5" stop-color="#facc15"/>
      <stop offset="1" stop-color="#f59e0b"/>
    </linearGradient>
    <filter id="softShadow" x="-25%" y="-25%" width="150%" height="150%">
      <feDropShadow dx="0" dy="10" stdDeviation="8" flood-color="#000000" flood-opacity="0.16"/>
    </filter>
  </defs>

  <rect width="520" height="520" rx="38" fill="#ffffff"/>

  <g transform="translate(0 4)" filter="url(#softShadow)">
    <path d="M260 55 364 115v120l-104 60-104-60V115Z" fill="none" stroke="url(#gold)" stroke-width="18" stroke-linejoin="round"/>
    <path d="M236 167C181 127 126 137 111 170c-14 32 15 60 68 51 30-5 53-22 75-43" fill="none" stroke="url(#gold)" stroke-width="19" stroke-linecap="round"/>
    <path d="M284 167c55-40 110-30 125 3 14 32-15 60-68 51-30-5-53-22-75-43" fill="none" stroke="url(#gold)" stroke-width="19" stroke-linecap="round"/>
    <ellipse cx="260" cy="205" rx="43" ry="64" fill="#111111"/>
    <path d="M223 189c24-20 52-20 75 0" stroke="#ffffff" stroke-width="11" stroke-linecap="round" fill="none"/>
    <path d="M222 214c25-18 54-18 79 0" stroke="url(#gold)" stroke-width="20" stroke-linecap="round" fill="none"/>
    <path d="M226 252c23-15 47-15 70 0" stroke="url(#gold)" stroke-width="20" stroke-linecap="round" fill="none"/>
    <circle cx="260" cy="137" r="31" fill="#111111"/>
    <path d="M241 114c-8-29-29-40-42-43" stroke="#111111" stroke-width="11" stroke-linecap="round" fill="none"/>
    <path d="M279 114c8-29 29-40 42-43" stroke="#111111" stroke-width="11" stroke-linecap="round" fill="none"/>
    <path d="M260 268l-10 34h20Z" fill="#111111"/>
  </g>

  <g font-family="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-weight="900" letter-spacing="-8">
    <text x="78" y="435" font-size="104" fill="#111111">Auri</text>
    <text x="370" y="435" font-size="104" fill="url(#gold)">B</text>
    <polygon points="344,326 359,335 359,352 344,361 329,352 329,335" fill="url(#gold)"/>
  </g>
</svg>`;

const AURIB_LOGO_SRC = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(AURIB_LOGO_SVG)}`;

function addAuriBBrandStyles() {
  if (document.getElementById("aurib-brand-styles")) return;

  const style = document.createElement("style");
  style.id = "aurib-brand-styles";
  style.textContent = `
    /* Put the whole header layout into the requested positions. */
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
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 auto;
      width: 9.4rem;
      min-width: 9.4rem;
      padding: 0.38rem;
      border: 2px solid rgba(250, 204, 21, 0.95);
      border-radius: 1.1rem;
      background: #ffffff !important;
      box-shadow: 0 10px 28px rgba(0, 0, 0, 0.22);
      margin: 0 !important;
    }

    #auribBrand img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: contain;
      border-radius: 0.78rem;
      background: #ffffff !important;
    }

    body:not(.light-mode) #auribBrand,
    body.dark-mode #auribBrand,
    body.light-mode #auribBrand {
      background: #ffffff !important;
      border-color: rgba(250, 204, 21, 0.95) !important;
    }

    body:not(.light-mode) #auribBrand img,
    body.dark-mode #auribBrand img,
    body.light-mode #auribBrand img {
      background: #ffffff !important;
    }

    /* Dashboard and Apiaries buttons below the logo. */
    #root > .mx-auto > div.mb-4.flex > div:nth-child(2) {
      order: 2 !important;
      display: flex !important;
      flex-wrap: wrap !important;
      align-items: center !important;
      justify-content: flex-start !important;
      gap: 0.5rem !important;
      margin: 0 !important;
    }

    /* Export and Import buttons at the top-right, beside the toggle icon. */
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
      #root > .mx-auto {
        padding-top: 0.45rem !important;
      }

      #root > .mx-auto > div.mb-4.flex {
        min-height: 8.7rem !important;
        gap: 0.5rem !important;
      }

      #auribBrand {
        width: 7.25rem;
        min-width: 7.25rem;
        padding: 0.32rem;
        border-radius: 0.95rem;
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
        min-height: 8.15rem !important;
      }

      #auribBrand {
        width: 6.35rem;
        min-width: 6.35rem;
        padding: 0.28rem;
        border-radius: 0.85rem;
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
  }

  let logo = brand.querySelector("img");
  if (!logo) {
    logo = document.createElement("img");
    brand.appendChild(logo);
  }

  logo.src = AURIB_LOGO_SRC;
  logo.alt = "AuriB logo";
  logo.loading = "eager";
  logo.decoding = "async";
}

addAuriBBrandStyles();
setAuriBPageIdentity();

const auriBObserver = new MutationObserver(() => {
  addAuriBBrand();
  setAuriBPageIdentity();
});
auriBObserver.observe(document.body, { childList: true, subtree: true });
addAuriBBrand();
