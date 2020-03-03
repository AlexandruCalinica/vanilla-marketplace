// addToCart mutation — event handler
import { Cart } from '../../queries/cart.query.js';
// getWatches query
import { Watches } from "../../queries/watches.query.js";
// use Filter widget
import { Filter } from '../../queries/filter.js';


// Wrap everything in a IIFE so that we don't polute the global scope
(function() {

  // Get the parent element where the list widgets will be appended
  const listWrapp = document.getElementById("watches-wrapp");
  // Get the parent element where the cart items will be appended
  const cartWrapper = document.getElementById("cart");
  // Get the parent element where the filter items will be appended
  const filterWrapp = document.getElementById('collapseOne');



  // Instantiate Cart widget
  const cart = new Cart(cartWrapper);
  // Instantiate Filter widget
  const filter = new Filter(filterWrapp);

  // Event handler 
  const showDetails = id => window.location.assign(`/src/watches/watch.html?id=${id}`);
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
  // empty array to store 
  let filterKeys = [];
  for (let key of filterEntries) {
    filterKeys.push(key);
  }


  filter.getNames();
  filter.use();

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


  // add on hover behaviour for every watch card buttons
  const onHover = e => {
    let els = e.target.querySelectorAll('a');
    els.forEach(el => el.classList.remove('hidden'));
  }
  const onLeave = e => {
    let els = e.target.querySelectorAll('a');
    els.forEach(el => el.classList.add('hidden'));
  }
  listWrapp.addEventListener('mouseover', onHover);
  listWrapp.addEventListener('mouseleave', onLeave);

})();

