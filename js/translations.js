// Cup of Cake - English translations only
// Greek is the default language stored in HTML as data-i18n attribute text content
// When language switches to English, only these translations are applied

const translations = {
  // Navigation
  "nav-home": "Home",
  "nav-menu": "Menu",
  "nav-order": "Build Your Cake",
  "nav-about": "About Us",

  // Index - Hero / Carousel
  "slide1-title": "Fresh Coffee",
  "slide1-desc": "Aromatic coffee from selected beans",
  "slide2-title": "Chocolate Waffles",
  "slide2-desc": "Crispy waffles with hot chocolate and vanilla ice cream",
  "slide3-title": "Seasonal Drinks",
  "slide3-desc": "Hot and cold beverages for every season",
  "slide4-title": "Sweets & Pastry",
  "slide4-desc": "Homemade sweets made with love",
  "slide5-title": "Brunch Delights",
  "slide5-desc": "The perfect brunch to start your day",
  "carousel-btn-order": "Order Now",

  // Index - Intro section
  "intro-title": "Welcome to Cup of Cake",
  "intro-text": "At Cup of Cake we believe every moment deserves a sweet reward. From the morning coffee to the evening dessert, we offer you the best taste experience in Athens.",

  // Index - Featured section
  "featured-title": "Our Favourites",
  "reviews-title": "What customers say",
  "reviews-desc": "Recent high-rated reviews straight from Google Maps, showing why our guests keep coming back.",
  "feat1-name": "Freddo Espresso",
  "feat1-desc": "Iced coffee for summer days",
  "feat2-name": "Profiterole Pancakes",
  "feat2-desc": "3 pieces. With dark chocolate profiterole sauce, whipped cream & vanilla",
  "feat3-name": "Red Velvet",
  "feat3-desc": "With cream cheese buttercream & homemade strawberry jam",
  "feat4-name": "Banoffee Waffles",
  "feat4-desc": "With Bavarian cream, caramel spread, banana, caramel syrup & crushed butter biscuit",
  "view-menu-btn": "View our full menu",

  // Footer
  "footer-hours-title": "Opening Hours",
  "footer-hours-weekdays": "Monday - Friday: 06:00-21:00",
  "footer-hours-saturday": "Saturday: 07:00-21:00",
  "footer-hours-sunday": "Sunday: 08:00-18:00",
  "footer-address": "Morigianni 83 & Irakleous, Peristeri 12133, Athens",
  "footer-phone": "Tel.: +30 210 574 7222",
  "footer-copy": "© 2026 Cup of Cake. All rights reserved.",
  "footer-map-title": "Find us here",

  // Menu page
  "menu-page-title": "Our Menu",
  "menu-page-subtitle": "Discover our flavours",

  // Cake order page
  "cake-order-title": "Build Your Cake",
  "cake-order-hero-caption": "Build your own cake",
  "cake-order-subtitle": "Choose shape, flavor, decorations and how many people it serves.",
  "cake-order-intro": "Design a custom cake and we’ll email you a confirmation when it is received.",
  "cake-order-intro-text": "Once you complete the form, we will receive your request and notify you soon.",
  "form-shape-label": "Cake Shape",
  "form-shape-placeholder": "Select a shape",
  "shape-round": "Round",
  "shape-square": "Square",
  "shape-heart": "Heart",
  "shape-rectangle": "Rectangle",
  "shape-number": "Number",
  "form-flavor-label": "Flavor",
  "form-flavor-placeholder": "Choose a flavor",
  "form-flavor-option-vanilla": "Vanilla",
  "form-flavor-option-chocolate": "Chocolate",
  "form-flavor-option-red-velvet": "Red Velvet",
  "form-flavor-option-coffee": "Coffee",
  "form-flavor-option-lemon": "Lemon",
  "form-flavor-option-caramel": "Caramel",
  "form-flavor-option-raspberry": "Raspberry",
  "form-flavor-option-mixed": "Mixed",
  "form-serves-label": "Serves",
  "form-serves-placeholder": "Choose how many people",
  "form-overlay-label": "Overlay",
  "form-overlay-placeholder": "Choose an overlay",
  "overlay-chocolate": "Chocolate",
  "overlay-caramel": "Caramel",
  "overlay-berry": "Berry",
  "overlay-vanilla": "Vanilla",
  "photo-print-label": "Photo print (13 €)",
  "photo-print-help": "When selected, no other overlay can be added.",
  "serves-8-10": "8-10 people",
  "serves-10-12": "10-12 people",
  "serves-12-14": "12-14 people",
  "serves-14-16": "14-16 people",
  "serves-16-20": "16-20 people",
  "form-decoration-label": "Decoration Options",
  "decoration-chocolate-drip": "Chocolate drip",
  "decoration-fresh-fruit": "Fresh fruit",
  "decoration-edible-gold": "Edible gold",
  "decoration-personalized-message": "Personalized message",
  "decoration-sprinkles": "Sprinkles",
  "form-email-label": "Email",
  "form-phone-label": "Phone Number",
  "form-note-label": "Additional Notes",
  "form-kilos-label": "Estimated weight",
  "form-kilos-value": "Estimated kilos: {kilos}",
  "form-submit": "Send Request",
  "form-success": "Thank you! Your cake request was sent.",
  "form-error": "Please check your details and try again.",
  "form-invalid-email": "Please enter a valid email address.",
  "form-invalid-phone": "Please enter a valid phone number.",
  "form-required": "Please fill in all required fields.",
  "form-info-title": "How it works",
  "form-info-text": "Choose the cake shape, flavor and decorations. We will calculate the estimated kilos based on servings and send an order summary to your email.",
  "form-info-bullet1-title": "Clear guidance",
  "form-info-bullet1-text": "We help you choose the right size for your celebration.",
  "form-info-bullet2-title": "Email confirmation",
  "form-info-bullet2-text": "Your request is sent securely via Formspree to our cake team.",
  "form-info-bullet3-title": "Phone required",
  "form-info-bullet3-text": "Used only to confirm pickup or delivery details.",

  // Menu categories
  "cat-brunch": "Brunch",
  "cat-waffles": "Waffles",
  "cat-pancakes": "Sweet Pancakes",
  "cat-sweets": "Sweets",
  "cat-sandwiches": "Sandwiches",
  "cat-sfolies": "Pastries",
  "cat-snacks": "Snacks",
  "cat-coffees": "Coffees",
  "cat-drinks": "Drinks",
  "cat-soft": "Soft Drinks",

  // NOTE: Menu item translations (names & descriptions) are now loaded from data/menu.json
  // This reduces the size of this file and provides a single source of truth for menu content

  // About page
  "about-page-title": "About Us",
  "about-story-title": "Our Story",
  "about-story-text": "Cup of Cake was born out of a love for great coffee and handmade sweets. We opened this year with a small shop in Peristeri, and our goal is to become a favorite destination for anyone looking for a break from the daily routine and a sweet indulgence. With care and passion for flavor, we offer aromatic coffee, freshly made desserts, and delicious brunch options every day.",
  "about-mission-title": "Our Mission",
  "about-mission-text": "Our goal is to offer a unique experience with every visit. We use only fresh, high-quality ingredients and love experimenting with new flavors, like our incredibly delicious profiterole pancakes. We want to become part of your everyday life, offering not just tasty products but also a space where you can relax, work, or meet up with friends.",
  "about-atmosphere-title": "Our Atmosphere",
  "about-atmosphere-text": "Our space is designed for you to enjoy a quick break from your daily routine. Comfortable seating, beautiful decor, and relaxing music are here to welcome you every day—whether you're stopping by for your morning coffee or an afternoon dessert with friends.",
  "about-values-title": "Our Values",
  "about-val1": "Handmade sweets made with love",
  "about-val2": "Quality in every detail",
  "about-val3": "Warm, friendly service",
  "about-val4": "Fresh & pure ingredients",

  // Document titles
  "document-title-index": "Christoforos",
  "document-title-menu": "Our Sweets - Christoforos",
  "document-title-cake": "Οrder Your Cake - Christoforos",
  "document-title-about": "About Us - Christoforos",
  "document-title-404": "404 - Christoforos",

  // 404 page
  "404-title": "Oops! Page not found",
  "404-desc": "It looks like you've lost your way. This page doesn't exist.",
  "404-btn": "Back to Home",

};

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

  // Load menu data before translating
  loadMenuData().then(() => {
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
  }, 400);

}

function initI18n() {
  // First, always store the original Greek text from HTML
  storeGreekOriginals();

  // Then apply the appropriate language
  if (currentLang === "en") {
    // Load menu data asynchronously before applying English translations
    loadMenuData().then(() => {
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
