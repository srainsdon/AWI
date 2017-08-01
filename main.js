console.log("Start of AWI...");

var aList = $('a').map(function() {
	return this;
}).get();

var fileTypes = countFileTypes(aList);

console.log("...End of AWI");