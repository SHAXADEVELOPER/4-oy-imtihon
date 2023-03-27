const registerForm = document.querySelector("#register-form")
const nameInput = document.querySelector("#username")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")


registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch("https://fakestoreapi.com/users", {
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body:JSON.stringify({
      "email": "john@gmail.com",
      "username": "johnd",
      "password": "m38rmF$",
      "name": {
      "firstname": "john",
      "lastname": "doe"
      }
    })
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err))
})