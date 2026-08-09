const AURIB_LOGO_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 210" role="img" aria-label="AuriB logo">
  <defs>
    <linearGradient id="gold" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="#fde047"/>
      <stop offset="0.55" stop-color="#facc15"/>
      <stop offset="1" stop-color="#f59e0b"/>
    </linearGradient>
    <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#000000" flood-opacity="0.22"/>
    </filter>
  </defs>

  <g filter="url(#softShadow)">
    <path d="M156 20 234 65v90l-78 45-78-45V65Z" fill="none" stroke="url(#gold)" stroke-width="16" stroke-linejoin="round"/>
    <path d="M138 98C98 68 58 76 47 101c-10 24 11 45 50 39 22-4 39-17 55-32" fill="none" stroke="url(#gold)" stroke-width="15" stroke-linecap="round"/>
    <path d="M174 98c40-30 80-22 91 3 10 24-11 45-50 39-22-4-39-17-55-32" fill="none" stroke="url(#gold)" stroke-width="15" stroke-linecap="round"/>
    <ellipse cx="156" cy="121" rx="33" ry="48" fill="#111111"/>
    <path d="M127 109c18-15 40-15 58 0" stroke="#ffffff" stroke-width="9" stroke-linecap="round" fill="none" opacity="0.95"/>
    <path d="M126 128c19-13 41-13 60 0" stroke="url(#gold)" stroke-width="16" stroke-linecap="round" fill="none"/>
    <path d="M130 156c17-11 35-11 52 0" stroke="url(#gold)" stroke-width="16" stroke-linecap="round" fill="none"/>
    <circle cx="156" cy="70" r="24" fill="#111111"/>
    <path d="M142 52c-6-22-22-30-32-32" stroke="#111111" stroke-width="9" stroke-linecap="round" fill="none"/>
    <path d="M170 52c6-22 22-30 32-32" stroke="#111111" stroke-width="9" stroke-linecap="round" fill="none"/>
    <path d="M156 170l-8 25h16Z" fill="#111111"/>
  </g>

  <g font-family="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-weight="900" letter-spacing="-8">
    <text x="285" y="137" font-size="92" fill="#111111">Auri</text>
    <text x="456" y="137" font-size="92" fill="url(#gold)">B</text>
    <polygon points="428,48 440,55 440,69 428,76 416,69 416,55" fill="url(#gold)"/>
  </g>
</svg>`;

const AURIB_LOGO_SRC = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(AURIB_LOGO_SVG)}`;

function addAuriBBrandStyles() {
  if (document.getElementById("aurib-brand-styles")) return;

  const style = document.createElement("style");
  style.id = "aurib-brand-styles";
  style.textContent = `
    #auribBrand {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex: 0 0 auto;
      min-width: 8.2rem;
      max-width: 11.5rem;
    }

    #auribBrand img {
      display: block;
      width: 10.6rem;
      max-width: 100%;
      height: auto;
      object-fit: contain;
      filter: drop-shadow(0 8px 18px rgba(0, 0, 0, 0.25));
    }

    body.light-mode #auribBrand img {
      filter: drop-shadow(0 6px 14px rgba(0, 0, 0, 0.12));
    }

    @media (max-width: 760px) {
      #auribBrand {
        min-width: 6.7rem;
        max-width: 8.2rem;
      }

      #auribBrand img {
        width: 7.8rem;
      }
    }

    @media (max-width: 430px) {
      #auribBrand {
        min-width: 5.8rem;
        max-width: 7rem;
      }

      #auribBrand img {
        width: 6.6rem;
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
  if (!header || document.getElementById("auribBrand")) return;

  const brand = document.createElement("div");
  brand.id = "auribBrand";

  const logo = document.createElement("img");
  logo.src = AURIB_LOGO_SRC;
  logo.alt = "AuriB logo";
  logo.loading = "eager";
  logo.decoding = "async";

  brand.appendChild(logo);
  header.prepend(brand);
}

addAuriBBrandStyles();
setAuriBPageIdentity();

const auriBObserver = new MutationObserver(() => {
  addAuriBBrand();
  setAuriBPageIdentity();
});
auriBObserver.observe(document.body, { childList: true, subtree: true });
addAuriBBrand();
