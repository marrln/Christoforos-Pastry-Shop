// Cup of Cake – Bilingual translations (Greek / English)
const translations = {
  el: {
    // Navigation
    "nav-home": "Αρχική",
    "nav-menu": "Κατάλογος",
    "nav-about": "Σχετικά",
    "nav-lang-el": "Ελληνικά",
    "nav-lang-en": "English",

    // Index – Hero / Carousel
    "slide1-title": "Φρέσκος Καφές",
    "slide1-desc": "Αρωματικός καφές από επιλεγμένους κόκκους",
    "slide2-title": "Βάφλες με Σοκολάτα",
    "slide2-desc": "Τραγανές βάφλες με ζεστή σοκολάτα και παγωτό βανίλια",
    "slide3-title": "Ροφήματα Εποχής",
    "slide3-desc": "Ζεστά και κρύα ροφήματα για κάθε εποχή",
    "slide4-title": "Γλυκά & Pastry",
    "slide4-desc": "Σπιτικά γλυκά φτιαγμένα με αγάπη",
    "slide5-title": "Brunch Απολαύσεις",
    "slide5-desc": "Το τέλειο brunch για να ξεκινήσετε την ημέρα σας",
    "carousel-btn-order": "Παραγγείλτε Εδώ",

    // Index – Intro section
    "intro-title": "Καλώς ήρθατε στο Cup of Cake",
    "intro-text": "Στο Cup of Cake πιστεύουμε ότι κάθε στιγμή αξίζει μια γλυκιά ανταμοιβή. Από τον πρωινό καφέ μέχρι το βραδινό επιδόρπιο, σας προσφέρουμε την καλύτερη εμπειρία γεύσης στην Αθήνα.",

    // Index – Featured section
    "featured-title": "Αγαπημένες Επιλογές",
    "feat1-name": "Freddo Espresso",
    "feat1-desc": "Παγωμένος καφές για καλοκαιρινές μέρες",
    "feat2-name": "Βάφλα Nutella",
    "feat2-desc": "Τραγανή βάφλα με Nutella και μπανάνα",
    "feat3-name": "Cheesecake Βατόμουρο",
    "feat3-desc": "Κρεμώδες cheesecake με σάλτσα βατόμουρου",
    "feat4-name": "Pancakes Maple",
    "feat4-desc": "Αφράτα pancakes με σιρόπι σφενδάμου",
    "view-menu-btn": "Δείτε όλο το menu μας",

    // Footer
    "footer-hours-title": "Ωράριο Λειτουργίας",
    "footer-hours-weekdays": "Δευτέρα – Παρασκευή: 07:00-20:00",
    "footer-hours-saturday": "Σάββατο: 08:00-20:00",
    "footer-hours-sunday": "Κυριακή: 09:30-17:00",
    "footer-address": "Μωρογιάννη 83 & Ηρακλέους, Περιστέρι 12133, Αθήνα",
    "footer-phone": "Τηλ.: +30  210 574 7222",
    "footer-copy": "© 2025 Cup of Cake. Με επιφύλαξη παντός δικαιώματος.",
    "footer-map-title": "Βρείτε μας εδώ",

    // Menu page
    "menu-page-title": "Το menu μας",
    "menu-page-subtitle": "Ανακαλύψτε τις γεύσεις μας",

    // Menu categories
    "cat-brunch": "Brunch",
    "cat-waffles": "Βάφλες",
    "cat-pancakes": "Pancakes Γλυκά",
    "cat-sweets": "Γλυκά",
    "cat-sandwiches": "Sandwiches",
    "cat-sfolies": "Σφολιάτες",
    "cat-snacks": "Snacks",
    "cat-coffees": "Καφέδες",
    "cat-drinks": "Ροφήματα",
    "cat-soft": "Αναψυκτικά",

    // Brunch items
    "brunch1-name": "Αβοκάντο Toast",
    "brunch1-desc": "Τοστ με αβοκάντο, αυγό ποσέ και ντοματίνια",
    "brunch2-name": "English Breakfast",
    "brunch2-desc": "Αυγά, μπέικον, λουκάνικο, φασόλια, ψωμί",
    "brunch3-name": "Granola Bowl",
    "brunch3-desc": "Granola με γιαούρτι, μέλι και φρέσκα φρούτα",

    // Waffle items
    "waffle1-name": "Βάφλα Classic",
    "waffle1-desc": "Βάφλα με βούτυρο, μέλι και ζάχαρη άχνη",
    "waffle2-name": "Βάφλα Nutella & Μπανάνα",
    "waffle2-desc": "Βάφλα με Nutella, μπανάνα και τριμμένη φουντούκια",
    "waffle3-name": "Βάφλα Φράουλα",
    "waffle3-desc": "Βάφλα με σαντιγί και φράουλες",

    // Pancakes items
    "pancake1-name": "Pancakes Maple Syrup",
    "pancake1-desc": "Αφράτα pancakes με σιρόπι σφενδάμου και βούτυρο",
    "pancake2-name": "Pancakes Nutella",
    "pancake2-desc": "Pancakes με Nutella και crushed Oreo",
    "pancake3-name": "Pancakes Φρούτα",
    "pancake3-desc": "Pancakes με ανάμεικτα φρέσκα φρούτα",

    // Sweets items
    "sweet1-name": "Cheesecake New York",
    "sweet1-desc": "Κλασικό cheesecake με κουλουράκι Graham",
    "sweet2-name": "Brownie Σοκολάτα",
    "sweet2-desc": "Ζεστό brownie με παγωτό βανίλια",
    "sweet3-name": "Tiramisu",
    "sweet3-desc": "Ιταλικό tiramisu με μασκαρπόνε και καφέ",

    // Sandwiches items
    "sandwich1-name": "Club Sandwich",
    "sandwich1-desc": "Τριώροφο sandwich με κοτόπουλο, μπέικον και λαχανικά",
    "sandwich2-name": "Caprese Panini",
    "sandwich2-desc": "Panini με μοτσαρέλα, ντομάτα και βασιλικό",
    "sandwich3-name": "BLT Sandwich",
    "sandwich3-desc": "Μπέικον, μαρούλι, ντομάτα σε ψωμί ολικής",

    // Sfolies items
    "sfolia1-name": "Σφολιάτα Τυρί",
    "sfolia1-desc": "Τραγανή σφολιάτα με κρεμώδες τυρί",
    "sfolia2-name": "Σφολιάτα Αμύγδαλο",
    "sfolia2-desc": "Σφολιάτα με κρέμα αμυγδάλου και ζάχαρη άχνη",
    "sfolia3-name": "Κρουασάν Βούτυρο",
    "sfolia3-desc": "Φρέσκο κρουασάν με ανάλατο βούτυρο",

    // Snacks items
    "snack1-name": "French Fries",
    "snack1-desc": "Τραγανές τηγανιτές πατάτες με dip επιλογής",
    "snack2-name": "Nachos με Dips",
    "snack2-desc": "Nachos με guacamole, salsa και κρεμώδη σάλτσα",
    "snack3-name": "Muffin Βατόμουρο",
    "snack3-desc": "Αφράτο muffin με βατόμουρο",

    // Coffee items
    "coffee1-name": "Espresso",
    "coffee1-desc": "Κλασικό espresso από premium κόκκους",
    "coffee2-name": "Freddo Cappuccino",
    "coffee2-desc": "Παγωμένο cappuccino με αφρόγαλα",
    "coffee3-name": "Καφέ Φίλτρου",
    "coffee3-desc": "Αρωματικός καφές φίλτρου από single origin κόκκους",

    // Drinks items
    "drink1-name": "Ζεστή Σοκολάτα",
    "drink1-desc": "Κρεμώδης ζεστή σοκολάτα με γάλα",
    "drink2-name": "Matcha Latte",
    "drink2-desc": "Ιαπωνικό matcha με αφρόγαλα",
    "drink3-name": "Χαμομήλι & Μέλι",
    "drink3-desc": "Βιολογικό χαμομήλι με θυμαρίσιο μέλι",

    // Soft drinks items
    "soft1-name": "Φρέσκος Χυμός Πορτοκάλι",
    "soft1-desc": "Φρεσκοστυμμένος χυμός πορτοκάλι",
    "soft2-name": "Λεμονάδα",
    "soft2-desc": "Σπιτική λεμονάδα με βάλσαμο",
    "soft3-name": "Smoothie Φρούτα",
    "soft3-desc": "Ανάμεικτα φρούτα, γιαούρτι και μέλι",

    // About page
    "about-page-title": "Σχετικά με εμάς",
    "about-story-title": "Η Ιστορία μας",
    "about-story-text": "Το Cup of Cake γεννήθηκε από την αγάπη για τον καλό καφέ και τα χειροποίητα γλυκά. Ξεκινήσαμε το 2018 με ένα μικρό μαγαζάκι στο Περιστέρι και σήμερα έχουμε γίνει ο αγαπημένος προορισμός όλων όσων αναζητούν ποιοτική γεύση και ζεστή ατμόσφαιρα.",
    "about-mission-title": "Η Αποστολή μας",
    "about-mission-text": "Στόχος μας είναι να προσφέρουμε μια μοναδική εμπειρία σε κάθε επίσκεψη. Χρησιμοποιούμε μόνο φρέσκα, τοπικά υλικά και αγαπάμε να πειραματιζόμαστε με νέες γεύσεις χωρίς να χάνουμε την αυθεντικότητά μας.",
    "about-atmosphere-title": "Η Ατμόσφαιρά μας",
    "about-atmosphere-text": "Ο χώρος μας είναι σχεδιασμένος για να νιώθετε σαν στο σπίτι σας. Ζεστά χρώματα, άνετα καθίσματα και μουσική που σας χαλαρώνει – όλα εκεί για να κάνουν την επίσκεψή σας αξέχαστη.",
    "about-values-title": "Οι Αξίες μας",
    "about-val1": "Ποιότητα σε κάθε λεπτομέρεια",
    "about-val2": "Ζεστή εξυπηρέτηση",
    "about-val3": "Τοπικά & φρέσκα υλικά",
    "about-val4": "Βιώσιμες πρακτικές",

    // 404 page
    "404-title": "Ωχ! Η σελίδα δεν βρέθηκε",
    "404-desc": "Φαίνεται ότι χάσατε τον δρόμο σας. Αυτή η σελίδα δεν υπάρχει.",
    "404-btn": "Επιστροφή στην Αρχική",
  },

  en: {
    // Navigation
    "nav-home": "Home",
    "nav-menu": "Menu",
    "nav-about": "About Us",
    "nav-lang-el": "Ελληνικά",
    "nav-lang-en": "English",

    // Index – Hero / Carousel
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

    // Index – Intro section
    "intro-title": "Welcome to Cup of Cake",
    "intro-text": "At Cup of Cake we believe every moment deserves a sweet reward. From the morning coffee to the evening dessert, we offer you the best taste experience in Athens.",

    // Index – Featured section
    "featured-title": "Our Favourites",
    "feat1-name": "Freddo Espresso",
    "feat1-desc": "Iced coffee for summer days",
    "feat2-name": "Nutella Waffle",
    "feat2-desc": "Crispy waffle with Nutella and banana",
    "feat3-name": "Raspberry Cheesecake",
    "feat3-desc": "Creamy cheesecake with raspberry sauce",
    "feat4-name": "Maple Pancakes",
    "feat4-desc": "Fluffy pancakes with maple syrup",
    "view-menu-btn": "View Our Menu",

    // Footer
    "footer-hours-title": "Opening Hours",
    "footer-hours-weekdays": "Monday – Friday: 07:00-20:00",
    "footer-hours-saturday": "Saturday: 08:00-20:00",
    "footer-hours-sunday": "Sunday: 09:30-17:00",
    "footer-address": "Morogianni 83 & Irakleous, Peristeri 12133, Athens",
    "footer-phone": "Tel.: +30  210 574 7222",
    "footer-copy": "© 2025 Cup of Cake. All rights reserved.",
    "footer-map-title": "Find Us Here",

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
    "cat-drinks": "Beverages",
    "cat-soft": "Soft Drinks",

    // Brunch items
    "brunch1-name": "Avocado Toast",
    "brunch1-desc": "Toast with avocado, poached egg and cherry tomatoes",
    "brunch2-name": "English Breakfast",
    "brunch2-desc": "Eggs, bacon, sausage, beans, toast",
    "brunch3-name": "Granola Bowl",
    "brunch3-desc": "Granola with yoghurt, honey and fresh fruit",

    // Waffle items
    "waffle1-name": "Classic Waffle",
    "waffle1-desc": "Waffle with butter, honey and icing sugar",
    "waffle2-name": "Nutella & Banana Waffle",
    "waffle2-desc": "Waffle with Nutella, banana and crushed hazelnuts",
    "waffle3-name": "Strawberry Waffle",
    "waffle3-desc": "Waffle with whipped cream and strawberries",

    // Pancakes items
    "pancake1-name": "Maple Syrup Pancakes",
    "pancake1-desc": "Fluffy pancakes with maple syrup and butter",
    "pancake2-name": "Nutella Pancakes",
    "pancake2-desc": "Pancakes with Nutella and crushed Oreo",
    "pancake3-name": "Fruit Pancakes",
    "pancake3-desc": "Pancakes with mixed fresh fruit",

    // Sweets items
    "sweet1-name": "New York Cheesecake",
    "sweet1-desc": "Classic cheesecake on a Graham cracker base",
    "sweet2-name": "Chocolate Brownie",
    "sweet2-desc": "Warm brownie with vanilla ice cream",
    "sweet3-name": "Tiramisu",
    "sweet3-desc": "Italian tiramisu with mascarpone and coffee",

    // Sandwiches items
    "sandwich1-name": "Club Sandwich",
    "sandwich1-desc": "Triple-decker sandwich with chicken, bacon and vegetables",
    "sandwich2-name": "Caprese Panini",
    "sandwich2-desc": "Panini with mozzarella, tomato and basil",
    "sandwich3-name": "BLT Sandwich",
    "sandwich3-desc": "Bacon, lettuce, tomato on wholegrain bread",

    // Sfolies items
    "sfolia1-name": "Cheese Pastry",
    "sfolia1-desc": "Crispy pastry with creamy cheese filling",
    "sfolia2-name": "Almond Pastry",
    "sfolia2-desc": "Pastry with almond cream and icing sugar",
    "sfolia3-name": "Butter Croissant",
    "sfolia3-desc": "Fresh croissant with unsalted butter",

    // Snacks items
    "snack1-name": "French Fries",
    "snack1-desc": "Crispy fries with your choice of dip",
    "snack2-name": "Nachos & Dips",
    "snack2-desc": "Nachos with guacamole, salsa and creamy sauce",
    "snack3-name": "Blueberry Muffin",
    "snack3-desc": "Fluffy muffin with blueberry",

    // Coffee items
    "coffee1-name": "Espresso",
    "coffee1-desc": "Classic espresso from premium beans",
    "coffee2-name": "Freddo Cappuccino",
    "coffee2-desc": "Iced cappuccino with milk foam",
    "coffee3-name": "Filter Coffee",
    "coffee3-desc": "Aromatic filter coffee from single-origin beans",

    // Drinks items
    "drink1-name": "Hot Chocolate",
    "drink1-desc": "Creamy hot chocolate with milk",
    "drink2-name": "Matcha Latte",
    "drink2-desc": "Japanese matcha with milk foam",
    "drink3-name": "Chamomile & Honey",
    "drink3-desc": "Organic chamomile with thyme honey",

    // Soft drinks items
    "soft1-name": "Fresh Orange Juice",
    "soft1-desc": "Freshly squeezed orange juice",
    "soft2-name": "Lemonade",
    "soft2-desc": "Homemade lemonade with lemon balm",
    "soft3-name": "Fruit Smoothie",
    "soft3-desc": "Mixed fruits, yoghurt and honey",

    // About page
    "about-page-title": "About Us",
    "about-story-title": "Our Story",
    "about-story-text": "Cup of Cake was born from a love of good coffee and handmade sweets. We started in 2018 with a small shop in Peristeri and today we have become the favourite destination for everyone seeking quality taste and a warm atmosphere.",
    "about-mission-title": "Our Mission",
    "about-mission-text": "Our goal is to offer a unique experience on every visit. We use only fresh, local ingredients and love to experiment with new flavours without losing our authenticity.",
    "about-atmosphere-title": "Our Atmosphere",
    "about-atmosphere-text": "Our space is designed to make you feel at home. Warm colours, comfortable seating and relaxing music – all there to make your visit unforgettable.",
    "about-values-title": "Our Values",
    "about-val1": "Quality in every detail",
    "about-val2": "Warm service",
    "about-val3": "Local & fresh ingredients",
    "about-val4": "Sustainable practices",

    // 404 page
    "404-title": "Oops! Page Not Found",
    "404-desc": "Looks like you've lost your way. This page doesn't exist.",
    "404-btn": "Back to Home",
  },
};

// ── Language management ──────────────────────────────────────────────────────
let currentLang = localStorage.getItem("coc-lang") || "el";

function applyTranslations(lang) {
  currentLang = lang;
  localStorage.setItem("coc-lang", lang);
  document.documentElement.lang = lang;

  const t = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  // Update active state on lang buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("lang-active", btn.dataset.lang === lang);
  });
}

function initI18n() {
  applyTranslations(currentLang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyTranslations(btn.dataset.lang));
  });
}

document.addEventListener("DOMContentLoaded", initI18n);
