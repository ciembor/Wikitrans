//steal/js wikitrans/scripts/compress.js

load("steal/rhino/steal.js");
steal.plugins('steal/build','steal/build/scripts','steal/build/styles',function(){
	steal.build('wikitrans/scripts/build.html',{to: 'wikitrans'});
});
