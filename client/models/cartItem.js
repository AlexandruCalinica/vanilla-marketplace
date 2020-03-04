export const cartItem = ({ _id, name, price }) => (`
  <span>${name}</span>
  <span>${price.$numberDecimal}</span>
  <span>(1)</span>
  <span>
    <button class="btn" id="remove-${_id}">x</button>
  </span>
`);