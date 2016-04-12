chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (tab.url.indexOf('pitchfork.com') > -1 || tab.url.indexOf('nhl.com') > -1) {
    chrome.tabs.executeScript(null, {file: '/src/client/client.js'}, function() {
      chrome.tabs.sendMessage(tab.id, {
        'zoom': 0.80
      });
    });
  }
})
