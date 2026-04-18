const servingsToKilos = {
  '8-10': 1.0,
  '10-12': 1.2,
  '12-14': 1.5,
  '14-16': 1.8,
  '16-20': 2.2,
};

function getLocalizedMessage(key, defaultText) {
  if (typeof currentLang !== 'undefined' && currentLang === 'en' && typeof translations !== 'undefined' && translations[key]) {
    return translations[key];
  }
  return defaultText;
}

function setKilosDisplay(serves) {
  const kilos = servingsToKilos[serves] || 0;
  const display = document.getElementById('kilos-display');
  const input = document.getElementById('estimated-kilos-input');
  const template = display.querySelector('[data-i18n="form-kilos-value"]');
  if (template) {
    const base = getLocalizedMessage('form-kilos-value', 'Εκτιμώμενα κιλά: {kilos}');
    template.textContent = base.replace('{kilos}', kilos.toFixed(1));
  }
  input.value = kilos ? `${kilos.toFixed(1)} kg` : '';
}

function cleanPhone(phone) {
  return phone.replace(/[^0-9+]/g, '');
}

function validEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validPhone(phone) {
  const cleaned = cleanPhone(phone);
  return cleaned.length >= 10 && cleaned.length <= 15;
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('cake-order-form');
  const servesSelect = document.getElementById('serves-select');
  const overlaySelect = document.getElementById('overlay-select');
  const photoPrintCheckbox = document.getElementById('photo-print-checkbox');
  const shapeInput = document.getElementById('shape-input');
  const shapeButtons = document.querySelectorAll('.shape-option');
  const numberWrapper = document.getElementById('number-input-wrapper');
  const cakeNumberInput = document.getElementById('cake-number-input');
  const emailInput = document.getElementById('customer-email');
  const phoneInput = document.getElementById('customer-phone');
  const feedback = document.getElementById('form-feedback');

  function toggleNumberInput(shapeValue) {
    const isNumber = shapeValue === 'Number';
    numberWrapper.classList.toggle('hidden', !isNumber);
    cakeNumberInput.required = isNumber;
    if (!isNumber) {
      cakeNumberInput.value = '';
    }
  }

  servesSelect.addEventListener('change', () => setKilosDisplay(servesSelect.value));
  photoPrintCheckbox.addEventListener('change', () => {
    const usingPhoto = photoPrintCheckbox.checked;
    overlaySelect.disabled = usingPhoto;
    if (usingPhoto) {
      overlaySelect.value = '';
    }
  });

  shapeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      shapeButtons.forEach((btn) => btn.classList.remove('selected'));
      button.classList.add('selected');
      shapeInput.value = button.dataset.value;
      feedback.textContent = '';
      toggleNumberInput(button.dataset.value);
    });
  });

  form.addEventListener('submit', (event) => {
    const shape = form.shape.value.trim();
    const flavor = form.flavor.value.trim();
    const serves = servesSelect.value;
    const email = emailInput.value.trim();
    const phone = cleanPhone(phoneInput.value.trim());
    const cakeNumber = cakeNumberInput.value.trim();

    phoneInput.value = phone;

    if (!shape || !flavor || !serves || !email || !phone) {
      feedback.textContent = getLocalizedMessage('form-required', 'Παρακαλώ συμπληρώστε όλα τα απαιτούμενα πεδία.');
      event.preventDefault();
      return;
    }

    if (shape === 'Number' && !cakeNumber) {
      feedback.textContent = getLocalizedMessage('form-number-required', 'Παρακαλώ γράψτε τον αριθμό που θέλετε στην τούρτα.');
      event.preventDefault();
      return;
    }

    if (!validEmail(email)) {
      feedback.textContent = getLocalizedMessage('form-invalid-email', 'Παρακαλώ εισάγετε μια έγκυρη διεύθυνση email.');
      event.preventDefault();
      return;
    }

    if (!validPhone(phone)) {
      feedback.textContent = getLocalizedMessage('form-invalid-phone', 'Παρακαλώ εισάγετε έναν έγκυρο αριθμό τηλεφώνου.');
      event.preventDefault();
      return;
    }

    feedback.textContent = '';
    setKilosDisplay(serves);
  });
});
