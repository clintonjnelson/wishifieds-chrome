let changeColor = document.getElementById('changeColor');

// Get the color stored in storage.sync (we did that earlier when loaded ext)
chrome.storage.sync.get('color', function(data) {
  console.log('DATA COLOR IS: ', data.color);
  // Change some stuff using the background color we got from storage.sync
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color)
});

// What to do when user clicks the current button
changeColor.onclick = function(element) {
  console.log("[in changeColor.onclick]: CLICKED THE BUTTON...");
  window.alert("executing on the click");
  // For the clicked element, get the value (which is color)
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "' + color + '";'});
  });

  // THIS WORKS TO CALL THE API!
  chrome.tabs.query({active: true, currentWindow: true}, function(tab) {
    let api = 'http://localhost:5000/api/external/getimages';  //tab.url;
    let tabUrl = tab.url;
    window.alert("URL OF THE TAB IS: ", tabUrl);
    let jsonBody = '"url":"' + tabUrl + '"';
    window
      .fetch(api, {mode: 'cors', method: 'post', body: jsonBody })
      .then(function(response) {
        window.alert("SUCCESSFUL RESPONSE: ", response);
        console.log("RESPONSE IS: ", response);
      })
      .catch(function(err) {
        window.alert("BOOM. Failed the request.");
      });
  });
};



// Recall how they changed the info on the current tab?
//   We'll want tab-level information also.

