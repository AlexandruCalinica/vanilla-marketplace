// getWatch query
import { Watch } from "../../queries/watches.query.js";
// html widget body
import { watchDetails } from "./widgets/watchDetails.js";

(function() {
  // get the watch id from the query params
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  // parent container
  const parent = document.getElementById('app');

  // Instantiate watch widget
  const watch = new Watch();
  // fetch watch data and render to DOM
  watch.get(id, parent, watchDetails);
})()