/*global module: true, ok: true, equals: true, S: true, test: true */
module("result", {
	setup: function () {
		// open the page
		S.open("//wikitrans/wikitrans.html");

		//make sure there's at least one result on the page before running a test
		S('.result').exists();
	},
	//a helper function that creates a result
	create: function () {
		S("[name=name]").type("Ice");
		S("[name=description]").type("Cold Water");
		S("[type=submit]").click();
		S('.result:nth-child(2)').exists();
	}
});

test("results present", function () {
	ok(S('.result').size() >= 1, "There is at least one result");
});

test("create results", function () {

	this.create();

	S(function () {
		ok(S('.result:nth-child(2) td:first').text().match(/Ice/), "Typed Ice");
	});
});

test("edit results", function () {

	this.create();

	S('.result:nth-child(2) a.edit').click();
	S(".result input[name=name]").type(" Water");
	S(".result input[name=description]").type("\b\b\b\b\bTap Water");
	S(".update").click();
	S('.result:nth-child(2) .edit').exists(function () {

		ok(S('.result:nth-child(2) td:first').text().match(/Ice Water/), "Typed Ice Water");

		ok(S('.result:nth-child(2) td:nth-child(2)').text().match(/Cold Tap Water/), "Typed Cold Tap Water");
	});
});

test("destroy", function () {

	this.create();

	S(".result:nth-child(2) .destroy").click();

	//makes the next confirmation return true
	S.confirm(true);

	S('.result:nth-child(2)').missing(function () {
		ok("destroyed");
	});

});