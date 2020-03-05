var count = 0;

function logURL(requestDetails) {
	if (typeof requestDetails.documentUrl == 'undefined')
		return;
	console.log("File parsed : " + requestDetails.url);

 	if (requestDetails.url.includes('.jpg')) {
	browser.downloads.download({
		url : requestDetails.url.split(".jpg")[0] + ".jpg",
		filename : ("TEMP/" + String(count) + ".jpg"),
		saveAs : false,
		incognito : false});
    	}
	if (requestDetails.url.includes('.png')) {
	browser.downloads.download({
		url : requestDetails.url.split(".png")[0] + ".png",
		filename : ("TEMP/" + String(count) + ".png"),
		saveAs : false,
		incognito : false});
        console.log("File downloaded : " + requestDetails.url);
        count = count + 1;
    	}
}

browser.webRequest.onBeforeRequest.addListener(
  logURL,
  {urls: ["<all_urls>"]}
);
