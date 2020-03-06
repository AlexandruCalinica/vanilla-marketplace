export const cartItem = ({ item: { _id, name, price }, amount }) => (`
  <span>
    <button class="btn" id="remove-${_id}">
    <i class="far fa-minus-square"></i>
    </button>
  </span>
  <span>${name}</span>
  <span>${price.$numberDecimal}</span>
  <span>
    <a><i class="fas fa-minus-circle"></i></a>
    ${amount}
    <a><i class="fas fa-plus-circle"></i></a>
  </span>
`);