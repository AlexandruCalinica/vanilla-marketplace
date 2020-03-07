import { User } from '../../queries/user.js';

(function() {

  let formValues = {
    cart: []
  };

  const user = new User();

  const handleInput = e => {
    formValues = {
      ...formValues,
      [e.target.name]: e.target.value
    }
  }

  const handleSubmit = () => user.create(formValues);

  const container = document.getElementById('signup-form');
  const submitBtn = document.getElementById('submit');
  container.addEventListener('keyup', handleInput);
  submitBtn.addEventListener('click', handleSubmit);

})()