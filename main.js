var srcList = $('a').map(function() {
    return this;
}).get();

var exc = [ "Name", "Last modified"];
var links = "\n";

$.each( srcList, function( i, value ) {
  if( value.href.indexOf('.jpg') !== -1 ){
	  links += "<div class='col-md-4'><div class='thumbnail'>\n";
      //links += "<img src='data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=' data-src='http://104.198.129.179/_imageGal/image.php?url=" + encodeURI(value.href) + "'></a>\n";
      links += "<a href='" + value.href + "'><img src='http://104.198.129.179/_imageGal/image.php?url=" + encodeURI(value.href) + "'></a>\n";
      links += "</div></div>\n";
  }
});

$( "body" ).prepend( "<div>" + links + "</div>" );

