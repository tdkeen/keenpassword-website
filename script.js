
/* LANGUAGE DETECTION */

const languagePaths = {
  de: "/de/",
  es: "/es/",
  fr: "/fr/",
  it: "/it/",
  nl: "/nl/",
  pl: "/pl/",
  "pt-BR": "/pt-br/",
  "pt-PT": "/pt-pt/"
};

const currentPath = window.location.pathname;
const urlParams = new URLSearchParams(window.location.search);

/*
 * If the user manually selected English, skip automatic
 * language detection for this visit.
 */
const manualEnglish = urlParams.get("lang") === "en";

if (manualEnglish) {
  /*
   * Remove ?lang=en from the address bar without reloading.
   */
  window.history.replaceState({}, "", currentPath);
}

/*
 * Automatic language detection only runs on the
 * English root page and only when English was not
 * manually selected.
 */
if (
  !manualEnglish &&
  (currentPath === "/" || currentPath === "/index.html")
) {
  const browserLanguages =
    navigator.languages || [navigator.language];

  let detectedLanguage = null;

  for (const language of browserLanguages) {
    const normalizedLanguage = language.toLowerCase();

    /* Portuguese variants */

    if (normalizedLanguage.startsWith("pt-br")) {
      detectedLanguage = "pt-BR";
      break;
    }

    if (normalizedLanguage.startsWith("pt-pt")) {
      detectedLanguage = "pt-PT";
      break;
    }

    /* Other supported languages */

    const languageCode = normalizedLanguage.split("-")[0];

    if (languagePaths[languageCode]) {
      detectedLanguage = languageCode;
      break;
    }
  }

  if (detectedLanguage) {
    window.location.href = languagePaths[detectedLanguage];
  }
}


/* LANGUAGE SELECTOR */

const languageButton = document.querySelector(".language-button");
const languageSelector = document.querySelector(".language-selector");

if (languageButton && languageSelector) {
  languageButton.addEventListener("click", () => {
    const isOpen = languageSelector.classList.toggle("open");
    languageButton.setAttribute("aria-expanded", isOpen);
  });

  document.addEventListener("click", event => {
    if (!languageSelector.contains(event.target)) {
      languageSelector.classList.remove("open");
      languageButton.setAttribute("aria-expanded", "false");
    }
  });
}


/* LIGHTBOX */

const screenshotButtons = document.querySelectorAll(".screenshot-button");
const lightbox = document.getElementById("screenshot-lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxClose = document.querySelector(".lightbox-close");
const lightboxBackdrop = document.querySelector(".lightbox-backdrop");

function openLightbox(image, alt) {
  lightboxImage.src = image;
  lightboxImage.alt = alt;

  lightbox.classList.add("active");
  lightbox.setAttribute("aria-hidden", "false");

  document.body.classList.add("lightbox-open");

  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.classList.remove("active");
  lightbox.setAttribute("aria-hidden", "true");

  document.body.classList.remove("lightbox-open");

  lightboxImage.src = "";
  lightboxImage.alt = "";
}

screenshotButtons.forEach(button => {
  button.addEventListener("click", () => {
    openLightbox(
      button.dataset.image,
      button.dataset.alt
    );
  });
});

if (lightboxClose) {
  lightboxClose.addEventListener("click", closeLightbox);
}

if (lightboxBackdrop) {
  lightboxBackdrop.addEventListener("click", closeLightbox);
}

document.addEventListener("keydown", event => {
  if (
    event.key === "Escape" &&
    lightbox &&
    lightbox.classList.contains("active")
  ) {
    closeLightbox();
  }
});
    



    // /* LANGUAGE DETECTION */

    // const languagePaths = {
    //   de: "./de/",
    //   es: "./es/",
    //   fr: "./fr/",
    //   it: "./it/",
    //   nl: "./nl/",
    //   pl: "./pl/",
    //   "pt-BR": "./pt-br/",
    //   "pt-PT": "./pt-pt/"
    // };

    // const browserLanguages = navigator.languages || [navigator.language];

    // let detectedLanguage = null;

    // for (const language of browserLanguages) {
    //   const normalizedLanguage = language.toLowerCase();

    //   /* Handle Portuguese variants separately */

    //   if (normalizedLanguage.startsWith("pt-br")) {
    //     detectedLanguage = "pt-BR";
    //     break;
    //   }

    //   if (normalizedLanguage.startsWith("pt-pt")) {
    //     detectedLanguage = "pt-PT";
    //     break;
    //   }

    //   /* Handle other supported languages */

    //   const languageCode = normalizedLanguage.split("-")[0];

    //   if (languagePaths[languageCode]) {
    //     detectedLanguage = languageCode;
    //     break;
    //   }
    // }

    // /* Redirect only for supported non-English languages */

    // if (detectedLanguage) {
    //   window.location.href = languagePaths[detectedLanguage];
    // }


    // /* LANGUAGE SELECTOR */

    // const languageButton = document.querySelector(".language-button");
    // const languageSelector = document.querySelector(".language-selector");

    // languageButton.addEventListener("click", () => {
    //   const isOpen = languageSelector.classList.toggle("open");
    //   languageButton.setAttribute("aria-expanded", isOpen);
    // });

    // document.addEventListener("click", event => {
    //   if (!languageSelector.contains(event.target)) {
    //     languageSelector.classList.remove("open");
    //     languageButton.setAttribute("aria-expanded", "false");
    //   }
    // });


    // /* LIGHTBOX */

    // const screenshotButtons = document.querySelectorAll(".screenshot-button");
    // const lightbox = document.getElementById("screenshot-lightbox");
    // const lightboxImage = document.getElementById("lightbox-image");
    // const lightboxClose = document.querySelector(".lightbox-close");
    // const lightboxBackdrop = document.querySelector(".lightbox-backdrop");

    // function openLightbox(image, alt) {
    //   lightboxImage.src = image;
    //   lightboxImage.alt = alt;

    //   lightbox.classList.add("active");
    //   lightbox.setAttribute("aria-hidden", "false");

    //   document.body.classList.add("lightbox-open");

    //   lightboxClose.focus();
    // }

    // function closeLightbox() {
    //   lightbox.classList.remove("active");
    //   lightbox.setAttribute("aria-hidden", "true");

    //   document.body.classList.remove("lightbox-open");

    //   lightboxImage.src = "";
    //   lightboxImage.alt = "";
    // }

    // screenshotButtons.forEach(button => {
    //   button.addEventListener("click", () => {
    //     openLightbox(
    //       button.dataset.image,
    //       button.dataset.alt
    //     );
    //   });
    // });

    // lightboxClose.addEventListener("click", closeLightbox);
    // lightboxBackdrop.addEventListener("click", closeLightbox);

    // document.addEventListener("keydown", event => {
    //   if (event.key === "Escape" && lightbox.classList.contains("active")) {
    //     closeLightbox();
    //   }
    // });