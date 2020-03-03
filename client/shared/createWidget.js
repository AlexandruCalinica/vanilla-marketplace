/**
 * Function that will generate and append an HTML widget to the DOM tree.
 * @param {String} type - type of html element 
 * @param {String} className - class name reference
 * @param {Function} innerHtml - function that maps arguments to an html content model
 * @param {Node} parent - the parent DOM element where the widget will be apended
 * @param {{}} apiData - Object of key:value pairs used as argument for innerHtml function
 * @param {Function[]} handlers - array of functions used for handling button events
 * @param {String[]} ids - array of unique IDs used for selecting the buttons from the DOM
 * @param {String} group - string that represents the group of widgets/ the familly.
 */
export default function createWidget(type, className, innerHtml, parent, apiData, handlers, ids) {
  const { _id } = apiData;
  const el = document.createElement(type);
  el.className = className;
  el.innerHTML = innerHtml(apiData);
  parent.appendChild(el);

  if (handlers && ids) {
    for (let i = 0; i < ids.length; i ++) {
      let btn = document.getElementById(`${ids[i]}-${_id}`);
      
      btn.addEventListener('click', () => handlers[i](_id));
    };
  }
}