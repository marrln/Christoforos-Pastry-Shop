# Christoforos Pastry Shop

A website for Christoforos Pastry Shop, a pastry shop located in Vyronas, Athens. The site showcases the shop's menu, provides information about the business, and features a bilingual interface supporting both Greek and English.

## Overview

Christoforos Pastry Shop is a locally-focused website built with HTML5, CSS, and JavaScript. It serves as a digital front for the physical coffee shop, displaying their offerings and welcoming customers to explore their menu and learn about the business.

## Features

- **Bilingual Interface**: Full support for Greek and English languages with easy language switching
- **Dynamic Menu Display**: Categorized menu items including brunch, waffles, pancakes, sweets, sandwiches, sfolies, snacks, coffee, and beverages
- **Image Carousel**: Featured items showcase on the homepage with automatic rotation
- **Responsive Design**: Mobile-first approach using Tailwind CSS for compatibility across devices
- **Smooth Animations**: Parallax effects, scroll reveal animations, and hover effects for better user experience
- **About Section**: Business story and information
- **Contact Details**: Operating hours, address, and phone number

## Project Structure

```
Cup-of-Cake/
├── index.html              # Homepage
├── menu.html               # Menu page with category filters
├── about_us.html           # Shop information and story
├── 404_not_found.html      # 404 error page
├── README.md               # This file
├── LICENSE                 # Project license
├── assets/
│   ├── styles.css          # Custom CSS styles
│   ├── cover.avif          # Hero image
│   ├── carousel/           # Carousel images
│   ├── icons/              # Icon assets
│   └── menu/               # Menu item images
├── data/
│   └── menu.json           # Menu data with translations
├── elements/
│   ├── navbar.html         # Navigation component
│   ├── footer.html         # Footer component
│   └── map.html            # Map embed component
└── js/
    ├── carousel.js         # Carousel functionality
    ├── menu-card-renderer.js # Menu item rendering
    ├── menu-tabs.js        # Category filtering
    ├── load-components.js  # Dynamic component loading
    ├── parallax-cover.js   # Parallax scroll effects
    ├── scroll-reveal.js    # Scroll animation effects
    └── translations.js     # Language translations
```

## Getting Started

1. Clone or download the project
2. Open `index.html` in a web browser to view the homepage
3. Navigate between pages using the menu:
   - Home: `index.html`
   - Menu: `menu.html`
   - About Us: `about_us.html`

No build process or dependencies required. The site uses CDN-hosted libraries for Tailwind CSS and Font Awesome.

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Custom styles with Tailwind CSS utility framework
- **JavaScript**: Vanilla JavaScript for interactivity and translations
- **JSON**: Data storage for menu items
- **Font Awesome 6.5**: Icon library
- **Tailwind CSS**: Utility-first CSS framework from CDN

## Language Support

The site supports Greek and English. Translations are handled through a JavaScript system where Greek is the default language stored in HTML attributes, and English translations are applied when the language is switched.

## Future Features

- Add a search bar to the menu page
- FAQ section
- Contact form
- Instagram feed integration on homepage
- Customer reviews and ratings section
- Newsletter subscription system
- Cookie consent banner for privacy compliance and user tracking

