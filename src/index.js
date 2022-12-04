let MOUSE_VISITED_CLASSNAME = 'crx_mouse_visited';
let clickedElement;
let prevDOM = null;
let flag = 0;

let getSelector = function (el) {
  if (el.tagName.toLowerCase() == "html")
    return "html";
  var str = el.tagName.toLowerCase();
  str += (el.id != "") ? "#" + el.id : "";
  if (el.className) {
    var classes = el.className.trim().split(/\s+/);
    for (var i = 0; i < classes.length; i++) {
      str += "." + classes[i]
    }
  }

  if (document.querySelectorAll(str).length == 1) return str;

  return getSelector(el.parentNode) + " > " + str;
}

let mouseEvent = function (e) {
  var srcElement = e.srcElement;
  if (true) {
    if (prevDOM != null) {
      prevDOM.classList.remove(MOUSE_VISITED_CLASSNAME);
    }
    srcElement.classList.add(MOUSE_VISITED_CLASSNAME);
    prevDOM = srcElement;
  }
};

document.addEventListener('click', function (e) {
  clickedElement = e.target;
  let selector = clickedElement.parentNode.tagName + "." + clickedElement.parentNode.classList.value.toString().replaceAll(" ", ",") + ' ' + clickedElement.tagName + "." + clickedElement.classList.value.toString().replaceAll("crx_mouse_visited", "").replaceAll(" ", ",");

  console.log(selector);
}, false);

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.action === "START") {
    console.log('msg');
  }
});