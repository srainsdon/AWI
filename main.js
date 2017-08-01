console.log("Start of AWI...");

var fileTypes = {
		images : 0,
		html : 1,
		document : 2,
		other : 100
}

var aList = $('a').map(function() {
	return this;
}).get();

var fileCount = countFileTypes(aList);
console.log(fileCount);
console.log("...End of AWI");