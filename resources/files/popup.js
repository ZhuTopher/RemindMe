document.getElementById("Hello").onclick = function() {
	chrome.extension.sendMessage({greeting: "openTab"}, function (response) {});
};