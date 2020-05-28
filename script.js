const form = document.querySelector("form");
const inputControl = document.querySelectorAll(".input-control");
const errorText = document.querySelectorAll(".error-text");

const inputFields = [
  form["f-name"],
  form["l-name"],
  form["email"],
  form["password"],
];

inputFields.forEach((input, index) => {
  input.addEventListener("input", () => {
    errorText[index].classList.remove("active");
    errorText[index].textContent = "";
    inputControl[index].classList.remove("input-error");
    inputFields[2].style.color = "#757575";
  });
});

form.addEventListener("submit", (event) => {
  if (!isValidTextInput(inputFields[0].value)) {
    errorText[0].classList.add("active");
    errorText[0].textContent = "First Name cannot be empty";
    inputControl[0].classList.add("input-error");
    event.preventDefault();
  }

  if (!isValidTextInput(inputFields[1].value)) {
    errorText[1].classList.add("active");
    errorText[1].textContent = "Last Name cannot be empty";
    inputControl[1].classList.add("input-error");
    event.preventDefault();
  }

  if (!isValidEmailInput(inputFields[2])) {
    errorText[2].classList.add("active");
    errorText[2].textContent = "Looks like it is not an email";
    inputControl[2].classList.add("input-error");
    inputFields[2].style.color = "#ff7a7a";
    event.preventDefault();
  }

  if (!isValidTextInput(inputFields[3].value)) {
    errorText[3].classList.add("active");
    errorText[3].textContent = "Password cannot be empty";
    inputControl[3].classList.add("input-error");
    event.preventDefault();
  }
});

function validateFormBeforeTheSubmit() {}

function isValidTextInput(value) {
  if (value.length > 0) {
    return true;
  }
  return false;
}

function isValidEmailInput(email) {
  if (email.value && email.validity.valid) {
    return true;
  }
  return false;
}
