// JavaScript to handle the preloader and show the main content after 4 seconds
window.onload = () => {
    // Wait for 4 seconds before hiding the preloader and displaying the main content
    setTimeout(() => {
        document.body.classList.add('show-content');
    }, 3000); // 4000ms = 4 seconds
};