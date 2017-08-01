console.log("helperFunctions Loaded.");

// removeEverything() - removes everything under the body (ie. blank page)

function removeEverything() {
	while (document.body.firstChild) {
		document.body.firstChild.remove();
	}
}

// imageItemOutput(a tag item) - outputs img link for an image.

function imageItemOutput(item) {
	links += "<div class='col-md-4'><div class='thumbnail'>\n";
	// links += "<img
	// src='data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
	// data-src='http://104.198.129.179/_imageGal/image.php?url=" +
	// encodeURI(value.href) + "'></a>\n";
	links += "<a href='" + item.href
			+ "'><img src='http://104.198.129.179/_imageGal/image.php?url="
			+ encodeURI(item.href) + "'></a>\n";
	links += "</div></div>\n";
	return links;
}

function countFileTypes(list) {
	var data = "";
	var itemArray = {};
	var otherArray = [];
	var htmlArray = [];
	var imageArray = [];
	$.each(list, function(i, item) {
		var url = item.href;
		var filename = url.substring(url.lastIndexOf('/') + 1);
		var ext = getFileExtension(filename);
		switch (ext) {
		case "image":
			itemArray.image.push(item.href);
			imageArray.push(item.href);
			break;
		case "html":
			itemArray.html.push(item.href);
			htmlArray.push(item.href);
			break;
		case "other":
			itemArray.other.push(item.href);
			otherArray.push(item.href);
			break;
		default:
			break;
		}
	});
	data += "File Count:\nImages: " + imageArray.length + "\nHtml: " + htmlArray.length + "\nOther/Unknown: " + otherArray.length;
	console.log(itemArray);
	return data;
}

function getFileExtension(filename) {
	if (filename.lastIndexOf('.') == -1) {
		return "other";
	};
	var ext = (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename) : undefined;
	switch (ext.toString().toLowerCase()) {
	case "jpg":
	case "png":
	case "gif":
		return "image";
		break;
	case "htm":
	case "html":
		return "html";
		break;
	case "pdf":
		return "document";
		break;
	default:
		return "other";
	}
}