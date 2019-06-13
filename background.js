// JS files cannot be inlined due to security, so have to be put in JS files
//   and then registered in the manifest so that they can be used in the page


// Upon installation of the extension, do this stuff
chrome.runtime.onInstalled.addListener(function() {
  // In the storage, change the sync color to green (use later)
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });
});

// On page changed, remove nothing, then add rule with conditions
chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
  chrome.declarativeContent.onPageChanged.addRules([
    {
      // This condition says that when the page state matches this host
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { hostEquals: 'developer.chrome.com' },
        })
      ],
      // Then take this action to ShowPageAction
      actions: [new chrome.declarativeContent.ShowPageAction()]
  }])
})
