// Cup of Cake - English translations only
// Greek is the default language stored in HTML as data-i18n attribute text content
// When language switches to English, only these translations are applied

const translations = {
  // Navigation
  "nav-home": "Home",
  "nav-menu": "Menu",
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

  // Brunch items
  "brunch-1-name": "Turkey Omelette",
  "brunch-1-desc": "With 3 eggs, turkey, grated gouda & cherry tomatoes. Served with 1 slice of toasted bread & salad (iceberg, radicchio, lola lettuce, vinaigrette, parmesan & cherry tomatoes)",
  "brunch-2-name": "Classic Pancakes (Savory)",
  "brunch-2-desc": "3 pieces. With cream cheese, turkey, gouda, cherry tomatoes & lettuce. Served with salad",
  "brunch-3-name": "Special Pancakes (Savory)",
  "brunch-3-desc": "3 pieces. With cream cheese, chicken, gouda, cherry tomatoes, bacon & fried egg. Served with salad",
  "brunch-4-name": "Croque Monsieur",
  "brunch-4-desc": "With double smoked turkey, double gouda & béchamel. Served with salad",
  "brunch-5-name": "Croque Madame",
  "brunch-5-desc": "With double smoked turkey, double gouda, béchamel & fried egg. Served with salad",

  // Waffles items
  "waffles-1-name": "Choco Waffle",
  "waffles-1-desc": "With hazelnut spread & chopped hazelnuts",
  "waffles-2-name": "Speculoos Waffle",
  "waffles-2-desc": "With Speculoos spread & crushed Speculoos biscuit",
  "waffles-3-name": "Forest Waffle",
  "waffles-3-desc": "With Bavarian cream & homemade red fruit jam",
  "waffles-4-name": "Profiterole Waffle",
  "waffles-4-desc": "With dark chocolate profiterole sauce, whipped cream & vanilla",
  "waffles-5-name": "Banoffee Waffle",
  "waffles-5-desc": "With Bavarian cream, caramel spread, banana, caramel syrup & crushed butter biscuit",

  // Pancakes items
  "pancakes-1-name": "Cinnamon Pancakes",
  "pancakes-1-desc": "3 pieces. With honey, cinnamon & walnuts",
  "pancakes-2-name": "Choco Pancakes",
  "pancakes-2-desc": "3 pieces. With hazelnut spread & chopped hazelnuts",
  "pancakes-3-name": "Speculoos Pancakes",
  "pancakes-3-desc": "3 pieces. With Speculoos spread & crushed biscuit",
  "pancakes-4-name": "Forest Pancakes",
  "pancakes-4-desc": "3 pieces. With Bavarian cream & homemade red fruit jam",
  "pancakes-5-name": "Profiterole Pancakes",
  "pancakes-5-desc": "3 pieces. With dark chocolate profiterole sauce, whipped cream & vanilla",
  "pancakes-6-name": "Banoffee Pancakes",
  "pancakes-6-desc": "3 pieces. With Bavarian cream, caramel spread, banana, caramel syrup & crushed biscuit",

  // Sweets items
  "sweets-1-name": "Cheesecake",
  "sweets-1-desc": "Delicious, light and classic dessert for every season",
  "sweets-2-name": "Tiramisu",
  "sweets-2-desc": "Sweet delight",
  "sweets-3-name": "Profiterole (Individual)",
  "sweets-3-desc": "With dark chocolate sauce, whipped cream & vanilla",
  "sweets-4-name": "Carrot Cake (Slice)",
  "sweets-4-desc": "With cream cheese buttercream & chopped walnuts",
  "sweets-5-name": "Red Velvet Cake (Slice)",
  "sweets-5-desc": "With cream cheese buttercream & homemade strawberry jam",
  "sweets-6-name": "Ekmek (Traditional Dessert)",
  "sweets-6-desc": "With Constantinople-style brioche",
  "sweets-7-name": "Apple Tart",
  "sweets-7-desc": "Traditional apple pie with vanilla cream & whole apple pieces",
  "sweets-8-name": "Walnut Cake (Karidopita)",
  "sweets-8-desc": "With vanilla cream",
  "sweets-9-name": "Lemon Cheesecake",
  "sweets-9-desc": "With homemade lemon cream",
  "sweets-10-name": "Coffee Lotus Dessert",
  "sweets-10-desc": "With cream cheese, single espresso shot & Lotus biscuit",
  "sweets-11-name": "Millefeuille",
  "sweets-11-desc": "Sweet delight",
  "sweets-12-name": "Galaktoboureko",
  "sweets-12-desc": "Sweet delight (custard pie with syrup)",
  "sweets-13-name": "Galaktoboureko Kataifi (Individual)",
  "sweets-13-desc": "Sweet delight",

  // Sandwiches items
  "sandwiches-1-name": "Chicken Tortilla Wrap",
  "sandwiches-1-desc": "With turkey, gouda, tomato & mustard sauce",
  "sandwiches-2-name": "Smoked Chicken Sandwich",
  "sandwiches-2-desc": "With smoked turkey, gouda, tomato, lettuce & mustard sauce",
  "sandwiches-3-name": "Chicken Sandwich",
  "sandwiches-3-desc": "With chicken, gouda, tomato, lettuce & mustard sauce",

  // Pastries items
  "sfolies-1-name": "Cheese Pie",
  "sfolies-1-desc": "Say cheese! Smile, a delicious cheese pie comes to your door. Order the most delicious taste/snack of the day",
  "sfolies-2-name": "Cheese Pie (Sheet Pan)",
  "sfolies-2-desc": "Say cheese! Smile, a delicious cheese pie comes to your door. Order the most delicious taste/snack of the day",
  "sfolies-3-name": "Chicken Pie (Sheet Pan)",
  "sfolies-3-desc": "With red pepper, béchamel, chicken & gouda",
  "sfolies-4-name": "Fiery Chicken",
  "sfolies-4-desc": "With red pepper, béchamel, chicken & gouda",
  "sfolies-5-name": "Potato Pie",
  "sfolies-5-desc": "Vegetarian",

  // Snacks items
  "snacks-1-name": "Forest Fruit Bar",
  "snacks-1-desc": "Homemade",
  "snacks-2-name": "Soft Cookie Vanilla with Chocolate Chips",
  "snacks-2-desc": "Homemade",
  "snacks-3-name": "Soft Cookie Chocolate with Chocolate Chips",
  "snacks-3-desc": "Homemade",
  "snacks-4-name": "Soft Cookie Lotus",
  "snacks-4-desc": "Homemade",

  // Coffees items
  "coffees-1-name": "Espresso",
  "coffees-1-desc": "A strong & rich coffee full of intensity & aroma",
  "coffees-2-name": "Espresso Macchiato",
  "coffees-2-desc": "Macchiato in Italian means 'marked' and this espresso with a little milk will mark you!",
  "coffees-3-name": "Freddo Espresso",
  "coffees-3-desc": "The intensity of espresso in a cool, velvety version, ideal to energize you",
  "coffees-4-name": "Cappuccino",
  "coffees-4-desc": "A strong espresso with rich, velvety foam milk, in a classic combination of taste & texture",
  "coffees-5-name": "Cappuccino Latte",
  "coffees-5-desc": "A coffee with a rich inner world since it hides the milk inside and inside!",
  "coffees-6-name": "Freddo Cappuccino",
  "coffees-6-desc": "Iced espresso with cold foam milk. The European version of cold coffee",
  "coffees-7-name": "Freddo Cappuccino Latte",
  "coffees-7-desc": "Never too late for a latte. Iced and full of taste every season",
  "coffees-8-name": "Flat White",
  "coffees-8-desc": "Nothing is flat. Double dose of espresso with foam milk",
  "coffees-9-name": "Instant Coffee (Nes)",
  "coffees-9-desc": "Say yes to a Nes! This instant coffee will warm you and its taste will accompany you",
  "coffees-10-name": "Frappe",
  "coffees-10-desc": "The classic Greek instant coffee, ideal to energize you anytime",
  "coffees-11-name": "Filter Coffee",
  "coffees-11-desc": "Filter coffee for enjoyment! Order your favorite anytime of the day",
  "coffees-12-name": "Greek Coffee",
  "coffees-12-desc": "If you love coffee, Greek coffee definitely loves it! The coffee that is drunk anytime of the day",
  "coffees-13-name": "Americano",
  "coffees-13-desc": "A strong espresso with mild taste, diluted with hot water",

  // Drinks items
  "drinks-1-name": "Hot Chocolate",
  "drinks-1-desc": "Delightful chocolate drink, full of taste & aromas",
  "drinks-2-name": "Hot Chocolate Bitter",
  "drinks-2-desc": "Delightful chocolate drink, full of taste & aromas",
  "drinks-3-name": "Fresh Orange Juice",
  "drinks-3-desc": "They say when you drink fresh orange juice, you hear in your ears 'drink it fast, it will lose its vitamins'. Order fast, enjoy fast and get all the vitamins",
  "drinks-4-name": "Tea",
  "drinks-4-desc": "Relax, drink your favorite infusion and rejuvenate body and spirit",
  "drinks-5-name": "Chamomile",
  "drinks-5-desc": "Relax, drink your favorite infusion and rejuvenate body and spirit",
  "drinks-6-name": "Lemonade",
  "drinks-6-desc": "Every sip takes you to places with sun, aromas and good energy. Order and enjoy freshness and coolness in the glass!",
  "drinks-7-name": "Peach Juice",
  "drinks-7-desc": "Every sip takes you to places with sun, aromas and good energy. Order and enjoy freshness and coolness in the glass!",
  "drinks-8-name": "Cherry Juice",
  "drinks-8-desc": "When life gives you oranges, lemons, bananas, fruits in general, squeeze into juice and enjoy. Drink your juice daily for extra energy and tone",
  "drinks-9-name": "Homemade Lemon Ice Tea",
  "drinks-9-desc": "Homemade",
  "drinks-10-name": "Homemade Peach Ice Tea",
  "drinks-10-desc": "Homemade",
  "drinks-11-name": "Apple & Pomegranate Juice",
  "drinks-11-desc": "When life gives you oranges, lemons, bananas, fruits in general, squeeze into juice and enjoy. Drink your juice daily for extra energy and tone",
  "drinks-12-name": "8 Fruit Juice",
  "drinks-12-desc": "When life gives you oranges, lemons, bananas, fruits in general, squeeze into juice and enjoy. Drink your juice daily for extra energy and tone",
  "drinks-13-name": "Chamomile & Honey",
  "drinks-13-desc": "Organic chamomile with thyme honey",

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

  // 404 page
  "404-title": "Oops! Page not found",
  "404-desc": "It looks like you've lost your way. This page doesn't exist.",
  "404-btn": "Back to Home",

};

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

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    // Apply English translation
    if (translations[key] !== undefined) {
      el.textContent = translations[key];
    }
  });

  // Update active state on lang buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("lang-active", btn.dataset.lang === "en");
  });
}

function switchToGreek() {
  currentLang = "el";
  localStorage.setItem("coc-lang", "el");
  document.documentElement.lang = "el";

  // First, make sure we have the Greek originals for all elements
  storeGreekOriginals();

  // Restore original Greek text
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (greekOriginals[key]) {
      el.textContent = greekOriginals[key];
    }
  });

  // Update active state on lang buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("lang-active", btn.dataset.lang === "el");
  });
}

function initI18n() {
  // First, always store the original Greek text from HTML
  storeGreekOriginals();

  // Then apply the appropriate language
  if (currentLang === "en") {
    switchToEnglish();
  } else {
    // Greek is already there, just update button states
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("lang-active", btn.dataset.lang === "el");
    });
  }

  // Setup language button listeners (called after navbar is loaded)
  setupLangButtonListeners();
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
