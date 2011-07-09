module("wikitrans test", { 
	setup: function(){
		S.open("//wikitrans/wikitrans.html");
	}
});

test("Copy Test", function(){
	equals(S("h1").text(), "Welcome to JavaScriptMVC 3.0!","welcome text");
});