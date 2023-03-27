const loginForm = document.querySelector("#login-form")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const btn = document.querySelector("#btn")

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body:JSON.stringify({
        username: "mor_2314",
        password: "83r5^_"
    })
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err))
})