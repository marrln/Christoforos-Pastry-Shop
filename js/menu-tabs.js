// Menu Category Tab System
document.addEventListener('DOMContentLoaded', () => {
  const categoryButtons = document.querySelectorAll('.menu-category-btn');
  const menuSections = document.querySelectorAll('main > section.menu-section');

  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.dataset.category;

      // Remove active class from all buttons and sections
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      menuSections.forEach(section => section.classList.remove('active'));

      // Add active class to clicked button and corresponding section
      button.classList.add('active');
      const activeSection = document.getElementById(category);
      if (activeSection) {
        activeSection.classList.add('active');
      }
    });
  });
});
