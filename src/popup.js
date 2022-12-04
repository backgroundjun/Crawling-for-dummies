document.addEventListener('DOMContentLoaded', function () {
  var checkButton = document.getElementById('check');
  checkButton.addEventListener('click', function () {
    alert("Hey your button is working!");
  }, false);
}, false);

document.getElementById("check").onclick = function () {
  chrome.runtime.sendMessage('START', (response) => {
    // 3. Got an asynchronous response with the data from the service worker
    console.log('received user data', response);
    initializeUI(response);
  });
};