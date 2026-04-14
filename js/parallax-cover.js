// Parallax Cover Effect (covers 2/3 of hero, leaves 1/3 visible)
window.addEventListener('load', () => {
  const parallaxWrapper = document.querySelector('#parallax-wrapper');
  const hero = document.querySelector('.menu-hero, .about-hero');

  if (!parallaxWrapper || !hero) return;

  function updateParallax() {
    const heroHeight = hero.offsetHeight;
    const coverAmount = (heroHeight * 2) / 3;
    const scrollPos = window.scrollY;

    // Move wrapper up only 2/3 of hero height max (via transform)
    const offset = Math.min(scrollPos, coverAmount);
    parallaxWrapper.style.transform = `translateY(-${offset}px)`;
  }

  // Set negative margin-bottom to prevent layout gap from transform
  const heroHeight = hero.offsetHeight;
  const maxOffset = (heroHeight * 2) / 3;
  parallaxWrapper.style.marginBottom = `-${maxOffset}px`;

  // Run on scroll
  window.addEventListener('scroll', updateParallax);

  // Also run once in case page is already scrolled
  updateParallax();

  // Optional: update on resize (important for responsive layouts)
  window.addEventListener('resize', updateParallax);
});