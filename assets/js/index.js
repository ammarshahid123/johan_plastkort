// JavaScript to handle the preloader and show the main content after 4 seconds
window.onload = () => {
    // Wait for 4 seconds before hiding the preloader and displaying the main content
    setTimeout(() => {
        document.body.classList.add('show-content');
    }, 3000); // 4000ms = 4 seconds
};



// Js to handle the back to top button
"use strict";
// scrolling for top
const scroller = document.getElementById("progress-scroll");
if (scroller) {
    scroller.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
document.addEventListener("DOMContentLoaded", () => {
    "use strict";
    // Scroll back to top
    const progressPath = document.querySelector(".progress-wrap path");
    if (progressPath) {
        const pathLength = progressPath.getTotalLength();
        progressPath.style.transition = "none";
        progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
        progressPath.style.strokeDashoffset = `${pathLength}`;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = "stroke-dashoffset 10ms linear";
        const updateProgress = () => {
            const scroll = window.scrollY || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            const progress = pathLength - (scroll * pathLength) / height;
            progressPath.style.strokeDashoffset = `${progress}`;
        };
        window.addEventListener("scroll", updateProgress);
        const offset = 50;
        window.addEventListener("scroll", () => {
            if (window.scrollY > offset) {
                const progressWrap = document.querySelector(".progress-wrap");
                if (progressWrap) {
                    progressWrap.classList.add("active-progress");
                }
            }
            else {
                const progressWrap = document.querySelector(".progress-wrap");
                if (progressWrap) {
                    progressWrap.classList.remove("active-progress");
                }
            }
        });
    }
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
  