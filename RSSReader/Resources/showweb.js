var win = Ti.UI.currentWindow;
var webview = Titanium.UI.createWebView({
	url:win.myurl
});
win.add(webview);