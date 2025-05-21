// Placeholder for form interaction
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  this.reset();
});
