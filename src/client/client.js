chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  document.body.style.zoom = request.zoom;
});
