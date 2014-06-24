chrome.storage.sync.get(['type','startNekoX','startNekoY'], function(items) {
	var type = 'white';
	var startNekoX = 0;
	var startNekoY = 0;

	if (items) {
		if (items.type) {
			type = items.type;
		}
		if (items.startNekoX) {
			startNekoX = items.startNekoX;
			
			if (startNekoX < 0) {
				startNekoX += window.innerWidth;
			}
		}
		if (items.startNekoY) {
			startNekoY = items.startNekoY;
			
			if (startNekoY < 0) {
				startNekoY += window.innerHeight;
			}
		}
	}

	var config =
	"remoteimages='"+chrome.extension.getURL('/images/')+"';\
	NekoType='"+type+"';\
	startNekoX="+startNekoX+";\
	startNekoY="+startNekoY+";";

	// Load config
	var script = document.createElement('script');
	script.appendChild(document.createTextNode(config));
	(document.body || document.head || document.documentElement).appendChild(script);

	// Load neko.js
	script = document.createElement('script');
	script.setAttribute('src',chrome.extension.getURL('neko.js'));
	(document.body || document.head || document.documentElement).appendChild(script);
});