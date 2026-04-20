// Christoforos - English translations only
// Greek is the default language stored in HTML as data-i18n attribute text content
// When language switches to English, only these translations are applied

let translationData = null;
let translations = {};

async function loadTranslations() {
  if (translationData) return translationData;

  try {
    const response = await fetch('data/translations.json');
    translationData = await response.json();
    translations = Object.values(translationData).reduce((result, section) => {
      return Object.assign(result, section);
    }, {});
    return translationData;
  } catch (error) {
    console.error('Error loading translations:', error);
    translations = {};
    return null;
  }
}

// ── Menu data cache ──────────────────────────────────────────────────────────
let menuData = null;

// Load menu data from JSON
async function loadMenuData() {
  if (menuData) return menuData; // Return cached data if already loaded
  
  try {
    const response = await fetch('data/menu.json');
    menuData = await response.json();
    return menuData;
  } catch (error) {
    console.error('Error loading menu data:', error);
    return null;
  }
}

// Get translation for a menu item from menu.json
function getMenuTranslation(key) {
  // Parse key like "brunch-1-name" or "brunch-1-desc"
  const parts = key.match(/^([a-z]+)-(\d+)-(name|desc)$/);
  if (!parts) return undefined;
  
  const [, category, itemNum, fieldType] = parts;
  const itemIndex = parseInt(itemNum) - 1; // Convert 1-based to 0-based
  
  if (!menuData || !menuData[category] || !menuData[category][itemIndex]) {
    return undefined;
  }
  
  const item = menuData[category][itemIndex];
  
  // Return appropriate field: nameEn or descriptionEn
  if (fieldType === 'name') {
    return item.nameEn;
  } else if (fieldType === 'desc') {
    return item.descriptionEn;
  }
  
  return undefined;
}

// ── Language management ──────────────────────────────────────────────────────
// Greek is the default, stored in HTML
// English translations are applied only when user switches language

let currentLang = localStorage.getItem("coc-lang") || "el";

// Store the original Greek text when page first loads
const greekOriginals = {};

// Function to populate Greek originals from the HTML
function storeGreekOriginals() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    // Only store if we haven't stored it yet, or if it's been changed back to Greek
    if (!greekOriginals[key] && el.textContent) {
      greekOriginals[key] = el.textContent;
    }
  });
}

function switchToEnglish() {
  currentLang = "en";
  localStorage.setItem("coc-lang", "en");
  document.documentElement.lang = "en";

  // Load translations and menu data before translating
  Promise.all([loadTranslations(), loadMenuData()]).then(() => {
    // Add fade-out effect to all translatable elements
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.classList.add("translating");
    });

    // Change text and fade back in after animation completes
    setTimeout(() => {
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        
        // Try regular translations first
        let translation = translations[key];
        
        // If not found and it looks like a menu item key, get from menu JSON
        if (translation === undefined && key.match(/^([a-z]+)-(\d+)-(name|desc)$/)) {
          translation = getMenuTranslation(key);
        }
        
        if (translation !== undefined) {
          el.textContent = translation;
        }
      });
      
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        el.classList.remove("translating");
      });
      if (typeof window.refreshReviewLanguage === 'function') {
        window.refreshReviewLanguage();
      }
    }, 400);

    // Update active state on lang buttons
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("lang-active", btn.dataset.lang === "en");
    });
  });
}

function switchToGreek() {
  currentLang = "el";
  localStorage.setItem("coc-lang", "el");
  document.documentElement.lang = "el";

  // Add fade-out effect to all translatable elements
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.classList.add("translating");
  });

  // Change text and fade back in after animation completes
  setTimeout(() => {
    // First, make sure we have the Greek originals for all elements
    storeGreekOriginals();

    // Restore original Greek text
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (greekOriginals[key]) {
        el.textContent = greekOriginals[key];
      }
      el.classList.remove("translating");
    });
    if (typeof window.refreshReviewLanguage === 'function') {
      window.refreshReviewLanguage();
    }

    // Update active state on lang buttons when switching back to Greek
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("lang-active", btn.dataset.lang === "el");
    });
  }, 400);

}

function initI18n() {
  // First, always store the original Greek text from HTML
  storeGreekOriginals();

  // Then apply the appropriate language
  if (currentLang === "en") {
    // Load translations and menu data asynchronously before applying English translations
    Promise.all([loadTranslations(), loadMenuData()]).then(() => {
      // Apply English immediately without animation on page load
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        
        let translation = translations[key];
        if (translation === undefined && key.match(/^([a-z]+)-(\d+)-(name|desc)$/)) {
          translation = getMenuTranslation(key);
        }
        
        if (translation !== undefined) {
          el.textContent = translation;
        }
      });
      // Update button states
      document.querySelectorAll(".lang-btn").forEach((btn) => {
        btn.classList.toggle("lang-active", btn.dataset.lang === "en");
      });
    });
  } else {
    // Greek is already there, just update button states
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("lang-active", btn.dataset.lang === "el");
    });
  }
}

// Setup language button event listeners
// This is called separately from initI18n so it can be called after navbar is injected
function setupLangButtonListeners() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      if (lang === "en") {
        switchToEnglish();
      } else {
        switchToGreek();
      }
    });
  });
}

// Run immediately if DOM is already loaded (script is at bottom of page)
// Otherwise wait for DOMContentLoaded event
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initI18n);
} else {
  initI18n();
}
