import createWidget from '../shared/createWidget.js';
import { cartItem } from '../models/cartItem.js';

export class Cart {
  constructor(parent, userId) {
    this.url = `http://localhost:3003/api/users`;
    this.token = sessionStorage.getItem("token");
    this.parent = parent;
    this.userId = userId;
    this.localList = [...parent.children].map(i => i.innerText);
    this.counter = document.getElementById('cart-counter');
    this.headers = {
      Authorization: `Bearer ${this.token}`,
      'Content-Type': 'application/json'      
    }
  }

  // function that checks if an id exists in the array list
  checkId = itemId => this.localList.find(i => i === itemId);

  // method to increment counter value
  incrementCounter = () => {
    this.counter.style.visibility = 'visible';
    let n = parseInt(this.counter.innerText);
    this.counter.innerText = `${n + 1}`;
  }

  // method to decrement counter value
  decrementCounter = () => {
    this.counter.style.visibility = 'visible';
    let n = parseInt(this.counter.innerText);
    this.counter.innerText = `${n + 1}`;
  }

  // method for adding items to the cart
  add = (itemId, handlers, IDs) => {
    fetch(`${this.url}/${this.userId}`, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify({ 
        _id: this.userId, 
        cart: [...this.currentCart, itemId]
      })
    })
      .then(r => r.json())
      .then(r => console.log(r.cart))
      .then(data => {
        createWidget(
          'li',
          'd-flex justify-content-between p-4',
          cartItem,
          this.parent,
          data,
          handlers,
          IDs
        );
        this.incrementCounter();
      })
      .catch(err => console.log(err))
  }

  // method to remove an item from the cart
  remove = (itemId) => {
    fetch(this.url, {
      method: 'DELETE',
      headers: this.headers,
      body: JSON.stringify({ itemId })
    })
    .then(r => r.json())
    .catch(err => console.error(err));
  }
}