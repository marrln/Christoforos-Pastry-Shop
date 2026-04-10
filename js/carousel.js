// ── Carousel ──────────────────────────────────────────────────────────────
const slides = document.querySelectorAll('.slide');
const dots   = document.querySelectorAll('.dot');
let current  = 0;
let timer;

function showSlide(n) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = (n + slides.length) % slides.length;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
}

function startAutoplay() {
  timer = setInterval(() => showSlide(current + 1), 2000);
}
function stopAutoplay() { clearInterval(timer); }

document.getElementById('prev-btn').addEventListener('click', () => { stopAutoplay(); showSlide(current - 1); startAutoplay(); });
document.getElementById('next-btn').addEventListener('click', () => { stopAutoplay(); showSlide(current + 1); startAutoplay(); });

dots.forEach(dot => {
  dot.addEventListener('click', () => { stopAutoplay(); showSlide(+dot.dataset.idx); startAutoplay(); });
});

const carousel = document.getElementById('carousel');
carousel.addEventListener('mouseenter', stopAutoplay);
carousel.addEventListener('mouseleave', startAutoplay);

startAutoplay();
