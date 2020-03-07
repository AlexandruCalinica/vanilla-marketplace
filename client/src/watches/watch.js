// getWatch controller
import { Watch } from "../../queries/watches.query.js";
// Cart controller
import { Cart } from '../../queries/cart.query.js';
// html widget body
import { watchDetails } from "./widgets/watchDetails.js";
// dropdown behaviour fix for cart widget
import dropdownFix from '../../shared/dropdownFix.js';
// Sign Out utility
import { signOut } from '../../shared/signOut.js';

(function() {

  // get the watch id from the query params
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  // Get the parent element where the watch details will be appended
  const watchWrapper = document.getElementById('app');
  // Get the parent element where the cart items will be appended
  const cartWrapper = document.getElementById("cart");
  // Get the signOut button element
  const signOutBtn = document.getElementById('sign-out');

  // Instantiate Cart widget
  const cart = new Cart(cartWrapper);
  // Instantiate watch widget
  const watch = new Watch(watchWrapper, ['add'], [cart.add]);

  // fetch watch data and render to DOM
  watch.get(id, watchDetails);
  // fetch initial cart values on page load
  cart.get()

  signOutBtn.addEventListener('click', signOut);

  dropdownFix();

})()