// User controller
import { User } from '../../queries/user.js';
// Watch controller
import { Watch } from '../../queries/watches.query.js';
// Cart controller
import { Cart } from '../../queries/cart.query.js';
// Dropdown fix for cart widget
import dropdownFix from '../../shared/dropdownFix.js';
// Get the signOut button element
const signOutBtn = document.getElementById('sign-out');

if (sessionStorage.getItem('token') && sessionStorage.getItem('userId')) {

  (function() {

    let formValues = {
      info: {},
      calibre: {},
      case: {},
      strap: {}
    };

    // Get the parent element where the user details will be appended
    const detailsWrapper = document.getElementById('v-pills-account');
    const addFormWrapper = document.getElementById('v-pills-post');
    // Get the parent element where the cart items will be appended
    const cartWrapper = document.getElementById("cart");
    // Get the signOut button element
    const signOutBtn = document.getElementById('sign-out');

    // Instantiate the User
    const user = new User();
    // Instantiate de Watch
    const watch = new Watch();
    // Instantiate Cart widget
    const cart = new Cart(cartWrapper);

      // fetch initial cart values on page load
      cart.get()

    // Render the user details widget to the DOM
    user.getDetails(detailsWrapper);
    user.getAddForm(addFormWrapper);


    const addForm = document.getElementById('form-add');
    const postBtn = document.getElementById('submit-form');

    const handleInput = e => {
      if (e.target.parentNode.getAttribute('data-group') === 'info') {
        formValues = {
          ...formValues,
          info: { 
            ...formValues.info,
            [e.target.name]: e.target.type === 'number' ? parseFloat(e.target.value) : e.target.value
          }
        }
      } else if (e.target.parentNode.getAttribute('data-group') === 'calibre') {
        formValues = {
          ...formValues,
          calibre: { 
            ...formValues.calibre,
            [e.target.name]: e.target.type === 'number' ? parseFloat(e.target.value) : e.target.value
          }
        }
      } else if (e.target.parentNode.getAttribute('data-group') === 'case') {
        formValues = {
          ...formValues,
          case: { 
            ...formValues.case,
            [e.target.name]: e.target.type === 'number' ? parseFloat(e.target.value) : e.target.value
          }
        }
      } else if (e.target.parentNode.getAttribute('data-group') === 'strap') {
        formValues = {
          ...formValues,
          strap: { 
            ...formValues.strap,
            [e.target.name]: e.target.type === 'number' ? parseFloat(e.target.value) : e.target.value
          }
        }
      } else {
        formValues = {
          ...formValues,
          [e.target.name]: e.target.type === 'number' ? parseFloat(e.target.value) : e.target.value
        };
      }
    };

    const handlePost = e => { 
      e.preventDefault();
      watch.create(formValues);
      console.log(formValues) 
    };

    addForm.addEventListener('keyup', handleInput);
    postBtn.addEventListener('click', handlePost);
    signOutBtn.addEventListener('click', signOut);

    // Tab click behaviour
    $(function () {
      $('#v-pills-tab li:last-child a').tab('show')
    })  

    dropdownFix();

  })()

} else {
  window.location.assign('/client/index.html');
}