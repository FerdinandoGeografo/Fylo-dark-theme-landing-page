const ctaForm = document.querySelector(".cta-form");
const ctaInput = document.querySelector(".cta-input");
const ctaError = document.querySelector(".cta-error");

ctaForm.addEventListener("submit", (event) => {
  if (!isValidEmail(ctaInput.value)) {
    event.preventDefault();
    ctaError.textContent = "Error, please check your email";
  } else {
    ctaError.textContent = "";
  }
});

function isValidEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
}

//Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");

    if (!href.startsWith("#")) return;

    e.preventDefault();
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});
