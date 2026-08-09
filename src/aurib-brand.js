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
      min-height: 10.25rem !important;
      position: relative !important;
      padding-right: 0 !important;
    }

    #auribBrand {
      order: 1 !important;
      width: 9.4rem !important;
      min-width: 9.4rem !important;
      height: 9.4rem !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      margin: 0 !important;
      overflow: visible !important;
    }

    #auribBrand img {
      display: block !important;
      width: 100% !important;
      height: 100% !important;
      object-fit: contain !important;
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
        min-height: 8.55rem !important;
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
        min-height: 7.95rem !important;
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

function logoUrl() {
  return new URL("aurib-logo.svg", document.baseURI).href;
}

function setAuriBPageIdentity() {
  document.title = "AuriB";

  let icon = document.querySelector('link[rel="icon"]');
  if (!icon) {
    icon = document.createElement("link");
    icon.rel = "icon";
    document.head.appendChild(icon);
  }

  icon.href = logoUrl();
}

function addAuriBBrand() {
  const header = document.querySelector("#root > .mx-auto > div.mb-4.flex");
  if (!header || document.getElementById("auribBrand")) return true;

  const brand = document.createElement("div");
  brand.id = "auribBrand";

  const logo = document.createElement("img");
  logo.src = logoUrl();
  logo.alt = "AuriB logo";
  logo.loading = "eager";
  logo.decoding = "async";

  brand.appendChild(logo);
  header.prepend(brand);
  return true;
}

addAuriBBrandStyles();
setAuriBPageIdentity();

let attempts = 0;
const timer = window.setInterval(() => {
  attempts += 1;
  const done = addAuriBBrand();
  if (done || attempts >= 20) window.clearInterval(timer);
}, 100);
