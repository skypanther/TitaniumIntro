var win = Ti.UI.createWindow({
	backgroundColor:'white',
	modal: true,
	title:'RIT Campus'
});

var anno = Ti.Map.createAnnotation({
	latitude:43.082602,
	pincolor:Titanium.Map.ANNOTATION_GREEN,
	longitude:-77.676859,
	title:"RIT Campus Rochester",
	rightButton: 'rit_logo.png'
});
var map = Ti.Map.createView({
	region: {
		latitude:43.082602,
		longitude:-77.676859,
		latitudeDelta:0.01,
		longitudeDelta:0.01},
	animate:true,
	regionFit:true,
	annotations:[anno]
});
map.addEventListener('click', function(e){
	if(e.clicksource=='rightButton') {
		alert('I was clicked!');
	}
});

win.add(map);
win.open();
