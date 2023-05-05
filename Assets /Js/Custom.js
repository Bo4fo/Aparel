// JavaScript code for mobile view functionality
const mobileToggle = document.querySelector('.navbar-toggler');
const mobileMenu = document.querySelector('.navbar-collapse');

mobileToggle.addEventListener('click', function () {
    mobileMenu.classList.toggle('show');
});

document.addEventListener('click', function (event) {
    const targetElement = event.target;
    if (!targetElement.closest('.navbar-collapse') && !targetElement.closest('.navbar-toggler')) {
        mobileMenu.classList.remove('show');
    }
});
    // Get the modal
    var modal = document.getElementById("myModal");

    // Open the modal
    function openModal() {
      modal.style.display = "block";
    }

    // Close the modal
    function closeModal() {
      modal.style.display = "none";
    }

    // Add to cart
    function addToCart() {
      var quantity = document.getElementById("quantitySelect").value;
      // Perform add to cart functionality
      // You can send an AJAX request to the server here to add the item to the cart
      console.log("Added " + quantity + " items to cart.");
      closeModal();
    }