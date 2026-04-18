// Scroll Reveal Animation using Intersection Observer
// Exclude carousel, navbar, hero sections, and map from scroll reveal

const revealOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -100px 0px'
};

const reveal = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
      observer.unobserve(entry.target);
    }
  });
}, revealOptions);

// Function to observe elements (can be called for dynamically created elements)
function observeRevealElements(elements) {
  elements.forEach(element => {
    reveal.observe(element);
  });
}

// Initial setup for static elements
document.addEventListener('DOMContentLoaded', () => {
  const revealElements = [];

  // Get sections but exclude carousel, hero sections, map, and menu sections (which have their own animation)
  document.querySelectorAll('section:not(#carousel):not(.hero):not(#map-section):not(.menu-section)').forEach(el => revealElements.push(el));

  // Get cards and pills
  document.querySelectorAll('.feat-card, .menu-card, .info-card, .value-pill').forEach(el => revealElements.push(el));

  observeRevealElements(revealElements);
});
