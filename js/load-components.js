// Load shared navbar and footer components
async function loadNavbarFooter() {
  try {
    // Load navbar
    const navbarResponse = await fetch('js/navbar.html');
    const navbarHTML = await navbarResponse.text();
    const navbarContainer = document.createElement('div');
    navbarContainer.innerHTML = navbarHTML;
    document.body.insertBefore(navbarContainer.firstElementChild, document.body.firstChild);

    // Store Greek originals for newly loaded navbar elements
    if (typeof storeGreekOriginals === 'function') {
      storeGreekOriginals();
    }

    // Setup language button listeners now that navbar is in the DOM
    if (typeof setupLangButtonListeners === 'function') {
      setupLangButtonListeners();
    }

    // Load map
    const mapResponse = await fetch('js/map.html');
    const mapHTML = await mapResponse.text();
    const mapContainer = document.createElement('div');
    mapContainer.innerHTML = mapHTML;
    
    // Find the main element or body to insert map before footer
    const mainElement = document.querySelector('main') || document.body;
    if (mainElement.nextElementSibling) {
      mainElement.parentNode.insertBefore(mapContainer.firstElementChild, mainElement.nextElementSibling);
    } else {
      document.body.insertBefore(mapContainer.firstElementChild, document.body.lastChild);
    }

    // Store Greek originals for newly loaded map elements
    if (typeof storeGreekOriginals === 'function') {
      storeGreekOriginals();
    }

    // Load footer
    const footerResponse = await fetch('js/footer.html');
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
