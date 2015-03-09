chrome.storage.sync.get(
	{"type": "white", "startNekoX": 0, "startNekoY": 0},
	function(options) {
		if (options.startNekoX < 0) {
			options.startNekoX += window.innerWidth;
		}
	
		if (options.startNekoY < 0) {
			options.startNekoY += window.innerHeight;
		}

		var config =
		"remoteimages='"+chrome.extension.getURL('/images/')+"';\
		NekoType='"+options.type+"';\
		startNekoX="+options.startNekoX+";\
		startNekoY="+options.startNekoY+";";

		// Load config
		var script = document.createElement('script');
		script.appendChild(document.createTextNode(config));
		(document.body || document.head || document.documentElement).appendChild(script);

		// Load neko.js
		script = document.createElement('script');
		script.setAttribute('src',chrome.extension.getURL('neko.js'));
		(document.body || document.head || document.documentElement).appendChild(script);
});