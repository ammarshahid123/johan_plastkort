document.addEventListener('DOMContentLoaded', () => {
    // Wait for 4 seconds before hiding the preloader and displaying the main content
    setTimeout(() => {
        document.body.classList.add('show-content');
    }, 4000); // 4000ms = 4 seconds
});


document.querySelector('.dropdown-toggle').addEventListener('click', function () {
    const dropdown = this.closest('.dropdown');
    dropdown.classList.toggle('active');
  });
  
  // Close the dropdown if clicked outside
  document.addEventListener('click', function (event) {
    const dropdown = document.querySelector('.dropdown');
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove('active');
    }
  });
  