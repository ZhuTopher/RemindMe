chrome.extension.onMessage.addListener(function(request,sender,sendResponse){
	if(request.greeting === "openTab") {
		chrome.tabs.create("https://www.google.com/");
		sendResponse();
	}
})