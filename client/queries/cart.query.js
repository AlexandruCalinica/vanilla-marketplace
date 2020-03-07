import createWidget from '../shared/createWidget.js';
import { cartItem } from '../models/cartItem.js';

export class Cart {
  constructor(parent) {
    this.url = `http://localhost:3003/api/users`;
    this.token = sessionStorage.getItem("token");
    this.userId = sessionStorage.getItem('userId');
    this.counter = document.getElementById('cart-counter');
    this.parent = parent;
    this.currentIDList = [];
    this.headers = {
      Authorization: `Bearer ${this.token}`,
      'Content-Type': 'application/json'      
    }
  }

  // function that finds an index of a cart item by _id value
  getIndex = itemId => { 
    let arr = this.currentIDList;
    let length = arr.length;
    let res = -1;
    if (length > -1) {
      for (let i = 0; i < length; i ++) {
        if (arr[i].item === itemId) res = i;
      }
    }
    return res;
  }

  // method for emptying the parent element before refreshing the list and re-rendering
  clearDOM = () => this.parent.innerHTML = '';

  // method for increasing the amount value by 1
  increaseAmount = itemId => {
    let index = this.getIndex(itemId);
    this.currentIDList[index].amount += 1;
  }
  // method for decreasing the amount value by 1
  decreaseAmount = itemId => {
    let index = this.getIndex(itemId);
    if (this.currentIDList[index].amount > 1) {
      this.currentIDList[index].amount -= 1;
    }
  }

  
  minus = itemId => {
    this.decreaseAmount(itemId);
    fetch(`${this.url}/${this.userId}`, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify({ 
        _id: this.userId, 
        cart: this.currentIDList
      })
    })
      .then(r => r.json())
      .then(() => {
        // get the updated cart list from the server and render it to the DOM
        this.get();
      })
      .catch(err => console.log(err));
  }

  plus = itemId => {
    this.increaseAmount(itemId);
    fetch(`${this.url}/${this.userId}`, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify({ 
        _id: this.userId, 
        cart: this.currentIDList
      })
    })
      .then(r => r.json())
      .then(() => {
        // get the updated cart list from the server and render it to the DOM
        this.get();
      })
      .catch(err => console.log(err));
  }

  // method to set and display the counter value
  count = () => {
    if (this.currentIDList.length > 0) {
      // if there is at least an item in the cart list display the counter
      this.counter.style.visibility = 'visible';
      // set the counter value
      this.counter.innerText = this.currentIDList.length;
    } else {
      // if there is no item in the cart list hide the counter element
      this.counter.style.visibility = 'hidden';
    }
  }

  

  // method for adding items to the cart
  add = (itemId) => {
    // check if the item already exists in the list
    if (this.getIndex(itemId) !== -1) {
      // if it exists => update just the 'amount' property
      this.increaseAmount(itemId);
    }
    // PUT request to the server for updating a user's cart list
    fetch(`${this.url}/${this.userId}`, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify({ 
        _id: this.userId, 
        // insert a new cart item along with the existing cart list if the item is not present in the cart list
        cart: (this.getIndex(itemId) !== -1) ?  this.currentIDList : [...this.currentIDList, { item: itemId, amount: 1 }]
      })
    })
      .then(r => r.json())
      .then(() => {
        // get the updated cart list from the server and render it to the DOM
        this.get();
        // update the counter element's value to resemble the freshly fetched list length
        this.count();
      })
      .catch(err => console.log(err));
  }


  // method to remove an item from the cart
  remove = (itemId) => {
    // filter the cart list to remove the item with the given 'itemId'
    this.currentIDList = this.currentIDList.filter(i => i.item !== itemId);
    // PUT request to the server for updating the user cart
    fetch(`${this.url}/${this.userId}`, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify({
        _id: this.userId, 
        cart: this.currentIDList
      })
    })
      .then(r => r.json())
      .then(() => {
        // get the updated cart list from the server and render it to the DOM
        this.get();
      })
      .catch(err => console.log(err));
  }


  // method for getting a user's cart
  get() {
    // GET request to the server for obtaining a list of user's cart items
    fetch(`${this.url}/${this.userId}/cart`, {headers: this.headers})
      .then(r => r.json())
      .then(r => {
        // map the response to a new array that we'll use as payload for PUT requests
        // when adding, removing items or updating amounts
        this.currentIDList = r.map(i => ({item: i.item._id, amount: i.amount}));
        // clear the DOM by default prior to generating and appending existing items in the DOM
        this.clearDOM();
        // return the response for the next .then()
        return r;
      })
      .then(data => data.map(el => 
        // map the response to this function call in order to generate cart item widgets
        // attach event handlers and append to DOM
        createWidget(
          'div',
          'd-flex justify-content-between align-items-baseline p-4',
          cartItem,
          this.parent,
          el,
          [this.remove, this.minus, this.plus],
          ['remove', 'minus', 'plus']
      )))
      // update the counter element's value to resemble the freshly fetched list length
      .then(() => this.count())
      .catch(err => console.error(err));
  }
}