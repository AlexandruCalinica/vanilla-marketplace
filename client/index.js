let email = "";
let password = "";

let link = "http://localhost:3003";
let btn = document.getElementById("signin");
let form = document.getElementById("login-form");
let inputs = Object.values(document.querySelectorAll("input"));

form.addEventListener("keyup", handleInput);
btn.addEventListener("click", e => {
  e.preventDefault();
  signup(link, email, password);
});

function handleInput(e) {
  if (e.target.name === "email") {
    email = e.target.value;
  } else {
    password = e.target.value;
  }
}

function signup(url, email, password) {
  fetch(`${url}/api/auth/login`, {
    method: "POST",
    body: JSON.stringify({ email, password })
  })
    .then(r => r.json())
    .then(({ token }) => sessionStorage.setItem("token", token))
    .then(r => window.location.assign("/src/watches/watches.html"))
    .catch(err => console.error(err));
}
