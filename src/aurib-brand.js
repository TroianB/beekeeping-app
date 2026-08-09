const AURIB_LOGO_SRC = "data:image/png;base64,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";

function addAuriBBrandStyles() {
  if (document.getElementById("aurib-brand-styles")) return;

  const style = document.createElement("style");
  style.id = "aurib-brand-styles";
  style.textContent = `
    #root > .mx-auto { padding-top: 0.5rem !important; }

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

    #auribBrand img {
      display: block !important;
      width: 100% !important;
      height: auto !important;
      object-fit: contain !important;
      border-radius: 0.78rem !important;
      background: #ffffff !important;
    }

    #auribBrandTextFallback {
      display: none;
      color: #111827;
      font-weight: 900;
      font-size: 1.2rem;
      text-align: center;
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
setTimeout(addAuriBBrand, 100);
setTimeout(addAuriBBrand, 500);
setTimeout(addAuriBBrand, 1000);
window.addEventListener("load", addAuriBBrand);
