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
  






  
  // Open modal
  document.querySelectorAll('[data-target]').forEach(button => {
      button.addEventListener('click', function () {
          const targetModal = this.getAttribute('data-target');
          document.getElementById(targetModal + 'Overlay').classList.add('active');
          document.getElementById(targetModal).classList.add('active');
      });
  });

  // Close modal
  document.querySelectorAll('.close-modal').forEach(button => {
      button.addEventListener('click', function () {
          this.closest('.modal-overlay').classList.remove('active');
          this.closest('.modal').classList.remove('active');
      });
  });

  // Close modal by clicking outside the modal
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', function (e) {
          if (e.target === overlay) {
              overlay.classList.remove('active');
              overlay.querySelector('.modal').classList.remove('active');
          }
      });
  });