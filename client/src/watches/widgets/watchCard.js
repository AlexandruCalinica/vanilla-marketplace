const WatchCard = ({ _id, image, name, price }) => (`
  <div class="card-img-top cardImg" id="img-${_id}" style="background: url('${image}'); background-size: cover">
    <div class="overlay p-5">
      <a class="btn btn-outline-warning mb-2 w-100 hidden" id="details-${_id}"><small><b>DETAILS</b></small></a>
      <a class="btn btn-success w-100 hidden" id="add-${_id}"><small><b>ADD TO CART</b></small></a>
    </div>
  </div>
  <div class="card-body">
    <h6 class="card-title lead">${name}</h6>
    <h3 class="card-subtitle">${price.$numberDecimal}€</h3>
  </div>
`);

export default WatchCard;