module("Model: Wikitrans.Suggestion")

test("findAll", function(){
	stop(2000);
	Wikitrans.Suggestion.findAll({}, function(suggestions){
		start()
		ok(suggestions)
        ok(suggestions.length)
        ok(suggestions[0].name)
        ok(suggestions[0].description)
	});
	
})

test("create", function(){
	stop(2000);
	new Wikitrans.Suggestion({name: "dry cleaning", description: "take to street corner"}).save(function(suggestion){
		start();
		ok(suggestion);
        ok(suggestion.id);
        equals(suggestion.name,"dry cleaning")
        suggestion.destroy()
	})
})
test("update" , function(){
	stop();
	new Wikitrans.Suggestion({name: "cook dinner", description: "chicken"}).
            save(function(suggestion){
            	equals(suggestion.description,"chicken");
        		suggestion.update({description: "steak"},function(suggestion){
        			start()
        			equals(suggestion.description,"steak");
        			suggestion.destroy();
        		})
            })

});
test("destroy", function(){
	stop(2000);
	new Wikitrans.Suggestion({name: "mow grass", description: "use riding mower"}).
            destroy(function(suggestion){
            	start();
            	ok( true ,"Destroy called" )
            })
})