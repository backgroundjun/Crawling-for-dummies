let MOUSE_VISITED_CLASSNAME = 'crx_mouse_visited';
let clickedElement;
let prevDOM = null;
let flag = 0;
let mouseEventListener



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



let selectorToJson = (selector, doc) => {
  let elements = doc.querySelectorAll(selector);

  let data = [];
  let result = [];
  for(let i = 0; i<elements.length; i++) {
    let tmp = new Object();
    let attr = new Object();
    tmp.element = elements[i].tagName;
    tmp.text = elements[i].innerText;
      
    let attrs = elements[i].getAttributeNames();
    for(let j = 0; j < attrs.length; j++) {
      attr[attrs[j]] = elements[i].getAttribute(attrs[j]);
    }
    tmp.attribute = attr;

    data.push(tmp);
  }

  return data;
}

let clickEvent = function (e) {
  
   e.preventDefault();
  clickedElement = e.target;
  let selector = clickedElement.parentNode.tagName 
  if(clickedElement.parentNode.classList.length > 0){
      selector +=  "." + clickedElement.parentNode.classList[0].trim().replaceAll(" ", ",")
      selector = selector.replace(/,\s*$/, "");
   } 
  selector +=  ' ' + clickedElement.tagName
  if(clickedElement.classList.toString().replaceAll("crx_mouse_visited", "").length > 0){
      selector +=  "." + clickedElement.classList.value.toString().trim().replaceAll("crx_mouse_visited", "").replaceAll(" ", ",");
      selector = selector.replace(/,\s*$/, "");
  }


  window.navigator.clipboard.writeText(selector).then(() => {
    alert("selector {{" + selector + "}} is copied in your clipboard");
  });
  chrome.storage.local.set({selector})

  selectorToJson(selector, document);
};


let downloadJson = (object) => {
  let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(object));
  let a = document.createElement('a');
  a.setAttribute("href",     dataStr     );
  a.setAttribute("download", "crawl.json");
  console.log(a);
  a.click();
}


chrome.runtime.onMessage.addListener(
  function(message, sender, sendResponse) {
      switch(message.type) {
          case "changeCheck":
            chrome.storage.local.get(["flag"]).then((result) => {
              let flag = result.flag;
              console.log(flag);
              if(flag == "0" || typeof flag =="undefined" ) {
                chrome.storage.local.set({flag: "1" })
                document.addEventListener('mousemove', mouseEvent);
                document.addEventListener('click', clickEvent);

              }
              
              else if(flag == "1") {
                chrome.storage.local.set({ flag: "0" })
                document.removeEventListener('mousemove', mouseEvent);
                document.removeEventListener('click', clickEvent);

                let elems = document.querySelectorAll(".crx_mouse_visited");

                [].forEach.call(elems, function(el) {
                    el.className = el.className.replaceAll("crx_mouse_visited", "");
                });

              }
              sendResponse({status: 'ok'});
            });
          break;

          case "crawlBtnClick":
            let url = message.url;
            let selector = message.selector;
            let result = [];
            var regExp = /\{([^)]+)\}/;
            
            var matches = regExp.exec(url);

            console.log(matches);

            if(matches && matches.length > 0) { 
              let start = matches[1].split(":")[0];
              let end = matches[1].split(":")[1];

              url = url.replace(matches[1], "{index}");
              
              for(let i = start ; i<=end; i++) {
                setTimeout(() => {
                  pageUrl = url.replace("{{index}}", i);
                  console.log("page : " + i);



                  /************************** */



                  /*************************** */
    
                  $.ajax({
                    url: pageUrl,
                    success: function(data) {
                      var doc = new DOMParser().parseFromString(data, "text/html");
                      result.push(selectorToJson(selector, doc));
                      
                    },
                    error: function(e) {
                      console.log(e);
                    }
                  });

                  if (i == end) {
                    alert("end");
                    downloadJson((result));      
                  }
                }, i * 100)
              
              }
            }

            else {
              result.push(selectorToJson(message.selector, document));
              downloadJson(result);
            }

          break;
      }
    
      sendResponse({status: 'ok'});
  }
);
