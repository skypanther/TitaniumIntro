var rr = {}; // create our namespace rr = Rss Reader

// require the module files
rr.ui = require('ui');
// require in the network library and fetch the RSS feed

require('network').fetchRSSData('http://v2.0.news.tmg.s3.amazonaws.com/feeds/news.xml');

//require('network').fetchRSSData('http://www.rit.edu/news/lib/rss/inthenews.rss');

// open the app's UI
rr.tabGroup = rr.ui.createAppTabs();
rr.tabGroup.open();