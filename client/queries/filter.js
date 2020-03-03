import createWidget from '../shared/createWidget.js';
import { filterItem } from '../models/filterItem.js';

export class Filter {
  constructor(parent) {
    this.parent = parent;
    this.url = `http://localhost:3003/api/watches`;
    this.token = sessionStorage.getItem("token");
    this.headers = {
      Authorization: `Bearer ${this.token}`,
      'Content-Type': 'application/json'
    };
    this.data = [];
    this.brands = [];
    this.counts = [];
  }

  getNames() {
    fetch(`${this.url}/brands/list`, {headers: this.headers})
    .then(r => r.json())
    .then(r => this.brands = r.brands)
    .catch(err => console.error(err));
  }

  countNames(arr = [], data = []) {
    let counts = [];
    let result = [];
    let len = data.length; 

    arr.forEach(el => {
      let counter = 0;
      for (let i = 0; i < len; i ++) {
        data[i].info.brand === el ? counter ++ : null
      }
      counts.push(counter);
    });

    for (let j = 0; j < counts.length; j ++) {
      result.push({ brand: arr[j], count: counts[j] })
    }
    return result;
  }

  use() {
    fetch(this.url, {headers: this.headers})
    .then(r => r.json())
    .then(r => r.watches)
    .then(r => this.countNames(this.brands, r))
    .then(r => r.map(data =>
      createWidget(
        'div',
        'd-flex flex-column',
        filterItem,
        this.parent,
        data
      )
    ))
    .catch(err => console.error(err));
  }

  apply(fn) {
    
  }
}