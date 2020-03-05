export const watchDetails = (watch) => (`
<div class="row">
  <div class="col-md-8">
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="lead">Price</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="lead">Description</span>
        ${watch.description}
      </li>
      <h6 class="lead pt-3"><small>INFO</small></h6>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="lead">Listing Number</span>
        ${watch.info.listingNumber}
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="lead">Reference Number</span>
        ${watch.info.referenceNumber}
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="lead">Model</span>
        ${watch.info.model}
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="lead">Brand</span>
        ${watch.info.brand}
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="lead">Year</span>
        ${watch.info.year}
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="lead">Gender</span>
        ${watch.info.gender}
      </li>
      <h6 class="lead pt-3"><small>CALIBRE</small></h6>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="lead">Power Reserve</span>
        ${watch.calibre.powerReserve}
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="lead">Movement</span>
        ${watch.calibre.movement}
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="lead">Movement/Calibre</span>
        ${watch.calibre.movementPerCalibre}
      </li>
      <h6 class="lead pt-3"><small>CASE</small></h6>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="lead">Material</span>
        ${watch.case.material}
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="lead">Diameter</span>
        ${watch.case.diameter}
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="lead">Glass</span>
        ${watch.case.glass}
      </li>
      <h6 class="lead pt-3"><small>STRAP</small></h6>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="lead">Material</span>
        ${watch.strap.material}
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="lead">Bracelet Color</span>
        ${watch.strap.braceletColor}
      </li>
    </ul>
  </div>
  <div class="col-md-4">
    <div class="card">
      <div class="card-body">
        <h1 class="lead">${watch.name}</h1>
        <h1 class="display-4">${watch.price.$numberDecimal}€</h1>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <button class="btn btn-primary" id="add-${watch._id}">Add to cart</button>
      </div>
    </div>
  </div>
</div>
`);