export class User {
  constructor() {
    this.url = `http://localhost:3003/api/`;
    this._id = sessionStorage.getItem('_id');
  }

  get() {
    fetch(`${this.url}/users/${this._id}`, {headers: this.headers})
      .then(r => r.json())
      .catch(err => console.error(err));
  }
}