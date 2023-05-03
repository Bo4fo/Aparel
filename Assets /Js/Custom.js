  // JavaScript code for mobile view functionality
  const mobileToggle = document.querySelector('.navbar-toggler');
  const mobileMenu = document.querySelector('.navbar-collapse');

  mobileToggle.addEventListener('click', function () {
      mobileMenu.classList.toggle('show');
  });