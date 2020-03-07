export const cartItem = ({ item: { _id, name, price, image }, amount }) => (`
  <span>
    <button class="btn" id="remove-${_id}">
    <i class="far fa-minus-square"></i>
    </button>
  </span>
  <span><img src="${image}" width="60"></span>
  <span>${name}</span>
  <span>${price.$numberDecimal}€</span>
  <span>
    <button class="btn" id="minus-${_id}"><i class="fas fa-minus-circle"></i></button>
    ${amount}
    <button class="btn" id="plus-${_id}"><i class="fas fa-plus-circle"></i></button>
  </span>
`);