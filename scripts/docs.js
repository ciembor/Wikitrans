//js wikitrans/scripts/doc.js

load('steal/rhino/steal.js');
steal.plugins("documentjs").then(function(){
	DocumentJS('wikitrans/wikitrans.html');
});