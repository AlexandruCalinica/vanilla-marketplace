export class User {
  constructor() {
    this.url = `http://localhost:3003/api`;
    this._id = sessionStorage.getItem('userId');
    this.headers = {
      Authorization: `Bearer ${this.token}`,
      'Content-Type': 'application/json'      
    }
  }

  get() {
    fetch(`${this.url}/users/${this._id}`, {headers: this.headers})
      .then(r => r.json())
      .then(r => console.log(r))
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
}