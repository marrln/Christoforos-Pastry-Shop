// Load shared navbar and footer components
async function loadNavbarFooter() {
  try {
    // Load navbar
    const navbarResponse = await fetch('elements/navbar.html');
    const navbarHTML = await navbarResponse.text();
    const navbarContainer = document.createElement('div');
    navbarContainer.innerHTML = navbarHTML;
    document.body.insertBefore(navbarContainer.firstElementChild, document.body.firstChild);

    // Store Greek originals for newly loaded navbar elements
    if (typeof storeGreekOriginals === 'function') {
      storeGreekOriginals();
    }

    // Apply current language to navbar with fade animation if English is selected
    if (typeof currentLang !== 'undefined' && currentLang === 'en') {
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        el.classList.add("translating");
      });
      
      setTimeout(() => {
        if (typeof translations !== 'undefined') {
          document.querySelectorAll("[data-i18n]").forEach((el) => {
            const key = el.getAttribute("data-i18n");
            if (translations[key] !== undefined) {
              el.textContent = translations[key];
            }
            el.classList.remove("translating");
          });
        }
      }, 200);
    }

    // Update language button states to match current language
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      if (typeof currentLang !== 'undefined') {
        btn.classList.toggle("lang-active", btn.dataset.lang === currentLang);
      }
    });

    // Setup language button listeners now that navbar is in the DOM
    if (typeof setupLangButtonListeners === 'function') {
      setupLangButtonListeners();
    }

    // Load map
    const mapResponse = await fetch('elements/map.html');
    const mapHTML = await mapResponse.text();
    const mapContainer = document.createElement('div');
    mapContainer.innerHTML = mapHTML;
    
    // Insert map inside parallax wrapper
    const parallaxWrapper = document.querySelector('#parallax-wrapper');
    if (parallaxWrapper) {
      parallaxWrapper.appendChild(mapContainer.firstElementChild);
    } else {
      // Fallback if parallax wrapper doesn't exist
      const mainElement = document.querySelector('main') || document.body;
      if (mainElement.nextElementSibling) {
        mainElement.parentNode.insertBefore(mapContainer.firstElementChild, mainElement.nextElementSibling);
      } else {
        document.body.insertBefore(mapContainer.firstElementChild, document.body.lastChild);
      }
    }

    // Store Greek originals for newly loaded map elements
    if (typeof storeGreekOriginals === 'function') {
      storeGreekOriginals();
    }

    // Load footer
    const footerResponse = await fetch('elements/footer.html');
    const footerHTML = await footerResponse.text();
    const footerContainer = document.createElement('div');
    footerContainer.innerHTML = footerHTML;
    document.body.appendChild(footerContainer.firstElementChild);

    // Store Greek originals for newly loaded footer elements
    if (typeof storeGreekOriginals === 'function') {
      storeGreekOriginals();
    }

    // Set active nav link based on current page
    setActiveNavLink();
  } catch (error) {
    console.error('Error loading components:', error);
  }
}

function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// Load components when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadNavbarFooter);
} else {
  loadNavbarFooter();
}

// Load scroll reveal animations
const revealScript = document.createElement('script');
revealScript.src = 'js/scroll-reveal.js';
document.body.appendChild(revealScript);
