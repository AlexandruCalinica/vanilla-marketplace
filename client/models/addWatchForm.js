export const addWatchForm = ({ _id }) => (`
<div id="form-add">
  <h2 class="lead mt-4">General</h2>
  <div class="input-group input-group-sm">
    <div class="input-group-prepend">
      <span class="input-group-text" id="name">Name</span>
    </div>
    <input name="name" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">

    <div class="input-group-prepend ml-2">
      <span class="input-group-text" id="price">Price</span>
    </div>
    <input name="price" type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
  </div>
  
  <div class="input-group mt-3">
    <div class="input-group-prepend">
      <span class="input-group-text" id="description">Description</span>
    </div>
    <textarea name="description" class="form-control" aria-label="With textarea"></textarea>
  </div>


  <h1 class="lead mt-4">Info</h1>

  <div class="input-group input-group-sm mt-3" data-group="info">
    <div class="input-group-prepend">
      <span class="input-group-text" id="listingNumber">Listing Number</span>
    </div>
    <input name="listingNumber" type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">

    <div class="input-group-prepend ml-2">
      <span class="input-group-text" id="referenceNumber">Reference Number</span>
    </div>
    <input name="referenceNumber" type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
  </div>  

  <div class="input-group input-group-sm mt-3" data-group="info">
    <div class="input-group-prepend">
      <span class="input-group-text" id="model">Model</span>
    </div>
    <input name="model" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
  
    <div class="input-group-prepend ml-2">
      <span class="input-group-text" id="brand">Brand</span>
    </div>
    <input name="brand" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
  
    <div class="input-group-prepend ml-2">
      <span class="input-group-text" id="year">Year</span>
    </div>
    <input name="year" type="number" max-value="2020" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
  </div>
  
  <div class="input-group input-group-sm mt-3" data-group="info">
    <div class="input-group-prepend">
      <label class="input-group-text" for="gender">Gender</label>
    </div>
    <select name="gender" class="custom-select" id="gender">
      <option selected>Choose...</option>
      <option value="M">Male</option>
      <option value="F">Female</option>
    </select>
  </div>

  <h1 class="lead mt-4">Calibre</h1>

  <div class="input-group input-group-sm mt-3" data-group="calibre">
    <div class="input-group-prepend">
      <label class="input-group-text" for="powerReserve">Power Reserve</label>
    </div>
    <select name="powerReserve" class="custom-select" id="powerReserve">
      <option selected>Choose...</option>
      <option value="auto">auto</option>
      <option value="smart">smart</option>
      <option value="hybrid">hybrid</option>
    </select>

    <div class="input-group-prepend ml-2">
      <label class="input-group-text" for="movement">Movement</label>
    </div>
    <select name="movement" class="custom-select" id="movement">
      <option selected>Choose...</option>
      <option value="manual">manual</option>
      <option value="kinetic">kinetic</option>
      <option value="auto">auto</option>
    </select>

    <div class="input-group-prepend ml-2">
      <span class="input-group-text" id="movementPerCalibre">Movement Per Calibre</span>
    </div>
    <input name="movementPerCalibre" type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
  </div>

  <h1 class="lead mt-4">Case</h1>  

  <div class="input-group input-group-sm mt-3" data-group="case">
    <div class="input-group-prepend">
      <span class="input-group-text" id="material">Material</span>
    </div>
    <input name="material" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">

    <div class="input-group-prepend ml-2">
      <span class="input-group-text" id="diameter">Diameter</span>
    </div>
    <input name="diameter" type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">

    <div class="input-group-prepend ml-2">
      <span class="input-group-text" id="glass">Glass</span>
    </div>
    <input name="glass" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
  </div>

  <h1 class="lead mt-4">Strap</h1>  

  <div class="input-group input-group-sm mt-3" data-group="strap">
    <div class="input-group-prepend">
      <span class="input-group-text" id="material">Material</span>
    </div>
    <input name="material" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">

    <div class="input-group-prepend ml-2">
      <span class="input-group-text" id="braceletColor">Bracelet Color</span>
    </div>
    <input name="braceletColor" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
  </div>

  <button class="btn btn-success mt-3 mb-3" id="submit-form">Post Watch</button>
</div>
`)