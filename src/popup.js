document.addEventListener('DOMContentLoaded', function () {
  var checkButton = document.getElementById('check');
  checkButton.addEventListener('click', function () {
    alert("Hey your button is working!");
  }, false);
}, false);

window.onload = function() {
  var flag;
  
  chrome.storage.local.get(["flag"]).then((result) => {
    
    flag = (result.flag);
    if(flag == "1") {
      document.getElementById("checkbox").checked = true;
      //0으로 등록하고 
      chrome.storage.local.set({ flag: "0" }).then(() => {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {type:"btnClick"}, function(response){
              console.log('really?');
          });  
        })
      })
    } else {
      document.getElementById("checkbox").checked = false;
    } 
    
    
  });  

  
}



document.getElementById("checkbox").addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {type:"btnClick"}, function(response){
        console.log('really?');
    });  
})});
