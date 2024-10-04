// Smooth Scrolling Function
function scrollToSection(sectionId) {
  document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Form Submission Handling
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  // Event Listener for form submission
  contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form from reloading the page

      // Extract values from the form
      const name = document.getElementById("name").value;
      const number = document.getElementById("number").value;
      const email = document.getElementById("email").value;
      const bikeModel = document.getElementById("bike").value;
      const address = document.getElementById("address").value;
      const services = document.getElementById("services").value;

      // Display a confirmation message to the user
      alert(`Thank you, ${name}! We have received your request for the following service: ${services}. Our team will reach out to you at ${email} or ${number}.`);

      // Clear the form fields
      contactForm.reset();
  });

  // Navigation bar scroll effect
  window.addEventListener("scroll", function () {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
      } else {
          navbar.classList.remove("scrolled");
      }
  });
});
