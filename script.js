document.addEventListener("DOMContentLoaded", () => {
    const slideSection = document.querySelector(".slide-section");
    const offset = 100; // Adjust this value to control when the animation triggers
  
    function checkSlide() {
      const sectionTop = slideSection.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight - offset) {
        slideSection.classList.add("slide-animate");
      }
    }
  
    // Attach the scroll event listener
    window.addEventListener("scroll", checkSlide);
  
    // Check slide initially in case the section is already visible
    checkSlide();
  });
  
  // script.js
const userIcon = document.getElementById("user");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close");

userIcon.addEventListener("click", () => {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
