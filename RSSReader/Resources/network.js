exports.fetchRSSData = function(url) {
	// Pulls the RSS feed data and returns it to caller
//	var url="http://developer.appcelerator.com/blog/feed"; // blog rss feed url
//	var url="http://rocwiki.org/Events_Board?action=events&rss=1"; // blog rss feed url
//	var url = "http://www.rit.edu/news/lib/rss/inthenews.rss";
	var xhr = Titanium.Network.createHTTPClient();
	url = (url) ? url : "http://developer.appcelerator.com/blog/feed"; // default blog rss feed url
	xhr.open('GET',url);
	xhr.send();
	
	xhr.onload = function() {
		// Data is returned from the blog, start parsing
		var xml = this.responseXML;
		var channel = xml.documentElement.getElementsByTagName("channel");

		// begin looping through blog posts
		var data = [];
		var items = xml.documentElement.getElementsByTagName("item");
		for (var i=0;i<items.length;i++) {
			data.push({
				postTitle: items.item(i).getElementsByTagName("title").item(0).text,
				postLink: items.item(i).getElementsByTagName("link").item(0).text
			});
		}
		// fire an app-level event to notify the UI that the blog data is available
		Ti.App.fireEvent('net:rssDataReturned',{
			blogTitle: channel.item(0).getElementsByTagName("title").item(0).text,
			blogPosts: data
		});
	};
	xhr.onerror = function(e) {
		// should do something more robust
	};
}; // end getRSSData()
