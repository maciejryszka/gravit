const preferredContact = document.querySelector(
  ".form__select--preferred-contact"
);
const emailLabel = document.querySelector(".form__label--email");
const phoneLabel = document.querySelector(".form__label--phone");
const emailInput = document.querySelector(".form__input--email");
const phoneInput = document.querySelector(".form__input--phone");

preferredContact.addEventListener("change", () => {
  if (preferredContact.value === "Telefon") {
    emailLabel.style.display = "none";
    emailInput.style.display = "none";
    emailInput.removeAttribute("required");
    phoneLabel.style.display = "block";
    phoneInput.style.display = "block";
    phoneInput.setAttribute("required", "");
  } else if (preferredContact.value === "Email") {
    phoneLabel.style.display = "none";
    phoneInput.style.display = "none";
    phoneInput.removeAttribute("required");
    emailLabel.style.display = "block";
    emailInput.style.display = "block";
    emailInput.setAttribute("required", "");
  }
});
