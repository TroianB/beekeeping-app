const AURIB_LOGO_SRC = "data:image/png;base64,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";

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
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 auto;
      width: 9.4rem;
      min-width: 9.4rem;
      padding: 0.35rem;
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
    body.light-mode #auribBrand,
    body:not(.light-mode) #auribBrand img,
    body.dark-mode #auribBrand img,
    body.light-mode #auribBrand img {
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
        padding: 0.3rem;
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
        padding: 0.26rem;
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
