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

  clearDOM() {
    this.parent.innerHTML = '';
  }

  // method for getting a user's cart
  get() {
    fetch(`${this.url}/${this.userId}/cart`, {headers: this.headers})
      .then(r => r.json())
      .then(r => {
        this.currentIDList = r.map(i => i._id);
        this.clearDOM();
        return r;
      })
      .then(data => data.map(el => 
        createWidget(
          'li',
          'd-flex justify-content-between p-4',
          cartItem,
          this.parent,
          el,
          [this.remove],
          ['remove']
      )))
      .catch(err => console.error(err));
  }

  // method for adding items to the cart
  add = (itemId) => {
    fetch(`${this.url}/${this.userId}`, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify({ 
        _id: this.userId, 
        cart: [...this.currentIDList, itemId]
      })
    })
      .then(r => r.json())
      .then(r => {
        this.get();
      })
      .catch(err => console.log(err))
  }

  // method to remove an item from the cart
  remove = (itemId) => {
    console.log(itemId);
    console.log(this.currentIDList);
    this.currentIDList = this.currentIDList.filter(id => id !== itemId);
    console.log(this.currentIDList);
    fetch(`${this.url}/${this.userId}`, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify({ 
        _id: this.userId, 
        cart: this.currentIDList
      })
    })
      .then(r => r.json())
      .then(r => {
        this.get();
      })
      .catch(err => console.log(err))
  }
}