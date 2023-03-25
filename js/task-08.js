const form = document.querySelector(".login-form");
// console.log(form)
form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  // console.log(event);
  const { email, password } = event.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    return alert("Будь ласка, заповніть всі поля!");
  }
  const user = { email: email.value, Password: password.value };
  console.log(user);
  event.currentTarget.reset();
}
