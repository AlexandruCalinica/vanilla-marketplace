// User controller
import { User } from './queries/user.js';


// Wrap everything in a IIFE to keep the global scope clean
(function() {

  // variable which will store the email value
  let email = "";
  // variable which will store the password vlue
  let password = "";
  // Get the button element where we'll listen for click events
  let btn = document.getElementById("signin");
  // Get the form element where we'll listen for keyup events
  let form = document.getElementById("login-form");

  // Instantiate User widget
  const user = new User();

  // LOCAL method that gets the value from the event argument
  function handleInput(e) {
    // if the target name attribute is === 'email'
    if (e.target.name === "email") {
      // store the value to the 'email' variable
      email = e.target.value;
    }
    // if the target name attribute is === 'password'
    if (e.target.name === 'password') {
      // store the value to the 'password' variable
      password = e.target.value;
    }
  };

  // attach event listener which will callback the handleInput() method
  form.addEventListener("keyup", handleInput);
  // attach event listener that will trigger the signup() method from the user instance
  btn.addEventListener("click", e => user.signup(e, email, password));

})()
