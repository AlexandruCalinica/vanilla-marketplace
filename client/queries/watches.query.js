import createWidget from "../shared/createWidget.js";
import watchesCard from "../src/watches/widgets/watchCard.js";

export class Watch {
  constructor(parent, handlers, IDs) {
    this.url = `http://localhost:3003/api/watches`;
    this.token = sessionStorage.getItem("token");
    this.headers = {
      Authorization: `Bearer ${this.token}`,
      'Content-Type': 'application/json'
    }
    this.parent = parent;
    this.handlers = handlers;
    this.IDs = IDs;
  }

  get(id, parent, widget) {
    fetch(`${this.url}/${id}`, {headers: this.headers})
    .then(r => r.json())
    .then(data => createWidget(
      'div',
      'watch-details',
      widget,
      parent,
      data
    ))
    .catch(err => console.error(err));
  }

  create(data) {
    fetch(this.url, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data)
    })
    .then(r => r.json())
    .catch(err => console.error(err));
  }

  delete(id) {
    fetch(this.url, {
      method: 'DELETE',
      headers: this.headers,
      body: JSON.stringify({ id })
    })
    .then(r => r.json())
    .catch(err => console.error(err));
  }

}


export class Watches extends Watch {
  constructor(parent, handlers, IDs) {
    super(parent, handlers, IDs);
  }

  getAll() {
    fetch(this.url, {headers: this.headers})
    .then(r => r.json())
    .then(r => r.watches.map(data =>
      createWidget(
        'div',
        'card border-0 rounded-0 cardEl',
        watchesCard,
        this.parent,
        data,
        this.handlers,
        this.IDs
      )
    ))
    .catch(err => console.error(err));
  }

  search(query) {
    fetch(`${this.url}?search=${query}`, {headers: this.headers})
      .then(r => r.json())
      .then(r => r.watches.map(data =>
        createWidget(
          'div',
          'card border-0 rounded-0 cardEl',
          watchesCard,
          this.parent,
          data,
          this.handlers,
          this.IDs
        )
      ))
      .catch(err => console.error(err));
  }

  filter(queries = []) {
    let queryString = queries.join('+')
    fetch(`${this.url}?filter=${queryString}`, {headers: this.headers})
      .then(r => r.json())
      .then(r => r.watches.map(data =>
        createWidget(
          'div',
          'card border-0 rounded-0 cardEl',
          watchesCard,
          this.parent,
          data,
          this.handlers,
          this.IDs
        )
      ))
      .catch(err => console.error(err));
  }
}