// ── Reviews Carousel ──────────────────────────────────────────────────────────────
let reviewCurrent = 0;
let reviewTimer;
let reviewData = [];

function formatReviewStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const stars = Array.from({ length: fullStars }, () => '★').join('');
  return `${stars}${halfStar ? '½' : ''}`;
}

function getReviewText(review) {
  if (typeof currentLang !== 'undefined' && currentLang === 'en' && review.textEn) {
    return review.textEn;
  }
  return review.text;
}

function getReviewAuthor(review) {
  if (typeof currentLang !== 'undefined' && currentLang === 'en' && review.authorEn) {
    return review.authorEn;
  }
  return review.author;
}

function renderReviewSlide(review, index) {
  const reviewText = getReviewText(review);
  const reviewAuthor = getReviewAuthor(review);
  return `
    <article class="review-slide${index === reviewCurrent ? ' active' : ''}" aria-hidden="${index === reviewCurrent ? 'false' : 'true'}">
      <div class="review-card">
        <div class="review-rating">
          <span class="review-stars" aria-label="${review.rating} stars">${formatReviewStars(review.rating)}</span>
          <span class="review-score">${review.rating.toFixed(1)}</span>
        </div>
        <p class="review-text">${reviewText}</p>
        <div class="review-meta">
          <span class="reviewer-name">${reviewAuthor}</span>
          <span class="review-date">${review.date}</span>
          <span class="review-source">${review.source}</span>
        </div>
      </div>
    </article>
  `;
}

function renderReviewCarousel() {
  const slidesWrapper = document.querySelector('.reviews-slides');
  const dotsWrapper = document.getElementById('reviews-dots');

  if (!slidesWrapper || !dotsWrapper) return;

  const highStarReviews = reviewData.filter((review) => review.rating >= 4.5).slice(0, 5);

  if (!highStarReviews.length) {
    slidesWrapper.innerHTML = '<p class="text-center text-slate-600">Δεν βρέθηκαν πρόσφατες κριτικές.</p>';
    dotsWrapper.innerHTML = '';
    return;
  }

  reviewCurrent = Math.min(reviewCurrent, highStarReviews.length - 1);

  slidesWrapper.innerHTML = highStarReviews.map(renderReviewSlide).join('');
  dotsWrapper.innerHTML = highStarReviews
    .map((_, index) => `<span class="dot${index === reviewCurrent ? ' active' : ''}" data-idx="${index}"></span>`)
    .join('');

  const dots = Array.from(dotsWrapper.querySelectorAll('.dot'));
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      stopReviewAutoplay();
      showReview(+dot.dataset.idx);
      startReviewAutoplay();
    });
  });
}

function showReview(index) {
  const slides = document.querySelectorAll('.review-slide');
  const dots = document.querySelectorAll('#reviews-dots .dot');
  if (!slides.length || !dots.length) return;

  slides[reviewCurrent].classList.remove('active');
  slides[reviewCurrent].setAttribute('aria-hidden', 'true');
  dots[reviewCurrent].classList.remove('active');

  reviewCurrent = (index + slides.length) % slides.length;

  slides[reviewCurrent].classList.add('active');
  slides[reviewCurrent].setAttribute('aria-hidden', 'false');
  dots[reviewCurrent].classList.add('active');
}

function startReviewAutoplay() {
  reviewTimer = setInterval(() => showReview(reviewCurrent + 1), 4500);
}

function stopReviewAutoplay() {
  clearInterval(reviewTimer);
}

function refreshReviewLanguage() {
  if (!reviewData.length) return;
  renderReviewCarousel();
}

async function initReviewsCarousel() {
  const carousel = document.getElementById('reviews-carousel');
  const slidesWrapper = document.querySelector('.reviews-slides');
  const dotsWrapper = document.getElementById('reviews-dots');
  const prevBtn = document.getElementById('reviews-prev');
  const nextBtn = document.getElementById('reviews-next');

  if (!carousel || !slidesWrapper || !dotsWrapper || !prevBtn || !nextBtn) return;

  try {
    const response = await fetch('data/reviews.json');
    reviewData = await response.json();
    renderReviewCarousel();

    prevBtn.addEventListener('click', () => {
      stopReviewAutoplay();
      showReview(reviewCurrent - 1);
      startReviewAutoplay();
    });

    nextBtn.addEventListener('click', () => {
      stopReviewAutoplay();
      showReview(reviewCurrent + 1);
      startReviewAutoplay();
    });

    startReviewAutoplay();
  } catch (error) {
    console.error('Unable to load reviews:', error);
    slidesWrapper.innerHTML = '<p class="text-center text-slate-600">Δεν ήταν δυνατή η φόρτωση των κριτικών.</p>';
    dotsWrapper.innerHTML = '';
  }
}

document.addEventListener('DOMContentLoaded', initReviewsCarousel);
