
window.onload = function() {
  var flag;
  
  chrome.storage.local.get(["flag"]).then((result) => {
    
    flag = (result.flag);
    if(flag == "1") {
      document.getElementById("checkbox").checked = true;
      chrome.storage.local.set({ flag: "0" }).then(() => {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {type:"changeCheck"}, function(response){});  
        })
      })
    } else {
      document.getElementById("checkbox").checked = false;
    } 


    chrome.storage.local.get(["selector"]).then((result) => {
      selector = result.selector
      console.log(selector);

      document.getElementById("selector").value = selector;
    });
    
    
  });  

  
}



document.getElementById("checkbox").addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {type:"changeCheck"}, function(response){});  
})});


document.getElementById("crawlBtn").addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    let url = document.getElementById("url").value;
    let selector = document.getElementById("selector").value;
    chrome.tabs.sendMessage(tabs[0].id, {type:"crawlBtnClick", url, selector}, function(response){
        console.log('really?');
    });  
})});
