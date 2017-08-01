var bsCss = document.createElement('link');
bsCss.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css';
bsCss.rel = 'stylesheet';

var jQuery = document.createElement('script');
jQuery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js';
jQuery.type = 'text/javascript';

var bsJs = document.createElement('script');
bsJs.src = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js';
bsJs.type = 'text/javascript';


document.getElementsByTagName('head')[0].appendChild(bsCss);
document.getElementsByTagName('head')[1].appendChild(jQuery);
document.getElementsByTagName('head')[2].appendChild(bsJs);
