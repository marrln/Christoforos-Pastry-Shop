// Scroll Reveal Animation using Intersection Observer
// Exclude carousel, navbar, hero sections, and map from scroll reveal
const revealElements = [];

// Get sections but exclude carousel, hero sections, map, and menu sections (which have their own animation)
document.querySelectorAll('section:not(#carousel):not(.menu-hero):not(.about-hero):not(#map-section):not(.menu-section)').forEach(el => revealElements.push(el));

// Get cards and pills
document.querySelectorAll('.feat-card, .menu-card, .info-card, .value-pill').forEach(el => revealElements.push(el));

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

revealElements.forEach(element => {
  reveal.observe(element);
});
