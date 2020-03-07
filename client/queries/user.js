import createWidget from '../shared/createWidget.js';
import { accountDetails } from '../models/accountDetails.js';
import { addWatchForm } from '../models/addWatchForm.js';

export class User {
  constructor() {
    this.url = `http://localhost:3003/api`;
    this._id = sessionStorage.getItem('userId');
    this.headers = {
      Authorization: `Bearer ${this.token}`,
      'Content-Type': 'application/json'      
    }
  }

  getDetails(parent) {
    fetch(`${this.url}/users/${this._id}`, {headers: this.headers})
      .then(r => r.json())
      .then(data => createWidget(
        'div',
        '',
        accountDetails,
        parent,
        data
      ))
      .catch(err => console.error(err));
  }

  signup(e, email, password) {
    e.preventDefault();
    fetch(`${this.url}/users/login`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({ email: email, password: password })
    })
      .then(r => r.json())
      .then(({ token, userId }) => {
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("userId", userId);
      })
      .then(r => window.location.assign("/client/src/watches/watches.html"))
      .catch(err => console.error(err));
  }

  getAddForm(parent) {
    createWidget(
      'form',
      '',
      addWatchForm,
      parent,
      {_id: this._id}
    )
  }

  create(data) {
    fetch(`${this.url}/users/signup`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data)
    })
      .then(r => r.json())
      .then(() => window.location.assign('/client/index.html'))
      .catch(err => console.error(err));
  }
}