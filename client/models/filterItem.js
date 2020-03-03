export const filterItem = ({ brand, count }) => (`
  <div class="form-check-inline mr-0">
    <input class="form-check-input" type="checkbox" name="${brand}" value="1" id="${brand}-checkbox">
    <label class="form-check-label" for="${brand}-checkbox">
      <small>${brand}</small>
    </label>
    <span class="flex-grow-1"></span>
    <p class="m-0"><small>(${count})</small></p>
  </div>
`)