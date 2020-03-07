// Cart controller
import { Cart } from '../../queries/cart.query.js';
// Watches controller
import { Watches } from "../../queries/watches.query.js";
// Filter controller
import { Filter } from '../../queries/filter.js';
// Dropdown fix for cart widget
import dropdownFix from '../../shared/dropdownFix.js';
// Sign Out utility
import { signOut } from '../../shared/signOut.js';

if (sessionStorage.getItem('token') && sessionStorage.getItem('userId')) {
  // Wrap everything in a IIFE to keep the global scope clean
  (function() {

    // Get the parent element where the list widgets will be appended
    const listWrapp = document.getElementById("watches-wrapp");
    // Get the parent element where the cart items will be appended
    const cartWrapper = document.getElementById("cart");
    // Get the parent element where the filter items will be appended
    const filterWrapp = document.getElementById('collapseOne');
    // Get the signOut button element
    const signOutBtn = document.getElementById('sign-out');

    // Instantiate Cart widget
    const cart = new Cart(cartWrapper);
    // Instantiate Filter widget
    const filter = new Filter(filterWrapp);


    // LOCAL Event handler 
    const showDetails = id => window.location.assign(`/client/src/watches/watch.html?id=${id}`);
    // Array of event handlers
    const handlers = [ showDetails, cart.add ];
    // IDs used for targeting elements prior attaching event handlers
    const IDs = [ 'details', 'add' ];

    // Instantiate Watches list widget
    const watches = new Watches(listWrapp, handlers, IDs);

    // Instantiate URL utility
    const urlParams = new URLSearchParams(window.location.search);
    // Get '?search=' query param value from the URL
    const searchString = urlParams.get('search');
    // Get iterator containing filter params keys
    const filterEntries = urlParams.keys();
    // empty array to store the keys
    let filterKeys = [];
    // iterate and push the keys to the emoty array
    for (let key of filterEntries) {
      filterKeys.push(key);
    }

    // method to get distinct brand names from the db to populate the filter widget
    filter.getNames();
    // append the filter widget to the DOM
    filter.use();
    // fetch initial cart values on page load
    cart.get()


    // RENDER the watches widget
    if (searchString) {
      // search for a specific term, fetch a list of all occurences and render to DOM
      watches.search(searchString);
    } else if (filterKeys[0] !== 'search') {
      // fetch a filtered list of watches and render to DOM
      watches.filter(filterKeys);
    } else {
      // fetch a list of all watches and render to DOM
      watches.getAll();
    }


    // add on hover behaviour for watch card buttons
    const onHover = e => {
      let els = e.target.querySelectorAll('a');
      els.forEach(el => el.classList.remove('hidden'));
    }
    // add on leave behaviour for watch card buttons
    const onLeave = e => {
      let els = e.target.querySelectorAll('a');
      els.forEach(el => el.classList.add('hidden'));
    }
    // attach event listeners to the watch cards list that will callback above methods
    listWrapp.addEventListener('mouseover', onHover);
    listWrapp.addEventListener('mouseleave', onLeave);

    signOutBtn.addEventListener('click', signOut);

    dropdownFix();

  })();

} else {
  window.location.assign('/client/index.html');
}

